import React from "react";
import Question from "./Components/Question";

// module로 실행한 경우는 모듈로 직접 컴포넌트를 불러와야함
// {styles.box}
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <nav className="box">
        <ul>
          <li id="detail" className="text">
            상세정보
          </li>
          <li id="qa" className="text">
            Q&A
          </li>
          <li id="review" className="text">
            Review
          </li>
        </ul>
      </nav>
      <Question />
    </>
  );
};

export default App;
