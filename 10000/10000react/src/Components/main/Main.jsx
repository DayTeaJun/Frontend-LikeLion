import React, { useState } from "react";
import "./Main.css";

export default function Main(props) {
  const [expert, setExpert] = useState("");
  const [traningTime, setTraningTime] = useState(0);
  const [dday, setDday] = useState(0);

  const [resultjob, setResuljob] = useState("");

  function resetForm() {
    setExpert("");
    setTraningTime("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const jobFocus = document.getElementById("job");
    const timeFocus = document.getElementById("time");

    if (expert === "") {
      alert("어떤 분야의 전문가가 되고 싶으신가요?");
      jobFocus.focus();
    } else if (traningTime === "") {
      alert("하루에 몇 시간씩 훈련할 건가요?");
      timeFocus.focus();
    } else {
      setDday(Math.ceil(10000 / traningTime));
      setResuljob(expert);
    }
    resetForm();
  };

  return (
    <main>
      <h2 className="a11y">필요한 시간 알아보기</h2>
      <form className="cont-input" onSubmit={handleSubmit}>
        <p className="txt-wannabe">
          나는
          <input
            id="job"
            type="text"
            value={expert}
            onChange={(event) => setExpert(event.target.value)}
          />
          전문가가 될 것이다.
        </p>
        <p className="txt-time">
          그래서 앞으로 매일 하루에
          <input
            id="time"
            type="number"
            value={traningTime}
            onChange={(event) => setTraningTime(event.target.value)}
          />
          시간씩 훈련할 것이다.
        </p>
        <button type="submit" className="btn-exc">
          나는 며칠동안 훈련을 해야 1만시간이 될까?
        </button>
      </form>

      {/* 원래 값이 0이니까 0을 보여줌 그래서 !!연산자로 boolean으로 변경해줌 */}
      {!!dday && (
        <section className="cont-result">
          <h3 className="a11y">결과 확인</h3>
          <p className="txt-wannabe">
            당신은 <strong>{resultjob}</strong> 전문가가 되기 위해서
            <br />
            대략 <strong>{dday}</strong> 일 이상 훈련하셔야 합니다! :&#41;
          </p>

          <button type="button" className="btn-go" onClick={props.modalOpening}>
            훈련하러가기 GO!GO!
          </button>
          <button type="button" className="btn-share">
            공유하기
          </button>
        </section>
      )}
    </main>
  );
}
