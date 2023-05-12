import React from "react";
// 하나만 불러 올 때
import Buttons from "./Components/Buttons";
// 불러온것만 쓰고 싶을 때
import { Button1, Button2, Button3 } from "./Components/Buttons";

const App = () => {
  return (
    <>
      <Button1>버튼1</Button1>
      <Button2>버튼2</Button2>
      <Button3>버튼3</Button3>
    </>
  );
};

export default App;
