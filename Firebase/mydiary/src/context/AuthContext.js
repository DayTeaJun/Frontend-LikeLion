import { createContext, useReducer } from "react";
import { appAuth } from "../firebase/config";
import { useEffect } from "react";

// context 객체를 생성함.
const AuthContext = createContext();

// react 에서 children 컴포넌트 태그 사이에 위치한 내용을 가르킴.
const AuthContextProvider = ({ children }) => {
  // state = 현재 reducer가 관리하고 있는 현재의 state
  const authReducer = (state, action) => {
    switch (action.type) {
      case "login":
        // 기존 정보에, 받아온 유저정보를 추가함.
        return { ...state, user: action.payload };

      case "logout":
        // 현재 컨텍스트에 있던 유저 정보를 null로 지워버림
        return { ...state, user: null };

      case "isAuthReady":
        return { ...state, user: action.payload, isAuthReady: true };
      default:
        return state;
    }
  };

  // useReducer()는 상태관리를 위해 사용함.
  // state를 넣고, 리듀서 함수를 호출할 때 dispatch를 이용함
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthReady: false,
  });
  // const [관리할 값, dispatch 함수] = useReducer(리듀서 함수, 관리할 값의 초기화)

  useEffect(() => {
    // firebase가 appAuth를 가져왔으면,
    // onAuthStateChanged : 유저의 인증정보 변화를 관찰하는 함수입니다.
    // onAuthStateChanged 함수는 Unsubscribe 함수를 반환합니다. 더 이상 유저의 변화를 관찰하지 않도록 하는 함수입니다.
    // 우리는 새로고침 후 초기에 딱 한번 실행하면 되기 때문에 이후에는 구독을 중지합니다.
    const unsubscribe = appAuth.onAuthStateChanged(function (user) {
      // onAuthStateChanged 가 트리거 되서 사용자 정보가 true가 되면, dispatch로 useContext 전역공간에 사용자 정보가 왔다는 것을 알리기 위함.
      dispatch({ type: "isAuthReady", payload: user });
    });

    // 클린업 함수로 구독을 취소하도록 함.
    return () => {
      unsubscribe();
    };
  }, []);

  // 유저 상태 확인(로그인, 로그아웃 등)
  console.log("context : ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
