// 결국 함수형이기 때문에 변수-객체(props)를 받아올 수 있음.
// function MyHeader(props) {
// console.log(props);

// 구조분해 할당으로 값을 받음.
function MyHeader({ pageName, a }) {
  // 구조 분해 할당. 아래처럼 가능
  // const { pageName, a } = props;
  // 객체 props에
  // pageName이라는 키로 값을 가져올 수 있고,
  // a라는 키로 값을 가져올 수 있음

  // 이 코드는 위와 같다
  // const {pageName, a} = {
  //     pageName: "홈페이지",
  //     a: "a"
  // }
  // console.log({pageName}) == {pageName: '홈페이지'}

  return (
    // jsx에서는 무조건 하나만 리턴해야함 그래서 부모요소로 감싸야한다.
    // SEO나 접근성을 위해 div로 감싸는게 아닌 React.Fragment 로 감싸면 div로 감싸지 않아도 하나로 묶어서 리턴하게 될 수 있다.
    // 이걸 더 직관적인(선언적인) 내용으로 바꾸면
    // <React.Fragment> === <></> 가능.
    <>
      {/* props로 객체를 받아왔기 때문에 객체의 키(pageName)로 값("홈페이지")을 불러온다 */}
      <h1>아 이건 제목이야 여기는 {pageName}!</h1>
      <h2>이건 부제목이야 여기는 홈페이지 부제목!</h2>
    </>
  );
}

// props를 전달할 때,
// pageName="홈페이지", a="a" 는 아래처럼 객체로 들어옴
// {
//     pageName: "홈페이지",
//     a: "a"
// }

// 메모장 만들기 2, 3번째의 컴포넌트
// 단순히 반복할 컴포넌트를 따로 관리함.
function Memo({ title, index }) {
  return (
    <>
      <div>{index + 1}번 메모</div>
      <article>{title}</article>
    </>
  );
}

// 메모장 만들기 3번째 방법
// map 메서드를 이용하여 여러개를 한번에 컴포넌트 관리.
function MemoList({ titles }) {
  return (
    <div>
      {/* <h1>이번에는 메모장 리스트 제목이 생겼징</h1> */}
      {titles.map((title, idx) => {
        return <Memo title={title} index={idx} />;
      })}
    </div>
  );
}

