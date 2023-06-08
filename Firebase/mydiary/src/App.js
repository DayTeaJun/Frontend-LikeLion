import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/SignUp";
import Header from "./components/Header";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { isAuthReady, user } = useAuthContext();

  return (
    // 라우터묶어주는 최상단 컴포넌트
    <>
      {isAuthReady ? (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                user ? <Home /> : <Navigate to="/login" replace={true} />
              }
            ></Route>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" replace={true} />}
            ></Route>
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" replace={true} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        "Loading..."
      )}
    </>
  );
}
export default App;
