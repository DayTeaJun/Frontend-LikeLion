import React from 'react'
import { useState } from "react";

export default function Counter() {

    const [number, setNumber] = useState(0);

    function increment() {
        setNumber(number + 1);
        // 아래처럼 함수형으로 넣으면 이전 버전의 값을 보장함.
        // 그래서 +2 가 된다.
        setNumber((prevNumber) => prevNumber + 1)
    }

    function decrement() {
        setNumber(number -1);
        setNumber((prevNumber) => prevNumber - 1)
    }

  return (
    <div>
        <h2>Counter : {number}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
    </div>
  )
}
