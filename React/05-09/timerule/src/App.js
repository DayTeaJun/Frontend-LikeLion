import React, { useState } from "react";

import MainPage from "./components/MainPage";
import Result from "./components/Result";
import Modal from "./components/Modal";

import "./App.css";

import weniv from "./components/img/위니브.svg";
import title from "./components/img/Frame.svg";
import time from "./components/img/timer.svg";

function App() {
  const [datas, setDatas] = useState([]);
  const [mainShow, setMainShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const addData = (data) => {
    setDatas([data]);
    setMainShow(true);
  };

  function modalOpen() {
    setModalShow(true);
  }

  function modalClose() {
    setModalShow(false);
  }

  return (
    <div className="wrap">
      <header>
        <h1>
          <img src={time} alt="시간 배경" />
          <img src={title} alt="1만 시간의 법칙" />
        </h1>
      </header>

      <main>
        <MainPage addData={addData} />
        {mainShow && <Result datas={datas} modalOpen={modalOpen} />}
      </main>

      <footer>
        <img src={weniv} alt="주식회사 위니브" />
        <span>
          ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
          <br />
          수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
        </span>
      </footer>

      {modalShow && <Modal modalClose={modalClose} />}
    </div>
  );
}
export default App;
