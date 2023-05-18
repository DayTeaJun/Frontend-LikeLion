import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Modal from "./components/common/Modal";
import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [modalShow, setModalShow] = useState(false);

  const modalClose = () => {
    setModalShow(false);
  }

  const modalOpen = () => {
    setModalShow(true);
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main modalOpen={modalOpen} />
      <Footer />
      {modalShow && <Modal modalClose={modalClose} />}
    </>
  );
}
export default App;