// import { createGlobalStyle } from "styled-components";
// import Example from "./Components/Example";

// // 기본적으로 global 우선 순위가 높다.
// const GlobalStyle = createGlobalStyle`
// span {
//   color: red;
//   font-size: 12px;
// }
// `;

// function App() {
//   const name = "이호준";
//   const age = 10;

//   // 나이가 40으로 되는 이유는
//   // 나이(${age + age}) + 나이(${age + age}) 이기 때문
//   function 인사(문구, 이름, 나이) {
//     console.log(문구);
//     console.log(문구, 이름, 나이);
//     return `${문구[0]}${이름}${문구[1]}${나이 + 나이}${문구[2]}`;
//   }
//   // 바닐라 자바스크립트 문법 ES6에 도입 tagged tamplate literal
//   // tagged template literal은 자바스크립트 표현식(${})이 있으면 그것을 기준으로 문자를 자른다.

//   const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age + age}입니다.`;

//   console.log(인사문구);
//   return (
//     <>
//       <GlobalStyle />
//       <h1>hello world 1</h1>
//       <span>hello world 2</span>
//       <Example />
//     </>
//   );
// }

// export default App;

import { createGlobalStyle } from "styled-components";
import Example from "./Components/Example";
// import reset from "styled-reset";
import normalize, { Normalize } from "styled-normalize";
/* ${reset} */
const GlobalStyle = createGlobalStyle`
    ${normalize}
    
    span {
    color: red;
    font-size: 12px;
    }

    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        border : none;
        cursor : pointer;
    }

    * {
    box-sizing: border-box;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example />
    </>
  );
}

export default App;
