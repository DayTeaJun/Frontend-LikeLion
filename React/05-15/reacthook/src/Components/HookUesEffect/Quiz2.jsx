import React, { useState, useEffect } from "react";

function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());

  console.log("렌더링이 됩니다..?"); //렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.

  // 무한으로 계속 실행됨(num + 1) Time이 그려질 때마다 계속 실행되기 때문.
  // setState가 변경될 때마다 이 컴포넌트 전체가 리렌더링됨.
  // const [num, setNum] = useState(0);
  // setNum(num + 1);

  // setInterval이 계속 실행됨. (화면이 그려질 때마다.)
  // setState => 화면이 새로 그려짐.
  // 화면이 그려진다는 것은 Time() 을 실행한다는 것
  // 1초마다 setState해주는 interval이 계속 증가함.
  //   alert("인터벌이 생성됨");
  // setTime으로 하면 별 문제 없긴한데, 조금 문제있음.
  //   setInterval(() => {
  //     const today = new Date();
  //     setToday(today);
  //     setHour(today.getHours());
  //     setMin(today.getMinutes());
  //     setSec(today.getSeconds());
  //   }, 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      setToday(today);
      setHour(today.getHours());
      setMin(today.getMinutes());
      setSec(today.getSeconds());
    }, 1000);
    // clean-up
    return () => {
      clearInterval(interval);
    };
  }, [today]);
  // [] 로 해주면 clean-up을 하지 않고도 한번씩만 실행되기 때문에 잘 작동함.
  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

export default Time;
