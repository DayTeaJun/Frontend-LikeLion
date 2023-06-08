import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useReducer } from "react";
import { appFireStore } from "../firebase/config";

const initState = {
  document: null,
  isPending: false,
  error: null,
  isSuccess: false,
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "isPending":
      return { isPending: true, document: null, isSuccess: false, error: null };
    case "addDoc":
      return {
        isPending: false,
        document: action.payload,
        isSuccess: true,
        error: null,
      };
    case "error":
      return {
        isPending: true,
        document: null,
        isSuccess: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// collection 이름 - transaction
export const useFirestore = (transaction) => {
  // state, 리듀서 함수 실행시켜주는 dispatch
  const [response, dispatch] = useReducer(storeReducer, initState);
  // dispatch를 통해 실행하는 리듀서 함수 -> storeReducer
  // response에는 우리의 요청에 대한 firestore로 부터의 응답을 저장합니다.
  // 주로 데이터의 저장 성공 또는 요청한 문서 데이터일 것이며, 때문에 객체데이터를 다루는데 유용한 useReducer를 사용합니다.

  // appFireStore 에 내가 만든 정보가 저장되어있음
  // 그리고 collection에 넣음
  // colRef : 우리가 만들 컬랙션의 참조입니다. 우리가 따로 컬렉션을 만들지는 않았지만,
  // 원하는 컬렉션의 참조를 요구하기만 해도 파이어스토어는 자동으로 해당 컬렉션을 생성해줍니다.
  const colRef = collection(appFireStore, transaction);
  // 특정 컬렉션의 참조를 반환함.

  const addDocument = async (doc) => {
    dispatch({ type: "isPending" });
    // doc = 데이터베이스에 저장할 데이터(일기제목,내용)
    // docRef : 우리가 만들 문서의 참조입니다.
    // addDoc : 컬렉션에 문서를 추가합니다.
    // 코드참고 : https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document

    try {
      // fromDate : 주어진 시간 정보를 통해 새로운 타임 스탬프를 생성
      // Timestamp로 데이터를 저장할 때의 그 시각을 저장하고 보냄.
      const createTime = Timestamp.fromDate(new Date());
      const docRef = await addDoc(colRef, { ...doc, createTime });
      dispatch({ type: "addDoc", payload: docRef });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  };

  // id = 문서(document)의 id
  const deleteDocument = (id) => {};

  return { addDocument, deleteDocument, response };
};
