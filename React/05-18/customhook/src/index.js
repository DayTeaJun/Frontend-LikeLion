import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import ImgCustomHook from "./ImgCustomHook";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ImgCustomHook />);
