import React, { useEffect, useState } from 'react'
import styled from "styled-components"

// styled 컴포넌트 선언할땐 대문자로 시작함
const Item = styled.div`
    margin: 60px auto;

    /* div요소의 자식인 ul (Sass문법) */
    ul {
        padding: 10px;
    }

    li {
        margin: 10px;
        padding: 10px;
        border: 1px solid black;
        border-radius: 10px;
        box-shadow: 4px 4px 6px rgb(0,0,0,0.1);
        box-sizing: border-box;

        list-style: none;
    }
`

export default function NationList() {

    const [nations, setNations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState("http://localhost:3000/nations")

    // useEffect(() => {
    //     fetch("http://localhost:3000/nations")
    //         // fullfilled된
    //         .then(response => {
    //             // http 상태코드가 200번때가 아닐 경우
    //             if (!response.ok) {
    //                 throw new Error("네트워크 응답에 문제가 있습니다.");
    //             }
    //             return response.json()
    //         })
    //         .then(json => {
    //             setNations(json)
    //             setLoading(false);
    //             console.log(json);
    //         })
    //         .catch((error) => {
    //             console.error('데이터를 가져오는데 문제가 발생했습니다 : ', error);
    //         })
    // }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("네트워크 응답 문제발생");
                }
                // .json도 promise객체라서 비동기로 작동함.
                const json = await response.json()

                setNations(json);
                setLoading(true);
            } catch (error) {
                console.error('데이터를 가져오는데 문제가 발생했습니다 : ', error);
            }
        }

        fetchData();
    }, [url]);

    console.log(nations);

    return (
        <Item>
            <div>
                {/* ? 쿼리문으로 질문함  */}
                <button onClick={() => { setUrl("http://localhost:3000/nations?loc=europe") }}>유럽 목록</button>
                <button onClick={() => { setUrl("http://localhost:3000/nations") }}>전체 목록</button>
            </div>
            <h2>나라 목록</h2>
            <ul>
                {nations.map((item) => {
                    return (
                        <li key={item.id}>
                            <h3>국가 : {item.title}</h3>
                            <p>번호 : {item.id}</p>
                            <p>인구 수 : {item.population}</p>
                            <p>지역 : {item.loc}</p>
                        </li>
                    )
                })}
            </ul>


        </Item>
    )
}