import React from "react";
import styles from "./Home.module.css";
import DiaryForm from "./DiaryForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import DiaryList from "./DiaryList";

export default function Home() {
  const date = new Date();
  // const date = today.toISOString().slice(0, 10);

  // padStart : 현재 문자열의 시작을 다른 문자열로 채워주는 역할을 함.
  // 여기서는 padStart 2, 0 되있는데 문자열이 1이하 일 경우 앞에 0을 채워주고, 문자열이 2이상일 경우 0은 들어가지 않음
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const result = `${year}.${month}.${day}`;

  const { user } = useAuthContext();
  const { documents, error } = useCollection("secret diary", [
    "uid",
    "==",
    user.uid,
  ]);

  return (
    <div className={styles.container}>
      <main className={styles["diary-main"]}>
        <h2 className={styles.heart}>{result}의 비밀일기</h2>
        <DiaryForm uid={user.uid} />
      </main>
      <section>
        <h2 className="a11y-hidden">일기 목록</h2>
        <ul>
          {error && <strong>{error}</strong>}
          {documents && <DiaryList diaries={documents} />}
        </ul>
      </section>
    </div>
  );
}
