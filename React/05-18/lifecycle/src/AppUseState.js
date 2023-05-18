import React, { useEffect, useState } from "react";

function getName() {
    console.log("사실은 겁나 오래기다리는중...");
    return "개리";
}

function App() {
    // 복잡한 함수값을 초기화해야할 때, 함수실행이 아닌 함수만 넣으면, 리렌더링 되더라도 한번만 실행해준다.
    const [name, setName] = useState(getName);
    const [num, setNum] = useState(0);
    return (
        <>
            <div>안녕하세요 {name}! 현재 숫자는{num}입니다</div>
            {/* 아래 setNum((prevNum) => prevNum + 1) 은 함수형 업데이트를 이용하여 prevNum은 이전의 num값을 받아와서 +1한다.
            이러한 내용을 방탄 코드(안전한 코드)라고 한다.
            useState가 비동기적으로 실행이되서 이전 값을 보장해줄려고 할때 사용 */}
            <button onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</button>
        </>
    )
}


export default App;