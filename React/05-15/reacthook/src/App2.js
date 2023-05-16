import React, { useState, useRef } from "react";

function App() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  console.log(inputs);

  const nameInput = useRef();

  const { name, nickname } = inputs;
  // 비구조화 할당을 통해 값 추출
  // 정리하면 inputs.name, inputs.nickname 을 각각 name, nickname의 변수에 할당함.
  // console.log(inputs.name);
  // console.log(name);

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    // console.log([name])
    // console.log(value)
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value,
      // 후에 같은 키값의 프로퍼티를 넣으면 뒤의 프로퍼티만 적용된다.
      // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default App;
