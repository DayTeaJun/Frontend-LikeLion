import React from "react";
import "./Modal.css";

export default function Modal({ children, modalClose }) {
  return (
    <div className="modal-backdrop">
      <article className="modal">
        {/* children으로 modal안의 값 가져옴 */}
        {children}
        {/* <h2>홈페이지에 오신 것을 환영합니다!</h2>
        <p>좋은 하루 되세요!</p> */}
        <button onClick={modalClose} type="button">
          닫기
        </button>
      </article>
    </div>
  );
}
