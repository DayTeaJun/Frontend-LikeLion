import { useState, useMemo } from "react";

function 부하() {
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }

  console.log("렌더링 끝");
  return s;
}

function TryUseMemo() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  };

  console.log("랜더링!!");

  // 평소에는 memo(여기서는 리턴된 함수)를 기억해두고 가져올수 있게 함.
  // countTwo가 바뀌었을 때 부하()를 실행시키는 메모
  // 그리고 부하가 실행된 값을 result에 넣어줌
  // countTwo가 만약 바뀌지 않았을경우 이전에 계산한 값을 가져온다.
  const result = useMemo(() => {
    return 부하();
  }, [countTwo]);
  // [] 은 의존(디펜던시), 빈배열을 넣으면 의존하는게 없어서 한번만 실행

  return (
    <div className="App">
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
    </div>
  );
}
export default TryUseMemo;
