import { useState } from 'react';

// 커스텀 훅으로 initState를 매개변수로 보내고
// 커스텀 훅을 사용한 컴포넌트의 값을 받음
function useInput(initState) {
    const [value, setValue] = useState(initState);
    function onChange(e) {
        setValue(e.target.value);
    }
    return [value, onChange];
}

export default useInput;