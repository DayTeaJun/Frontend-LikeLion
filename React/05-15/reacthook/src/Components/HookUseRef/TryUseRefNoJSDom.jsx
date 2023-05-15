import React, { useState, useRef } from "react";

const TryUseRefNoJSDom = () => {
  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값

  const emailInput = useRef(null);
  const pwInput = useRef(null);

  const inputCheck = (e) => {
    e.preventDefault();
    console.log("로그인 버튼 누름");
    // 아래처럼 DOM을 선택해서 사용가능.
    // DOM선택을 JS로 하지않고 리액트로 하고싶을 때 Ref로 선택
    console.log(emailInput.current.value, pwInput.current.value);
    if (emailInput.current.value === "") {
      alert("이메일 입력하셈");
      emailInput.current.focus();
    } else if (pwInput.current.value === "") {
      alert("비밀번호 입력하셈");
      pwInput.current.focus();
    }
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
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
