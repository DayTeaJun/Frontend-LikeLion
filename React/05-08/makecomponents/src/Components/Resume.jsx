// function Resume(props) {
//   return (
//     <div style={{ border: "1px solid black", padding: "10px 5px" }}>
//       <h2>{props.name} 자기소개서</h2>
//       <h2>{props.hello}</h2>
//       <h3>취미 : {props.hobby}</h3>
//       <h3>좋아하는 음식 : {props.food}</h3>
//       <h3>
//         좋아하는 색 : <span style={{ color: "blue" }}>{props.color}</span>
//       </h3>
//     </div>
//   );
// }

function Resume(props) {
  return (
    <div style={{ border: "1px solid black", padding: "10px 10px" }}>
      <h2>{props.name} 자기소개서</h2>
      <strong>{props.hello}</strong>
      <dl>
        <dd>취미 : </dd>
        <dt>{props.hobby}</dt>
        <dd>좋아하는 음식 : </dd>
        <dt>{props.food}</dt>
        <dd>좋아하는 색 : </dd>
        <dt>
          <span style={{ color: props.color }}>{props.color}</span>
        </dt>
      </dl>
    </div>
  );
}

export default Resume;
