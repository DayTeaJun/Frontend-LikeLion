import { useState } from "react";
import { appAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

// 회원가입을 진행하는 훅
export const useLogin = () => {
  // 에러 정보를 저장.
  const [error, setError] = useState(null);
  // 현재 서버와의 통신 상태를 저장합니다.
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  //https://firebase.google.com/docs/auth/web/password-auth?hl=ko#sign_in_a_user_with_an_email_address_and_password
  const login = (email, password) => {
    setError(null);
    setIsPending(true);

    // 로그인이 처리되는 함수
    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        dispatch({ type: "login", payload: user });

        if (!user) {
          throw new Error("로그인에 실패함");
        }
        setError(null);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      });
  };
  return { error, isPending, login };
};
