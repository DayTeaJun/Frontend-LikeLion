// App.js에서 Licat 컴포넌트에서 프로퍼티(속성)을 넣어준 후 그 프로퍼티를 받아올 수 있다. (props)
// 컴포넌트 이름을 목적에 맞게(명확하게) 변경 (Licat => Hello)
function Hello(props) {
  const name = "라이캣!";
  const someStyle = { backgroundColor: "black", color: "white" };
  return (
    <div>
      <h1 style={someStyle}>안녕, {props.name} 1호</h1>
      <h1>안녕, {name} 2호!</h1>
      <div className="newClass" />
    </div>
  );
}

// React Extension
// 컴포넌트 빠르게 만들어주는 단축키
// rfc (react function component 약자)
// import React from 'react'

// 컴포넌트 앞에 바로 export해줘도 됨 (하나일 경우)
// export default function Hello() {
//   return (
//     <div>Hello</div>
//   )
// }

export default Hello;
