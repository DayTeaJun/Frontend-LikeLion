import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // nodejs에서 env(환경변수) 가져오는법
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// firebase 초기화
const app = initializeApp(firebaseConfig);
// fireStore 초기화
const appFireStore = getFirestore(app);
// 인증 초기화
const appAuth = getAuth();
const timeStamp = Timestamp;

export { appFireStore, appAuth, timeStamp };
