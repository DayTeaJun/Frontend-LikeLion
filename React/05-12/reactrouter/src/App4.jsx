import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      <Link to="/three/hojunone">hojub One</Link>
      <Link to="/three/hojuntwo">hojub Two</Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One name="licat" />} />
        <Route path="/two" element={<Two />} />

        {/* 중첩된 라우터를 쓸때 element를 Outlet를 쓰는걸로 약속되어있다. */}
        {/* 그리고 Outlet을 쓸려면 위 임포트에서 불러와줘야함 */}
        {/* /three/로 시작하는 모든 경로에 대해 <Outlet /> 컴포넌트를 렌더링한다. */}
        <Route path="/three/" element={<Outlet />}>
          <Route path="" element={<HojunIndex />} />
          <Route path="hojunone/" element={<HojunOne />} />
          <Route path="hojuntwo/" element={<HojunTwo />} />
        </Route>
        <Route path="/blog/:id" element={<Blog />} />
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

function Blog() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Blog</h1>;
}

function HojunIndex() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Hojun index</h1>;
}

function HojunOne() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Hojun 1</h1>;
}

function HojunTwo() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Hojun 2</h1>;
}

export default App;
