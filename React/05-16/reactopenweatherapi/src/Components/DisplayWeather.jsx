import React, { useState, useEffect } from 'react';
import './loading.css'

export default function DisplayWeather(props) {
  const cityValue = props.inptLocation;
  const key = '34bc9f0e13f7fdd3adac28b4f182d8ad';
  const [apiValue, setApiValue] = useState('');
  const [secondApiValue, setSecondApiValue] = useState('');
  const [loading, setLoading] = useState(true);

  function currentLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        error => {
          reject('error');
        },
      );
    });
  }

  const getWeather = async () => {
    try {
      const { latitude, longitude } = await currentLocation();
      const responseFirst = fetch(
        `https://api.openweathermap.org/data/2.5/weather?${
          cityValue ? 'q=' + cityValue : 'lat=' + latitude + '&lon=' + longitude
        }&appid=${key}&units=metric&lang=KR`,
      );
  
      const responseSecond = fetch(
        `https://api.openweathermap.org/data/2.5/forecast?${
          cityValue ? 'q=' + cityValue : 'lat=' + latitude + '&lon=' + longitude
        }&appid=${key}&units=metric&lang=KR`,
      );
  
      const [data1, data2] = await Promise.all([responseFirst, responseSecond])
  
      const result1 = await data1.json();
      const result2 = await data2.json();
  
      console.log('a:', result1);
      console.log('b', result2);
  
      const oneDay = 1000 * 60 * 60 * 24;
      const offset = 1000 * 60 * 60 * 9;
      const today = new Date().getTime() + offset;
      const DesiredTime = ' 18:00:00';
      const oneDaysLater = new Date(today + oneDay).toISOString().slice(0, 10) + DesiredTime;
      const twoDaysLater = new Date(today + oneDay * 2).toISOString().slice(0, 10) + DesiredTime;
      const threeDaysLater = new Date(today + oneDay * 3).toISOString().slice(0, 10) + DesiredTime;
  
      const data = result2.list.filter(item => {
        return item.dt_txt === oneDaysLater || item.dt_txt === twoDaysLater || item.dt_txt === threeDaysLater;
      });
  
      console.log('첫번재 API', result1);
      setApiValue(result1);
  
      console.log('두번째 API', result2);
      console.log('추출한 데이터', data);
      setSecondApiValue(data);
  
      setLoading(false);
    } catch (error) {
      console.error('Error: ', error);
      props.turnBack();
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  // * 첫번째 API
  // 날씨 이름 : name
  // 날씨 그림 : apiValue.weather[0].icon
  // 날씨 설명 : weather[0].description
  // 날씨 온도(최고/최저) : main.temp / main.temp_max / main.temp_min

  // * 두번째 API
  // 날씨 그림 : weather[0].icon
  // 예보 일자 : dt_txt
  // 날씨 설명 : weather[0].description
  // 날씨 온도 : main.temp

  return (
    <>
      {loading ? (
        <div class="loading">Loading&#8230;</div>
      ) : (
        <div onClick={props.turnBack}>
          <div className="today-weather">
            <h1>Now</h1>
            <h1>{apiValue.name}</h1>
            <h2>
              <img src={`https://openweathermap.org/img/wn/${apiValue.weather[0].icon}.png`} alt="" />
            </h2>
            <h2>{apiValue.weather[0].description}</h2>
            <h2>{apiValue.main.temp}</h2>
            <h3>
              최고: {apiValue.main.temp_max} | 최저: {apiValue.main.temp_min}
            </h3>
          </div>

          <div className="feature-weathers">
            {secondApiValue.map((item, index) => {
              return (
                <div className="feature-weather" key={index}>
                  <h4>
                    <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="" />
                  </h4>
                  <h4>{item.dt_txt.slice(5, 10)}</h4>
                  <h5>{item.weather[0].description}</h5>
                  <h5>{item.main.temp}</h5>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}