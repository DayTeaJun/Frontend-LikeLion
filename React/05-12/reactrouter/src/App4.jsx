import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
  useParams,
} from "react-router-dom";

function App() {
  const blogs = [1,2,3,4,5]
  return (
    // 라우팅은 적절한 길을 찾아주는 것
    // 라우터 쓸려면 감싸줘야함.
    // 페이지 경로를 나눠주는게 라우터
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      <Link to="/three/hojunone">hojub One</Link>
      <Link to="/three/hojuntwo">hojub Two</Link>
      <br/>
      <Link to="/blog/text">blog Text</Link>
      <br/>
      {blogs.map((blogId) => (
        <Link to={`/blog/${blogId}`}> {blogId}</Link>
      ))}
      {/* 라우트를 감싸줍니다(라우트들이 있는 컴포넌트). */}
      <Routes>
        {/* Route는 해당주소로 왔을 때 해당요소를 찾아줌 */}
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One name="licat" />} />
        <Route path="/two" element={<Two />} />

        {/* 중첩된 라우터를 쓸때 element를 Outlet를 쓰는걸로 약속되어있다. */}
        {/* Outlet은 Outlet에 속한 라우터 안에서 작성한 컴포넌트를 빼내주는 역할 */}
        {/* 그리고 Outlet을 쓸려면 위 임포트에서 불러와줘야함 */}
        {/* /three/로 시작하는 모든 경로에 대해 <Outlet /> 컴포넌트를 렌더링한다. */}
        {/* *(와일드 카드)은 생략해도 상관없지만 명시적으로 *뒤에 어떤 주소가 와도 Outlet을 보여준다는 의미 또는 아래처럼 내용을 달면, *뒤의 전체 주소에 내용이 뜨게한다. */}
        <Route
          path="/three/*"
          element={
            <>
              {/* Outlet은 메타몽 */}
              <Outlet />
              threePage입니다.
            </>
          }
        >
          <Route path="" element={<HojunIndex />} />
          <Route path="hojunone/" element={<HojunOne />} />
          <Route path="hojuntwo/" element={<HojunTwo />} />
        </Route>
        {/* :id는 주소뒤에 뭐가 오든 입력받은 값을 불러옴 */}
        <Route path="/blog/:id" element={<Blog />} />
        {/* :id 보다 다른 주소가 더 우선적으로 적용된다. */}
        <Route path="/blog/text" element={<One />} />
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
  // 파라미터만 잘라내주는 훅, /주소
  const { id } = useParams();
  return <h1>hello Blog {id}</h1>;
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
