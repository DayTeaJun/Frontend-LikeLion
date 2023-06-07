import { createContext, useReducer } from "react";

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
      default:
        return state;
    }
  };

  // useReducer()는 상태관리를 위해 사용함.
  // state를 넣고, 리듀서 함수를 호출할 때 dispatch를 이용함
  const [state, dispatch] = useReducer(authReducer, { user: null });
  // const [관리할 값, dispatch 함수] = useReducer(리듀서 함수, 관리할 값의 초기화)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
