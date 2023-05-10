// function Blog(props) {
//   // 키값을 넣어주는 이유는 리엑트에서 랜더링 작업을 진행했을 때 어떤 요소에 변동이 있다면 그 요소만 새로 그려주기 위함입니다. key가 없다면 하나의 요소가 변경이 되어도 array에 담긴 요소를 모두 다시 그려줍니다.

//   // Key는 배열 안에서 형제 사이에서 고유해야 하고 전체 범위에서 고유할 필요는 없습니다. 두 개의 다른 배열을 만들 때 동일한 key를 사용할 수 있습니다.
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) => (
//         // 아래는 형제 관계 (li들), 형제 사이에서 유일한 key값
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
//   const content = props.posts.map((post) => (
//     // 아래는 형제 관계 (div들), 형제 사이에서 유일한 key값
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   ));
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   { id: 1, title: "Hello World", content: "Welcome to learning React!" },
//   { id: 2, title: "Installation", content: "You can install React from npm." },
// ];

import { useState } from "react";
import MyList from "./Components/MyList";
import Counter from "./Components/Counter";
// import ProductList from "./Components/ProductList";

// function Hello(props) {
//   const name = props.name;
//   const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.

// map의 콜백함수로 사용되는 함수를 화살표함수로 사용했을 때, 2줄 이상의 코드가 필요하다면 화살표 함수 문법대로 중괄호를 사용해야 하며, return 키워드로 별도로 반환해야함.
// 만약 그렇지 않고 값을 반환해야 할 경우 소괄호,중괄호 모두 필요하지 않음. 다만 화살표함수에서 객체를 반환하거나 JSX 요소를 반환할 경우 소괄호로 묶어줘야함.
//   // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
//   const numComponentsArray = num.map((i) => (
//     <h1 key={i}>
//       안녕, {name} {i}호
//     </h1>
//   ));

//   return <div>{numComponentsArray}</div>;
// }

// function One() {
//   return <p>one</p>;
// }

// function Two() {
//   return <p>two</p>;
// }

// function Three() {
//   return <p>three</p>;
// }

// function ProductList() {
//   const productList = {
//     products: [
//       {
//         title: "개발자 무릎 담요",
//         price: 17500,
//         id: 101,
//       },
//       {
//         title: "Hack Your Life 개발자 노트북 파우치",
//         price: 29000,
//         id: 102,
//       },
//       {
//         title: "우당탕탕 라이켓의 실험실 스티커북",
//         price: 29000,
//         id: 103,
//       },
//       {
//         title: "버그를 Java라 버그잡는 개리씨 키링",
//         price: 29000,
//         id: 104,
//       },
//     ],
//   };

//   const productLists = ProductList.products.map((item, index) => {
//     return (
//       <li key={item.id}>
//         <h2>
//           {index + 1}
//           {item.title}
//         </h2>
//         <strong>{item.price}</strong>
//         <button type="button">닫기</button>
//       </li>
//     );
//   });

//   return <ul>{productLists}</ul>;
// }

function Hello(props) {
  const name = props.name;
  if (name) {
    return <One name={name} />;
  } else {
    return <Two />;
  }
}

function One(props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}

function Two(props) {
  return (
    <div>
      <h1>name이 입력된 것이 없습니다.</h1>
    </div>
  );
}

// function NoName(){
//   return(
//       <div>
//           <h1>이름을 입력하지 않았습니다.</h1>
//       </div>
//   )
// }

function App() {
  const [datas, setDatas] = useState([
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ]);

  // 닫기버튼을 누른 li의 id
  function handleClick(id) {
    // React는 state 함수의 호출의 일관성을 유지하기 위해서 내부적으로 동일한 내용의 state함수 호출이 여러번 반복되면 하나의 업데이트로 취급하여 처리합니다. (함수가 여러번 호출하면 하나로 합쳐서 처리함)

    // setDatas는 계속해서 변하는데, 이걸 이용하여 같은 state함수를 호출할 때 일반적으로 동일한 것을 여러번 호출하게 되면 자동으로 합쳐서 처리하게 됨. 이러한 내용을 함수형으로 바꿔서 처리할 수 있음(동일하게 처리하지 않게 하기 위해)

    // 비동기적인 느낌? 으로
    setDatas(
      // filter는 원본 데이터를 보존하고 새로운 데이터를 반환
      datas.filter((item) => {
        // 데이터의 id
        // 내가 누른 li id와 데이터들의 id와 일치하지 않으면 반환하겠다
        return id !== item.id;
      })
    );

    // 함수형 업데이트라고 표현한다. 함수형 업데이트를 사용하면 함수의 인자로 전달되는 state 값을 React가 이전 state의 값으로 보장한다. 때문에 상태 업데이트가 비동기적으로 처리된다고 해도 안정적으로 이전 값과 이후 값(가상돔)을 비교하여 처리할 수 있습니다.
    setDatas((prevDatas) => {
      // 이전의 버츄얼돔을 가져와서 필터를 함
      return prevDatas.filter((item) => {
        return id !== item.id;
      });
    });
  }

  const [counter, setCounter] = useState(0);

  function counterUpClick() {
    setCounter((prevCounter) => {
      return (prevCounter += 1);
    });
  }

  function counterDownClick() {
    setCounter((prevCounter) => {
      return (prevCounter -= 1);
    });
  }

  return (
    <>
      {/* <Blog posts={posts} /> */}
      {/* <Hello name="licat" /> */}

      {/* 아래처럼 할 수 있다. 리액트는 아래같은 배열을 뽑아서 평평하게 출력함 */}
      {/* {[<One />, <Two />, <Three />, [<One />, <Two />, [<One />, <Two />]]]} */}
      {/* <MyList /> */}
      {datas.map((item, index) => {
        return (
          <li key={item.id}>
            <h2>
              {index + 1}
              {item.title}
            </h2>
            <span>{item.price} 원</span>
            {/* 이벤트가 발생한 가장 가까운 li를 제거해라 */}
            {/* <button
              onClick={(event) => {
                event.target.closest("li").remove();
              }}
            > */}
            <button
              onClick={() => {
                handleClick(item.id);
              }}
            >
              삭제
            </button>
            {/* 자바스크립트로 버튼을 클릭해서 제거하는 이벤트를 만드는 건 리액트의 가상돔을 이용하여 만드는 방식을 해친다. 그래서 이렇게 쓰는건 옳지않음. 그래서 리액트의 방식대로 화면을 업데이트하는 것으로 해야함 */}
          </li>
        );
      })}
      <h2>Counter: {counter}</h2>
      <button
        onClick={() => {
          counterUpClick();
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          counterDownClick();
        }}
      >
        -1
      </button>

      <Counter />
      <Hello name="licap" />
    </>
  );
}
export default App;
