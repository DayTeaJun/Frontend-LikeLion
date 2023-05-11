import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
import Footer from "./Components/footer/Footer";
import Modal from "./Components/modal/Modal";

import { useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false);

  function modalClose() {
    setModalShow(false);
  }

  function modalOpen() {
    setModalShow(true);
  }

  return (
    <div id="app">
      <Header />
      <Main modalOpening={modalOpen} />
      <Footer />
      {modalShow && <Modal modalClose={modalClose} />}
    </div>
  );
}
export default App;
