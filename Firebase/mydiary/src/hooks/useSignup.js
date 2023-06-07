import { useState } from "react";
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

// 회원가입을 진행하는 훅
export const useSignup = () => {
  // 에러 정보를 저장.
  const [error, setError] = useState(null);
  // 현재 서버와의 통신 상태를 저장합니다.
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  // https://firebase.google.com/docs/auth/web/password-auth?hl=ko
  const signup = (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // 현재 로그인한 것
        const user = userCredential.user;
        console.log(user);
        if (!user) {
          throw new Error("회원가입에 실패함");
        }
        // 회원가입 후 회원정보 업데이트
        // appAuth.currentUser 은 로그인된 유저 정보
        updateProfile(appAuth.currentUser, { displayName })
          .then(() => {
            setError(null);
            setIsPending(false);
            dispatch({ type: "login", payload: user });
          })
          .catch((err) => {
            setError(err.message);
            setIsPending(false);
            console.log(error);
          });
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(error);
      });
  };
  return { error, isPending, signup };
};
