// function ColorText(props) {
//   return (
//     <>
//       <h2 style={{ color: props.color }}>색이 바뀌어요!</h2>
//     </>
//   );
// }

// 구조분해 할당
function ColorText({ color }) {
  return (
    <>
      <h2 style={{ color: color }}>색이 바뀌어요!</h2>
    </>
  );
}

export default ColorText;
