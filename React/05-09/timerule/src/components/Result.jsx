import React from "react";
import "./Result.css";

export default function Result({ datas, modalOpen }) {
  function share() {
    let url = "";
    let inp = document.createElement("input");
    document.body.appendChild(inp);
    url = window.document.location.href;
    inp.value = url;
    inp.select();
    document.execCommand("copy");
    document.body.removeChild(inp);
    alert("URL이 복사되었습니다.");
  }

  return (
    <>
      {datas.map((data, index) => {
        return (
          <section key={index}>
            <strong className="advise">
              당신은<h2>{data.goal}</h2>전문가가 되기 위해서
            </strong>
            <strong className="advise">
              대략<h2>{data.goalTime}</h2>일 이상 훈련하셔야 합니다! :)
            </strong>

            <div className="btnContainer">
              <button type="button" onClick={modalOpen}>
                훈련하러 가기 GO! GO!
              </button>
              <button onClick={share}>공유하기</button>
            </div>
          </section>
        );
      })}
    </>
  );
}
