// import React, { useEffect, useState, useLayoutEffect } from 'react'

// export default function App4() {
//     const [num, setNum] = useState(0);

//     // useEffect는 화면이 바뀌고(아래의 onClick) 실행이 되기 때문에
//     // 11을 그렸다가 10을 다시 그림(state가 변경될 때)
//     // useEffect(() => {

//     //     setNum(10); //사실은 엄청 오래걸리고 어려운 로직

//     // }, [num]);

//     // LayoutEffect는 화면이 바뀌기 전에 실행되서 번쩍거림이 없어짐
//     useLayoutEffect(() => {

//         setNum(10); //사실은 엄청 오래걸리고 어려운 로직

//     }, [num]);


//     return (
//         <>
//             <div>{num}</div>
//             <button onClick={() => setNum(prevNum => prevNum + 1)}>클릭</button>
//         </>
//     )
// }

import { useState, useEffect, useLayoutEffect } from 'react'

function App() {
    const [value, setValue] = useState(100);

    // useEffect는 화면이 바뀌고(아래의 onClick)
    // 실행(useEffect)이 되기 때문에
    // setValue로 인해 재 렌더링됨.
    // useEffect(() => {
    //     if (value >= 1000) {
    //         setValue(300);
    //     }
    // }, [value]);

    // 화면에 컴포넌트가 렌더링이 끝마치기 전에 끝남
    // value가 변경되었을 때 렌더링하고 끝마치기 전에 끝남
    useLayoutEffect(() => {
        if (value >= 1000) {
            setValue(300);
        }
    }, [value]);

    // 순서
    // 1. 커져라 버튼을 클릭한다. setValue 가 실행되면서 상태값을 변경한다.
    // 2. Value 값이 수정되면서 컴포넌트를 재랜더링한다. 연결된 파란 상자의 스타일이 변경된다.
    // 3. 랜더링이 끝나고 Value 값이 변한것을 감지한 useEffect 가 실행된다.
    // 4. setValue 가 실행되면서 상태값을 또 변경한다.
    // 5. 컴포넌트가 재랜더링 되면서 파란상자의 스타일이 변경된다.

    return (
        <div>
            {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
            <div style={{ width: value, height: value, backgroundColor: 'blue' }}></div>
            <button onClick={() => { setValue(1000) }}>커져랏!</button>
            <button onClick={() => { setValue(200) }}>작아져랏!</button>
        </div>
    )
}

export default App;