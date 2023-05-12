import { BrowserRouter, Routes, Route } from "react-router-dom";
// 라우터
// url 주소가 변화가 생기면 사용자에게 알맞은 페이지를 안내해줌
// 페이지 안내판

// 라우터의 중요성
// 기타 검색엔진들에서 만들어진 로봇들이 사이트를 탐색하는데 URL주소가 필수적이기 때문에, 그래서 URL주소가 하나밖에 없으면 탐색할 것이 없는 것으로 판단하고 분석이 불가하게 된다. (구글 서버에 페이지 정보를 가져가지 못함. -> 구글에서 검색이 안된단 이야기^^
// 그래서 router는 페이지 노출, 검색 엔진 최적화 측면에서 매우 중요하다.

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      {/* 아래 Routes들은 화면에 표시 안됨. */}
      {/* element안에는 컴포넌트가 들어감. */}
      {/* 라우터 들이 path(경로)가 변경되면 element안의 컴포넌트로 들어간다. */}
      <Routes>
        {/* /기본경로일 때, 아래 코드는 Index 컴포넌트를 사용자에게 보여주겠다 */}
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One name="licat" />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </Routes>

      {/* 사용자 브라우저에 뿌려져야할 파일이 서버안에 저장되어 있음
      localhost:3000 (서버 폴더) /one (서버 폴더안의 컴포넌트 폴더) */}

      {/* BrowserRouter 컴포넌트 :  UI와 URL을 연결합니다.
      마치 SSR(서버사이드렌더링, 서버에 렌더링 다한 후 브라우저에 띄우는 방식)과 같이 URL을 사용할 수 있게합니다. */}
    </BrowserRouter>
  );
}

function Index() {
  return <h1>hello world0</h1>;
}

function One(props) {
  return <h1>hello {props.name}</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}

export default App;
