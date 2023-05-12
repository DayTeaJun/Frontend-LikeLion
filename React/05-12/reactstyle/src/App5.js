import React from "react";
import styled, { css } from "styled-components";

// 아래는 styled-components css를 사용함
// One이라는 객체에 css스타일을 담음
const One = css`
  color: red;
`;

// 스타일만 생성해서 컴포넌트처럼 불러오지 못함.
const Two = css`
  border: 1px solid black;
`;

// 컴포넌트를 생성하여 스타일을 받아서 상속하여 사용함.
const Three = styled.div`
  ${One}
  ${Two}
`;

const App = () => {
  return <Three>Lorem ipsum dolor</Three>;
};

export default App;
