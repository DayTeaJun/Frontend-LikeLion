import React from "react";
import styled, { css } from "styled-components";

const Common = css`
  background-color: skyblue;
  color: white;
  padding: 10px;
  font-weight: 700;
`;

const Button1 = styled.button`
  ${Common}
  border: solid 2px;
  border-color: black gray gray black;
`;

const Button2 = styled.button`
  ${Common}
  color: black;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 0px 4px 0px black;
`;

const Button3 = styled(Button2)`
  ${Common}
  transition: 0.5s;
  &:hover {
    scale: 1.5;
  }
`;

// 여러개 빼낼 때
export { Button1, Button2, Button3 };

// 하나만 빼낼 때
// export default Button1;
