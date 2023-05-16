import "./index.css";
import React, { useState, useEffect } from "react";

function App() {
  const cityValue = "seoul";
  const key = "d740fe7d0e80afbf82a9e591bf13144f";

  const [apiValue, setApiValue] = useState("");
  const [secondApiValue, setSecondApiValue] = useState("");
  const [loading, setLoading] = useState(true);

  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}`
    );
    const result = await response.json();
    setApiValue(result);
    console.log("첫번째 API : ", result);
  };

  const getFutureWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${key}`
    );
    const result = await response.json();

    const oneDay = 1000 * 60 * 60 * 24;
    const offset = 1000 * 60 * 60 * 9;
    const today = new Date().getTime() + offset;
    const DesiredTime = " 18:00:00";
    const oneDaysLater =
      new Date(today + oneDay).toISOString().slice(0, 10) + DesiredTime;
    const twoDaysLater =
      new Date(today + oneDay * 2).toISOString().slice(0, 10) + DesiredTime;
    const threeDaysLater =
      new Date(today + oneDay * 3).toISOString().slice(0, 10) + DesiredTime;

    // 데이터 추출
    const data = result.list.filter((item) => {
      return (
        item.dt_txt === oneDaysLater ||
        item.dt_txt === twoDaysLater ||
        item.dt_txt === threeDaysLater
      );
    });

    console.log(data);
    setSecondApiValue(result);
    setLoading(false);
    console.log("두번째 API : ", result);
  };

  useEffect(() => {
    getWeather();
    getFutureWeather();
  }, []);

  // 날씨 이름 : name
  // 날씨 그림 : weather[0].icon
  // 날씨 설명 : weather[0].description
  // 날씨 온도(최고/최저) : main.temp / main.temp_max / main.temp_min

  return (
    <div className="today-weather">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Now</h1>
          <h1>{apiValue.name}</h1>
          <h2>
            <img
              src={`https://openweathermap.org/img/wn/${apiValue.weather[0].icon}.png`}
              alt=""
            />
          </h2>
          <h2>{apiValue.weather[0].description}</h2>
          <h2>{apiValue.main.temp}</h2>
          <h3>
            최고:{apiValue.main.temp_max} | 최저:{apiValue.main.temp_min}
          </h3>
        </>
      )}
    </div>
  );
}

export default App;
