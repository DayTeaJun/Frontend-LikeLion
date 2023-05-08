// 리액트 모듈안에 들어있는 리액트, Fragment를 가져옴
// React.Fragment에서 React. 빼도 된다.
// 마지막으로 Fragement를 아예 빼도 됨 <></>
import React, { Fragment } from "react";
import "./FragmentTest.css";

function ListItem({ item }) {
  return (
    // div 로 감싸주면 시맨틱을 방해함, 그래서 아래와 같이 감싸주면 문제없이 작동함.
    <>
      {/* dt 정의 */}
      <dt>사과</dt>
      {/* dd dt의 대한 설명 */}
      <dd>사과는 가을이 제철이죠</dd>
    </>
  );
}

function Glossary(props) {
  return (
    // dl 정의 목록(사전 용어설명하는 목록)
    <dl>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      {/* {props.items.map((item) => (
        <ListItem item={item} key={item.id} />
      ))} */}
    </dl>
  );
}

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function MyComponent() {
  return (
    // 속성을 넣을 수 있는데 Fragment는 요소를 화면에 랜더링하지 않기 때문에 무의미함. 보통 리스트 아이템의 key 값을 설정할 때 사용함.
    // <React.Fragment className="my-fragment">

    list.map((item) => {
      return (
        <>
          <h1>{item.area}</h1>
          <p>{item.visited ? "방문함" : "아직 안감"}</p>
        </>
      );
    })
  );
}

const items = [
  { id: 1, name: "Apple", desc: "빨간건 사과" },
  { id: 2, name: "Banana", desc: "바나나는 길어" },
  { id: 3, name: "Cherry", desc: "체리는 비싸" },
];

// 내가 한거
// function MyComponent2() {
//   return items.map((item) => {
//     return (
//       <dl key={item.id}>
//         <dt>{item.name}</dt>
//         <dd>{item.desc}</dd>
//       </dl>
//     );
//   });
// }

// 구조 분해 할당
function MyComponent2() {
  const itemList = items.map(({ id, name, desc }) => {
    return (
      // <>에는 key을 못씀, React.Fragment를 명시하고 key값을 준다.
      // key값은 HTML에서 못보지만, 내부적으로 리액트가 메모리에서 봄
      <React.Fragment key={id}>
        <dt>{name}</dt>
        <dd>{desc}</dd>
      </React.Fragment>
    );
  });

  // map으로 각각 상수에 저장한 후, 전체를 dl로 감싸줌
  return <dl>{itemList}</dl>;
}

function App() {
  return (
    <div>
      <h1>안녕, 라이캣 1호!</h1>
      <h2>안녕, 라이캣 2호!</h2>
      <Glossary />
      <MyComponent />
      <MyComponent2 />
    </div>
  );
}

export default App;
