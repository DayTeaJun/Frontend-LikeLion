import { useState } from "react";
import Login from "./Login";
import Homepage from "./Homepage";
import Modal from "./Modal";

function Hello(props) {
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.

  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((i, index) => (
    // key 화면을빠르게 업데이트하기위해서 필요
    // 리액트가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다.
    // 요소의 이름을 식별하기 위한 것
    <h1 key={index}>
      안녕, {name} {i}호
    </h1>
  ));

  return <div>{numComponentsArray}</div>;
}

function App() {
  const user = {
    idUser: "jaehyun@weniv.com",
    pwUser: "1234",
  };

  const [login, setLogin] = useState(false);

  const [modalShow, setModalShow] = useState(true);

  // 리액트는 상태값을 계속해서 변경하여 반환하는 것을 해야함.
  // 리액트의 방법론(가상돔을 가지고 업데이트 전 후를 비교를 하여 반환하는 것)

  console.log(modalShow);

  function modalClose() {
    setModalShow(false);
  }
  console.log(login);
  return (
    <>
      <Hello name="licat" />

      {login ? <Homepage /> : <Login infoUser={user} setLogin={setLogin} />}
      {/* && 연산자는 첫번째 falsy, 마지막 truthy */}
      {/* && 연산자는 둘다 true면 마지막 true 반환 */}
      {/* && 연산자는 먼저 false면 false인걸 먼저 반환 */}
      {modalShow && (
        <Modal modalClose={modalClose}>
          {/* 여러가지 한번에 넣을 수 있음, props이용 */}
          <h2>사용약관에 대해 말씀드리겠습니다.</h2>
          <p>asdadaasd</p>
          <a href="#">adsa</a>
        </Modal>
      )}
    </>
    /* 자식에서 부모의 상태를 변경해줌(상태 끌어올리기) */
  );
}

export default App;
