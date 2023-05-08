import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//public>index.html안에 root있음
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//App컴포넌트를 가져와서 <App />로 렌더링한다..
