import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { signOut } from "firebase/auth";
import { appAuth } from "../firebase/config";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  // dispatch를 불러와야하는 이유, 유저상태 가져옴 (로그인된 상태를 로그아웃하기 위함)
  const { dispatch } = useAuthContext();

  const logout = () => {
    setError(null);
    setIsPending(true);

    // appAuth 유저정보가 담긴 객체. 아래 내역은 firebase에 있는 문법
    signOut(appAuth)
      .then(() => {
        dispatch({ type: "logout" });
        setError(null);
        setIsPending(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
        console.log(error.message);
      });
  };
  // useLogout Hook을 쓸 때의 리턴값.
  return { error, isPending, logout };
};
