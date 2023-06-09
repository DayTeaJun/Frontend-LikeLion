import { collection, onSnapshot } from "firebase/firestore";
import { appFireStore } from "../firebase/config";
import { useState, useEffect } from "react";

export const useCollection = (transaction) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 현재 최신 데이터베이스를 가져오고,
    // 데이터베이스 업데이트가 될때마다 콜백이 호출되어 스냅샷을 업데이트함.
    const unsubscribe = onSnapshot(
      collection(appFireStore, transaction),
      (snapshot) => {
        let result = [];

        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(result);
        setError(null);
      },
      (error) => {
        setError(error.message);
      }
    );

    // 클린업 함수, 언마운트 및 업데이트 될때 서버 구독 끊기
    return () => {
      unsubscribe();
    };
  }, []);
  return { documents, error };
};
