// balls라는 변수를 만든다.
// documet(문서)에서 "ball"이라는 클래스를 검색하는 명령어를 통해(".ball")
// document.querySelectorAll 이걸 사용함
// 이거의뜻은 문서에서 명령에맞게 모든걸 가져와라.
const balls = document.querySelectorAll(".ball");

// 반복할거임.
// balls.length 만큼(일단 모르는데 검색해서 나온것의 길이 또는 개수);
//
{
  // 이게뭐임?
  // 이걸 우리는 코드블록이라고함
}
// for ()<< 이 괄호안에있는거 뭐임..?
// let i = 0; for반복문 하는동안 사용할 변수
// i < balls.length 이거는 비교를 해서 맞는지 아닌지 검사하는거
// 맨 뒤에있는 i++ 이거는 "코드블럭"이 실행되고 할 행동.
for (let i = 0; i < balls.length; i++) {
  // 0일때
  // balls에 0번째있는 값을 가져온다.
  // balls 0번째에는 뭐가있음?
  // 우리가 쿼리셀렉터ALL해서 가져온것중 0번째것
  // 이걸 balls[0]이라고 부름
  // balls[0]에 onclick을 설정한다.
  // onlick이라는 행동이 브라우저에서 일어나면 설정한 함수가 실행됨
  balls[i].onclick = function () {
    // 설정할 함수내용들 (실행할 코드블럭)

    // prompt라는 함수를 실행함.
    // prompt는 입력창이있는 프롬프트를 보여주고
    // 입력하고 확인을 누르면 그 입력한 값을 돌려준다(return해준다.)
    // 이 프롬프트를 통해 받은값을 num에 넣게된다.
    let num = prompt("번호를 입력해주세요");

    // 이녀석은 뭐임?
    // 알림. 입력한 값을 "num"이라는 거에 저장했다.
    // 그 저장된 값을 가져와서 알려줌.
    alert(num + "번호가 입력되었습니다!");
    // 브라우저의 콘솔에 뭔가 보여주는 행위

    // balls[i]번째(지금은 0번째) 값을 보여주고,
    // 현재 몇번째인지 보여준다.
    console.log(balls[i], i);

    // balls 0번째 있는 요소에 안에 html을 바꿔준다.
    // 뭘로? -> 저장한(프롬프트에서 입력한걸) 값으로
    balls[i].innerHTML = num;
  };
}
