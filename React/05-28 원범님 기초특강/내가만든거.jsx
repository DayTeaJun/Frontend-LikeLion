// 프로젝트(멋사 과정중)할 때 어디까지 알아야하는가?
// 필수 > state, effect, js는 잘할수록 좋음

const { useState } = React;

function Counter() {
  const [number, setNumber] = useState(0);

  const CountNumberUp = () => {
    setNumber((prevNumber) => {
      return (prevNumber += 1);
    });
  };

  const CountNumberDown = () => {
    setNumber((prevNumber) => {
      return (prevNumber -= 1);
    });
  };

  return (
    <>
      <button onClick={CountNumberUp}>+</button>
      <button onClick={CountNumberDown}>-</button>
      <p>{number}</p>
    </>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <>
      <h1>제목</h1>
      <Counter />
    </>
  );
}

App();
