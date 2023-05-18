import React, { useState, useEffect } from 'react'

export default function useScrollBottom() {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            // document.documentElement:  document객체에서 현재 사용자가 보고 있는 html문서가 상단에서 얼마나 스크롤 됬는지 확인
            // window.innerHeight : 현재 사용자가 보고있는 높이값
            // console.log(document.documentElement.scrollTop + window.innerHeight);

            // 현재 총 화면의 렌더링되어있는 높이값
            // console.log(document.documentElement.offsetHeight);

            // 스크롤내리다보면 잘 안됨.
            setIsBottom(Math.ceil(document.documentElement.scrollTop + window.innerHeight + 30) >= document.documentElement.offsetHeight)
        })
    }, [])

    return isBottom;
}
