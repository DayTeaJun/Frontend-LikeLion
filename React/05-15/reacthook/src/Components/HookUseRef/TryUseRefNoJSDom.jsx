import React, { useState, useRef } from "react";

const TryUseRefNoJSDom = () => {
  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값

  // 왜 값을 넣어도 변화가 없을까?
  const emailInput = useRef("하루차");
  const pwInput = useRef("1234");
  console.log(emailInput.current.value)
  console.log(pwInput)

  const inputCheck = (e) => {
    e.preventDefault();
    console.log("로그인 버튼 누름");
    // 아래처럼 DOM을 선택해서 사용가능.
    // DOM선택을 JS로 하지않고 리액트로 하고싶을 때 Ref로 선택
    // emailInput.current.value 는 해당 돔의 ref속성의 value
    console.log(emailInput.current.value, pwInput.current.value);
    // emailInput.current 해당 돔을 출력.
    console.log(emailInput.current, pwInput.current)
    
    // if (emailInput.current.value === "") {
    //   alert("이메일 입력하셈");
    //   emailInput.current.focus();
    // } else if (pwInput.current.value === "") {
    //   alert("비밀번호 입력하셈");
    //   pwInput.current.focus();
    // }
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        {/* useRef() 를 사용하여 Ref 객체를 만들고, 이 객체를 우리가 선택하고 싶은 DOM 에 ref 값으로 설정해주어야 합니다. 그러면, Ref 객체의 .current 값은 우리가 원하는 DOM 을 가르키게 됩니다. */}
        이메일 : <input type="email" ref={emailInput} />
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput} />
      </label>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
        로그인
      </button>
      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>
    </form>
  );
};

export default TryUseRefNoJSDom;
