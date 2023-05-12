import React from "react";
import styled from "styled-components";

const ContentOne = styled.div`
  margin: 40px;
`;

const ContentTwo = styled.div`
  color: red;
`;

// styled에 소괄호로 이미만든 클래스스타일을 넣을 경우
// 그 클래스 스타일을 가져온다(상속받음)
const ContentThree = styled(ContentTwo)`
  border: 1px solid black;
`;

function App() {
  return (
    <div>
      <ContentOne>hello world</ContentOne>
      <ContentTwo>hello world</ContentTwo>
      <ContentThree>hello world</ContentThree>
    </div>
  );
}

export default App;
