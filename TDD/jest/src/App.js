import { useState } from "react";
import "./App.css";

// TDD 단계
// 🔴 적색 단계 : 성공하기 위해 테스트 실패하는 단계
// 🟢 녹색 단계 : 테스트에 성공하는 단계
// 🟣 리팩터 단계 : 테스트에 성공한 코드를 기반으로 코드의 품질을 높이는 단계 refactoring

function App() {
  const [btnColor, setBtnColor] = useState("red");
  const newColor = btnColor === "red" ? "blue" : "red";

  return (
    <>
      {/* WAI-ARIA로 role을 지정해줘야 해야  getByRole 로 찾을 수 있고
    스크린 리더에 추가로 읽기 쉽게 해준다. 하지만 button 같은 특정 요소는 role을 명시하지 않아도 암묵적으로 가지고 있다. */}
      {/* <button role="button"></button> */}
      <button
        style={{ backgroundColor: btnColor }}
        onClick={() => setBtnColor(newColor)}
      >
        change to {newColor}
      </button>
    </>
  );
}

export default App;
