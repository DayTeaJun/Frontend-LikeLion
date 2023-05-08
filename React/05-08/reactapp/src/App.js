import DisplayMood from "./Components/DisplayMood/DisplayMood";
import MenuList from "./Components/MenuList/MenuList";
import "./App.css";
import { useState } from "react";

function App() {
  // 현재기분(현재 사용자가 선택한), 현재기분을 바꾸는 함수
  const [currentMood, setCurrentMood] = useState("");

  return (
    <div>
      <MenuList mood={currentMood} onItemClick={setCurrentMood} />
      <DisplayMood mood={currentMood} />
    </div>
  );
}
export default App;

// setCurrentMood 의 버튼 순서 상태
// App(onItemClick) -> btnlist(onClickEvt) -> btn(onClick)로 변경

// currentMood 순서 상태
// App(mood) -> DisplayMood(상태창)
