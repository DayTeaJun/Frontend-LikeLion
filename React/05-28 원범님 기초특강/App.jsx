// Button.jsx
// function Button(props) {
function Button(props) {
  console.log(props);
  //  props {onClick:  실행시키면num증가}
  // props는 js 객체다!!!
  console.log(props.children);
  return (
    <button
      onClick={props.onClick} // props안에 onClick안에 실행시키면num증가함수가 들어있다
      style={{
        width: "50px",
        height: "50px",
      }}
    >
      {props.children}
      {/* children은 자식요소로 가져옴. */}
    </button>
  );
}

function Counter(props) {
  const 실행시키면num증가 = () => {
    props.setNum(props.num + 1);
  };
  const 실행시키면num감소 = () => {
    props.setNum(props.num - 1);
  };
  return (
    <>
      <span>여기 숫자 {props.num}</span>
      <div>
        <span>이름:우경석</span>
      </div>
      <Button onClick={실행시키면num증가}>+</Button>
      <Button onClick={실행시키면num감소}>-</Button>
    </>
  );
}
// HomePage.jsx
function HomePage() {
  const [num, setNum] = React.useState(0);

  // 원래는 Counter컴포넌트에서만 num이라는 state가 필요했다.
  // 그런데 그 상위에있는 Homepage에서 num라는 state가 필요해짐...
  // 상태 끌어올리기 언쩨씀???
  // 내가 전달해줄수없는 컴포넌트가 생겼을때 공통 부모에서 관리하도록 하고싶을때
  // 근데 이걸 props 드릴링 계속 생기면 관리가 힘드니
  // useContext를 쓴다.
  return (
    <>
      <h1>숫자 카운터 만들기</h1>
      <Counter num={num} setNum={setNum} />
      <div>{num * 2}</div>
    </>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HomePage />);
}

App();
