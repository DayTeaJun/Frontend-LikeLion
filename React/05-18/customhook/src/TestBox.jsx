import React from 'react'
import useMouseLocation from './Hook/useMouseLocation'

export default function TestBox() {

    // 로케이션으로 반환 받아도 되고
    const location = useMouseLocation();
    // 구조분해할당으로 받아도 됨
    // const {x, y} = useMouseLocation();

    console.log(location);

    return (
        <div style={{ height: 100, width: 100, backgroundColor: location.y > 200 ? "royalblue" : "hotpink" }}>TestBox</div>
    )
}
