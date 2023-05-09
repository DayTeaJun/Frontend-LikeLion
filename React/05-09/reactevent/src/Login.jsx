import { useState } from "react";

export default function Login({ infoUser, setLogin }) {
  // const [message, setMessage] = useState("여기를 주목하세요");
  // setMessage는 상태갱신으로 message의 상태(값)를 관리(변경)함
  // 쓰는 이유는 필요한 부분만 찾아서 리렌더링을 빠르게 하기위함
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (id === "") {
      alert("아이디를 입력하지 않았습니다.");
    }
    if (pw === "") {
      alert("패스워드를 입력하지 않았습니다.");
    }
    // alert(`id : ${id}, pw : ${pw}`);

    if (id === infoUser.idUser && pw === infoUser.pwUser) {
      setLogin(true);
    }
  };

  const handleLoginInput = (e) => {
    console.log("id", e.target.value);
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    console.log("pw", e.target.value);
    setPw(e.target.value);
  };

  return (
    /* onMouseEnter 마우스 올렸을 때(호버) */
    /* onMouseLeave 마우스 떠났을 때 */
    /* <p onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
          여기에 마우스를 올려보세요!
        </p>
        <div>{message}</div> */

    /* onSubmit는 submit 버튼을 눌렀을 때 실행 */
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 :
        <input type="text" value={id} onChange={handleLoginInput} />
        {/* onChange는 안의 내용이 변경될 때 마다 실행 */}
      </label>
      <br />
      <label>
        비밀번호 :
        <input type="password" value={pw} onChange={handlePasswordInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}
