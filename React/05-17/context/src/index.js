import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import { AppConsumer } from "./AppConsumer";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<AppConsumer />);
