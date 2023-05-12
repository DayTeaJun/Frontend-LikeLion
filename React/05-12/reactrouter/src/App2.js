import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// a 태그를 쓰지않고 link를 사용하는 이유가 뭘까요?**

// a 태그는 클릭했을 경우, href에 설정해준 경로 이동과 동시에 페이지를 새로 불러오기 때문에 페이지가 새로고침이 됩니다.

// react-router-dom이 제공하는 Link의 경우 `HTML5 History API`를 사용해서 브라우저의 주소를 바꿔주는 것이기 때문에 페이지를 불러오지 않고 dom만 조작해서 페이지를 보여줍니다.
// SPA 느낌으로
function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One name="licat" />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>hello world0</h1>;
}

function One({ name }) {
  return <h1>{name} world1</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}

export default App;
