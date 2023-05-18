import { useEffect } from "react";
import { useState } from "react";

// iniVal (초기화 값을 미리 세팅함)
export default function useMouseLocation(iniVal) {

    // ||(파이프 연산자)로 앞의 값이 undefined라면 뒤의 값을 부름
    const [mouseLocation, SetMouseLocation] = useState(iniVal || { x: 0, y: 0 });

    useEffect(() => {
        window.addEventListener('mousemove', (event) => {
            SetMouseLocation({ x: event.x, y: event.y })
        });
    }, [])

    // 함수가 변환해야할 값은 mouseLocation임
    return mouseLocation
}
