import React from "react";

import "./Modal.css";

import fighting from "./img/fighting.svg";
import cheer from "./img/cheer.svg";
import licat from "./img/라이캣.svg";

export default function Modal({ modalClose }) {
  return (
    <div className="modal">
      <h2>
        <img src={fighting} alt="화이팅!" />
      </h2>
      <p>
        <img src={cheer} alt="당신의 꿈을 응원합니다!" />
      </p>
      <img src={licat} alt="사자가 웃어요" />
      <button type="button" onClick={modalClose}>
        종료하고 진짜 훈련하러 가기 GO!GO!
      </button>
    </div>
  );
}
