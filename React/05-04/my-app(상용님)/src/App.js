import "./App.css"; //이것이 웹팩이기에 가능한 문법..creat-react-app을 설치하면서 웹팩을 포함해 서로 의존되는 패키지들이 다 깔려서 왔다.
import Menu from "./components/menu/Menu.jsx";
import NewMenu from "./components/newMenu/NewMenu.jsx";
import TripList from "./components/tripList/TripList.jsx";

function TextArea() {
  return (
    <div className="wrapper">
      <textarea readOnly maxLength={3} style={{ backgroundColor: "blue" }} />
    </div>
  );
}

function App() {
  // 주석입니다
  /**주석입니다
   *
   */
  const name = "라이캣임";
  const 변수 = "value";
  function 함수() {
    console.log("함숫하숨!");
  }
  const 값 = true;

  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];
  return (
    <div className="App">
      {/* 일반 배열 같은 경우, (쉼표) 포함한 문자열로 반환함 */}
      {`${[1, 2, 3]}`}
      {/* map 같은 경우 ,(쉼표) 제거후 개별 문자열로 반환함 */}
      {[1, 2, 3].map((x) => x ** 2)}
      {100 + 1}
      {"hello" + "world"}
      {함수()}
      {변수}
      {값 ? "one" : "two"}

      <h2>hello {name}</h2>
      <h2 hello="h2">h2h2</h2>
      <h2 className="numnum">why not</h2>
      <input tyep="radio" checked={false}></input>
      {/* <input tyep="radio" checked></input> */}
      <TextArea></TextArea>
      <Menu></Menu>
      <NewMenu></NewMenu>
      <div
        className="times"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <h2 className="year" style={{ color: "red" }}>
          연도: {year}년
        </h2>
        <h2 className="monthAnd">
          월일: {month}월 {date}일
        </h2>
        <h2 className="hourAnd">
          시간: {hour}시 {min}분 {sec}초
        </h2>
      </div>

      <div>
        <ul
          style={{
            textAlign: "left",
            padding: 0,
            listStyle: "none",
            border: "1px solid black",
          }}
        >
          <li style={{ padding: "10px 5px" }} visited={false}>
            {list[0].area}
          </li>
          <li
            style={{ borderTop: "1px solid black", padding: "10px 5px" }}
            visited
          >
            {list[1].area}
          </li>
          <li
            style={{ borderTop: "1px solid black", padding: "10px 5px" }}
            visited={false}
          >
            {list[2].area}
          </li>
          <li
            style={{ borderTop: "1px solid black", padding: "10px 5px" }}
            visited={false}
          >
            {list[3].area}
          </li>
        </ul>
      </div>

      <div>
        <TripList></TripList>
      </div>
    </div>
  );
}

export default App;
