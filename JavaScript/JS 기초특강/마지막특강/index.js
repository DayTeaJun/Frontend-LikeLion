async function onClickButton() {
  //버튼을 눌렀을때 동작하는거 작성하기
  const 서버응답 = await fetch("https://test.api.weniv.co.kr/mall");
  // await은 프로미스를 지워줌.
  const json = await 서버응답.json();
  console.log(json);
}

// 화면에 그려주는애..
// 그려줄거를 받아서 그려주는애
function render($target, $el) {
  $target.append($el);
}

const buttonProps = {
  text: "안녕sadasd",
  onClickButton: onClickButton,
};

function createButton(props) {
  console.log(props);
  const $button = document.createElement("button");
  $button.addEventListener("click", props.onClickButton);
  $button.innerText = props.text;
  return $button;
}

const $button = createButton(buttonProps);
const $root = document.querySelector("#root");
render($root, $button);

const 오현고등학교porps = {
  최대학년: 3,
  교장선생님: "백광익",
};

const 중앙여자고등학교porps = {
  최대학년: 3,
  교장선생님: "노태희",
};

// 고등학교 객체만들기 ㅋ object라고도함
const 오현고등학교 = new 고등학교(오현고등학교porps);
오현고등학교.교장선생님이름가져오기();

const 중앙여자고등학교 = new 고등학교(중앙여자고등학교porps);
중앙여자고등학교.교장선생님이름가져오기();
