import React from "react";
import styled from "styled-components";

import Hello from "./Hello";

// 이렇게 하면 클래스네임을 난수화해서 적용함.
// div class="난수"
const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
  color: red;
`;

const App = () => {
  return (
    <ContentDiv>
      <ContentH2>Q&A</ContentH2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
      <Hello />
    </ContentDiv>
  );
};

export default App;
