// function Resume(props) {
//   return (
//     <div style={{ border: "1px solid black", padding: "10px 5px" }}>
//       <h2>{props.name} 자기소개서</h2>
//       <h2>{props.hello}</h2>
//       <h3>취미 : {props.hobby}</h3>
//       <h3>좋아하는 음식 : {props.food}</h3>
//       <h3>
//         좋아하는 색 : <span style={{ color: "blue" }}>{props.color}</span>
//       </h3>
//     </div>
//   );
// }

// `useState`를 사용하게 되면 `setState(예시에서는 setLike)`를 통해 값이 변경될 때 리액트는 자동으로 해당 컴포넌트를 다시 랜더링해줍니다.
// 리액트는 어떤 상태(state)가 변경되면 그 부분을 다시 랜더링하는 특징이 있기 때문에 화면에서 계속 바뀌는 부분은 대부분 state를 사용합니다. 또한 다시 랜더링 할 필요가 없는 데이터는 useState를 사용하지 않음으로 자원을 아낄 수 있습니다.
import React, { useState } from "react";
// { useState }안쓰면 쓸때마다 React.useState 라고 써야함

function Resume(props) {
  const [like, setLike] = useState(0);
  // useState(0)은 [like, setLike] 중 첫번째 원소인 like에 0을 줌
  // setLike(함수명은 변경가능하나 set으로 시작하는 것을 암묵적으로 함)는 useState 자료(여기서는 like) 변경할 때 사용
  function clickLike() {
    // like +1 은 기존의 like 값과 1을 더해 새로운 값을 반환하는것이고
    // like++ 변수의 값 자체를 직접적으로 변경하려는 시도로 안됨 (상수라서)
    setLike(like + 1);
  }

  const [like2, setLike2] = useState("");
  function clickLike2() {
    if (like2 === "") {
      setLike2("Like");
    } else {
      setLike2("");
    }
  }

  const [txt, settxt] = useState("hello");

  const myColor = props.color;
  const styleColor = { color: myColor };
  return (
    <div style={{ border: "1px solid black", padding: "10px 10px" }}>
      <h2>{props.name} 자기소개서</h2>
      <strong>{props.hello}</strong>
      <dl>
        <dt>취미 : </dt>
        <dd>{props.hobby}</dd>
        <dt>좋아하는 음식 : </dt>
        <dd>{props.food}</dd>
        <dt>좋아하는 색 : </dt>
        <dd>
          <span style={{ color: props.color }}>{props.color}</span>
        </dd>
      </dl>
      <button onClick={clickLike}>
        like <span>{like}</span>
      </button>
      {/* 처음의 value값이 hello로 기본값으로 되어있어, 사용자가 바꾸질 못함 */}
      <input type="text" value={txt}></input>
      <button onClick={clickLike2}>like</button>
      <span>{like2}</span>
    </div>
  );
}
/* 변수의 값이 바뀌어도 페이지는 랜더링하지 않기 때문인데요. 모든 변수가 변할때마다 컴포넌트를 업데이트 한다면 많은 리소스가 낭비될 것입니다. 그래서 특정 변수를 지정하여 그 변수가 변할 때마다 컴포넌트를 업데이트하라는 명령을 내려주어야 합니다. 가상돔은 자바스크립트 객체 형태로, 이 elements는 불변하는(immutable)특징을 가지고 있다. 따라서 엄밀하게 따진다면 업데이트되는 것은 컴포넌트이고 가상돔은 교체된다고 표현하는 것이 맞습니다 */

// React의 재조정은 Virtual DOM을 사용하여 React 컴포넌트 트리를 비교하고 최적화하는 프로세스입니다. React는 컴포넌트가 업데이트될 때 마다 Virtual DOM을 사용하여 이전 버전의 컴포넌트 트리와 새 버전의 컴포넌트 트리를 비교한다.

// reconciliation 프로세스는 이전 버전의 컴포넌트 트리와 새 버전의 컴포넌트 트리를 비교하여 다음과 같은 작업을 수행합니다.

// 1. 컴포넌트의 타입(p태그, h1태그 인지 등등)이 같은지 비교합니다.
// 2. 컴포넌트의 속성(prop)이 변경되었는지 비교합니다.
// 3. 컴포넌트의 자식 요소가 변경되었는지 비교합니다.

// 이러한 비교 작업을 통해 React는 변경된 부분만 업데이트하고, 나머지 부분은 그대로 유지합니다. 이렇게 하면 React는 DOM 조작을 최소화하고 더 빠르고 효율적인 애플리케이션을 만들 수 있습니다.

// 정리하자면, reconciliation 프로세스를 통해 React는 컴포넌트를 업데이트하여 즉각적으로 반응하는 사용자 인터페이스를 만들 수 있습니다. 이것이 바로 React가 다른 프론트엔드 라이브러리와 차별화되는 중요한 기능 중 하나입니다.

export default Resume;
