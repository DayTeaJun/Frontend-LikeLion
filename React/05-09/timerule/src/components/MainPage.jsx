import React, { useState } from "react";

import "./MainPage.css";

import comment from "./img/comment.svg";
import startQuarter from "./img/startQ.svg";
import endQuarter from "./img/endQ.svg";
import touch from "./img/touch.svg";

export default function MainPage({ addData }) {
  const [goal, setGoal] = useState("");
  const [goalTime, setGoalTime] = useState("");

  function resetForm() {
    setGoal("");
    setGoalTime("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (goal === "" || goalTime === "") {
      alert("값이 입력되지 않았습니다!");
      return 0;
    } else if (goalTime > 24) {
      alert("24시간을 넘기지 마세요!");
      return 0;
    } else if (goalTime < 0) {
      alert("0이하 넣지마세요!");
      return 0;
    }

    let training = Math.floor(10000 / goalTime);

    const formData = {
      //   id: parseInt(Math.random() * 10000),
      goal: goal,
      goalTime: training,
    };

    addData(formData);
    console.log(formData);
    resetForm();
  };

  return (
    <>
      <section>
        <h2>
          <img
            src={comment}
            alt="연습은 어제의 당신보다 당신을 더 낫게 만든다."
          />
        </h2>
        <div className="content">
          <img src={startQuarter} alt="문단 시작" />
          <p>
            <strong>1만 시간의 법칙</strong>은
            <br />
            어떤 분야의 전문가가 되기위해서는
            <br />
            최소한 1만 시간의 훈련이 필요하다는 법칙이다.
          </p>
          <img src={endQuarter} alt="문단 종료" />
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            <p>
              <strong>나는 </strong>
              <input
                type="text"
                value={goal}
                placeholder="예)프로그래밍"
                onChange={(event) => setGoal(event.target.value)}
              ></input>
              <strong> 전문가가 될 것이다.</strong>
            </p>
            <p className="time">
              <strong>그래서 앞으로 매일 하루에 </strong>
              <input
                type="number"
                value={goalTime}
                onChange={(event) => setGoalTime(event.target.value)}
                placeholder="예)5시간"
              ></input>
              <strong> 시간씩 훈련할 것이다.</strong>
            </p>
          </label>

          <div>
            <button type="submit">
              나는 며칠 동안 훈련을 해야 1만 시간이 될까?
            </button>
            <img src={touch} alt="버튼을 클릭하세요!" />
          </div>
        </form>
      </section>
    </>
  );
}
