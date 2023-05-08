import "./Menu.css";

function Menu() {
  return (
    // 인라인 스타일 적용이 css보단 우선순위 높음, {}안에 여러개 쓸때는 객체형태로 작성
    <ul
      className="newClass"
      style={{ backgroundColor: "black", color: "yellow" }}
    >
      {/* class 속성은 calssName으로 표기 */}
      <li>짜장면</li>
      <li>짬뽕</li>
      <li>탕수육</li>
    </ul>
  );
}

export default Menu;