// useState 사용하기 위함.
const { useState } = React;
// 홈페이지 컴포넌트
function Homepage() {
  // React에 있는 useState로 작성

  // useState의 방법
  // 첫번째 방법.
  // const title = React.useState("타이틀!");
  // title은 배열로, 첫번째 인자(0)엔 타이틀!이 들어가있음
  // console.log(title[0]);
  // 두번째 인자값을 넣으면 바꾼 값이 나옴
  // title[1]("바꾼값"); // 지금은 무한실행됨 setState로 무한렌더링되기 때문인듯?(내생각)

  // 두번째 방법
  const [title, setTitle] = useState("");
  // useState를 하면 배열을 넘겨주는데 title의 값을 setTitle의 값으로 바꿔준다.

  // const arr = [1,2,3,4]
  // const [a,b,c,d] = arr
  // a = 1, b = 2, c = 3, d = 4 같은 느낌

  // MyHeader 에 대한 useState인데, 위 내용을 사용하기 위해 주석처리함.
  // const [title, setTitle] = useState("홈페이지");

  // 메모장 만들기의 useState
  const [titles, setTitles] = useState([]);

  const onChangeHandler = (e) => {
    // 아래처럼 따로 변수를 이용하여 값을 바꿔도 화면에 변화하지 않음
    // let title = "홈페이지";
    // title = "버튼이 눌린 페이지";
    // console.log(title);

    // useState가 화면을 랜더링해줌
    // 화면에서 변화를 주고 싶다면 setState를 해야 리액트가 전체(페이지)를 렌더링해줌 (페이지 전환).
    // setTitle("버튼이 눌린 페이지");

    // 기본적으로 자바스크립트에서 이벤트할 때처럼 이벤트 객체를 가져와서 사용하는 것이 가능.
    // console.log(e.target.value);
    setTitle(e.target.value);
  };

  // 메모장 만들기 함수 (이 함수의 주석은 내 주관적인 해설)
  const onClickButtonHandler = () => {
    const newTitles = [...titles, title];
    // newTitles 배열에 들어가는 순서
    // 처음엔 titles는 [], 즉 빈배열이고, title은 위 onChangeHandler에서 setTitle로 바뀐 값으로. newTitles = [title]
    // 두번째는 아래 코드의 setTitles(newTitles)로 인해, titles는 이전의 title값을 갖게 됨. 그래서 newTitles = [...[이전title], 새로들어온title]
    // 세번째 newTitles = [...[이전이전title,이전title], 새로들어온title]
    // 값을 넣을 때마다 반복됨.
    setTitles(newTitles);

    // 개인적인 생각으로는 원범님이 오늘 배운내용으로 유추해서 깨달을 수 있도록 한 코드인 것 같은데, 함수형 업데이트로 좀더 직관적이게 코드를 작성할 수 있을 듯함.
  };

  // console.log(titles);

  return (
    <div>
      {/* <MyHeader pageName={title} a="a" /> */}

      {/* 같은 함수 컴포넌트를 여러개 불러와서 랜더가능하다. */}
      {/* 또한 각각의 함수 컴포넌트에 다른 props를 전달해서 다르게 가능하다. */}
      {/* <MyHeader pageName="홈페이지2" a="a" />
      <MyHeader pageName="홈페이지3" a="a" />
      <MyHeader pageName="홈페이지4" a="a" /> */}

      {/* 자바스크립트를 사용할 때에는 중괄호를 사용해서 감싼다. */}
      {/* onChange는 값이 바뀔 때마다 함수 실행 */}
      <input type="text" onChange={onChangeHandler} />
      {/* <button onClick={buttonHandler}>버튼</button> */}
      <button onClick={onClickButtonHandler}>버튼</button>
      <br />

      {/* 중괄호 안에 들어가는 것은 무조건 값이 있어야함. */}
      {/* if문 같은 경우는 사용하지 못함 값이 아니므로, */}
      {/* return이 되거나 무조건 값이 남거나, 예를 들면 삼항연산자, map 등 */}

      {/* 메모장 만들기 1번째 방법 */}
      {/* 따로 컴포넌트를 사용하지 않고, 바로 렌더링함. */}
      {titles.map((title, index) => {
        return (
          <>
            <div>{index + 1}번 메모</div>
            <article>{title}</article>
          </>
        );
      })}

      {/* 메모장 만들기 2번째 방법 */}
      {/* map 메서드의 인자를 props로 전달하여 따로 컴포넌트에 렌더링함. */}
      {titles.map((title, idx) => {
        return <Memo title={title} index={idx} />;
      })}

      {/* 메모장 만들기 3번째 방법 */}
      {/* map메서드 자체를 따로 컴포넌트를 만들어서 실행하고 map메서드를 할 주체를 props로 전달함. */}
      {/* 직관적으로 배열을 넣어서 메모리스트를 그려주는 애구나라는 걸 알수 있게 하기 위함. */}
      {/* 이렇게 짧은 코드로 하면 MemoList 컴포넌트를 누가 만들었을 때, 나는 아래처럼 불러와서 렌더링해줄 수(사용할 수) 있다! */}
      <MemoList titles={titles} />
    </div>
  );
}

function App() {
  // DOM API (document === object)
  // const root = document.getElementById("root");
  // const header = document.createElement("h1");
  // header.innerText = "아 이건 제목이야";
  // root.appendChild(header);

  // 리액트 왜씀? -> 더 짧은 코딩으로 선언적(함수형) 프로그래밍 함.
  // 위 3줄 코드와 아래 코드의 실행 결과는 같다.
  // 위 3줄 보다 적은 코드로 프로그래밍 할 것이다 -> 선언적 프로그래밍
  // 어디다가 그려줄지 리액트한테 알려줌
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // 리액트 돔으로 랜더링함 render(요소)
  root.render(
    <Homepage />
    // Homepage 자체가 함수이기 때문에 props 전달 가능
  );
}

App();

// 오늘 05-27 목표
// 1. jsx란 무엇인가(기초편)
// 2. react component에서 속성(props) 전달하기
// 3. react hook state
// 4. 메모장 만들기

// 내일 05-28 목표
// jsx 좀 더 살펴보기
// 기능분리하는법 (사람들이랑 협업  때)
