import React from "react";
import iconEdit from "../../asset/images/icon-edit.svg";
import iconDelete from "../../asset/images/icon-delete.svg";
import styles from "./Home.module.css";

export default function DiaryList({ diaries }) {
  return diaries.map((item) => {
    console.log(item);
    return (
      <li key={item.id}>
        <article className={styles["diary-article"]}>
          <h3 className={styles["article-title"]}>{item.title}</h3>
          <time className={styles["article-time"]}></time>
          <p className={styles["article-content"]}>{item.text}</p>

          <div className={styles["button-group"]}>
            <button type="button">
              <img src={iconEdit} alt="수정" />
            </button>
            <span></span>
            <button type="button">
              <img src={iconDelete} alt="삭제" />
            </button>
          </div>
        </article>
      </li>
    );
  });
}
