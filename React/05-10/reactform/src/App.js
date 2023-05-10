import { useState } from "react";
import "./App.css";
import EventForm from "./components/EventForm";
import ItemGenerator from "./components/ItemGenerator";

function App() {
  // App.js는 현재 ItemGenerator과 EventForm을 자식으로 두는데
  // 자식간의 형제사이에는 데이터를 서로 옮기지 못함
  // 그래서 부모인 App.js에서 EventForm으로부터 상태 끌어올리기를 하고 이것을 받은 부모는 ItemGenerator에 넣어서 출력하게 함.
  const [datas, setDatas] = useState([]);

  // datas 배열에 데이터를 추가하는 목적을 가지는 함수
  const addData = (data) => {
    setDatas([...datas, data]);
  };

  console.log(datas);

  return (
    <>
      <ItemGenerator datas={datas} />
      <EventForm addData={addData} />
    </>
  );
}

export default App;
