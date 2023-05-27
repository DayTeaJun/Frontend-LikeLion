const { useState } = React;

function MyHeader({ pageName, a }) {
  // const { pageName, a } = props
  // 이 안에 pagaName이라는 키로 값을 가져올수있음
  // 마찬가지로 a라는 키로 값을 가져올 수 있다.

  return (
    <>
      <h1>아 이건 제목이야 여기는 {pageName}!</h1>
      <h2>이건 부제목이야 여기는 {pageName} 부제목!</h2>
    </>
  );
}

// pageName="홈페이지" 이거는 아래처럼나온다
//
// props = {
//   pageName:"홈페이지"
//   a:"a"
// }

const Memo = ({ title, idx }) => {
  return (
    <>
      <div>{idx + 1}번 메모</div>
      <article>{title}</article>
    </>
  );
};

function MemoList({ titles }) {
  return (
    <div>
      <h1>이번에는 메모장 리스트 제목이 생겼지롱</h1>
      {titles.map((title, idx) => {
        return <Memo title={title} idx={idx} />;
      })}
    </div>
  );
}

function HomePage(params) {
  const [memo, setMemo] = useState("");
  const [memos, setMemos] = useState([]);
  const onChangeHandler = (e) => {
    setMemo(e.target.value);
  };
  const onClickButtonHandler = () => {
    const newTitles = [...memos, memo];
    setMemos(newTitles);
  };
  return (
    <div>
      <input type="text" onChange={onChangeHandler} />
      <button onClick={onClickButtonHandler}>버튼</button>
      <br></br>
      <MemoList titles={memos} />
    </div>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // const header = document.createElement("h1");
  // header.innerText = "아 이건 제목이야";
  // root.appendChild(header);
  root.render(<HomePage />);
}

App();

// jsx란 무엇인가(기초편)
// react component에서 props
// react hook state
// 메모장 합시다

// jsx좀 더 살펴보기 <<
// 기능분리하는법 (사람들이랑 같이하는법) <<
