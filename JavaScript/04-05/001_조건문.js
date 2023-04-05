let score1 = 69;
let money = 1000;

if (score1 > 90){
    document.write('참 잘했습니다!<br>');
    money += 100000 // if문이 참일 경우 실행 아니면 else if로 넘어감
} else if (score1 > 80){
    document.write('잘했습니다!<br>');
    money += 10000
} else if (score1 > 70){
    document.write('했습니다!<br>');
    money += 1000
} else {
    money += 0 // 실행
}

document.write(money);

// if문 문제1
// 사용자로부터 입력받은 나이에 따라 다른 인사말을 콘솔로 출력하는 프로그램을 작성하세요. 

// 1. 나이가 18세 이상이면 "안녕하세요!"를
// 2. 10세 이상이면 "안녕! 반가워 꼬마친구! ” 를 
// 3. 10세 미만이면 “부럽다…” 를 출력합니다.

const age = parseInt(prompt("나이를 말씀해주세요!", "20")); // 프롬프트로 age값 받기(정수값만)
// 사용자에게 윈도우 창을 띄워 데이터를 입력받을 수 있는 함수

// 참고 : https://dasima.xyz/javascript-input-prompt/
if (age >= 18) {
    console.log('안녕하세요!')
} else if (age >= 10) {
    console.log('안녕! 반가워 꼬마친구!')
} else {
    console.log('부럽다...')
}

// if문 문제2
// 사용자로부터 입력받은 성적에 따라 성적을 출력하는 프로그램을 작성하세요. 

// 1. 성적이 90점 이상이면 "A", 
// 2. 80점 이상이면 "B", 
// 3. 70점 이상이면 "C",
// 4. 60점 이상이면 "D", 
// 5. 그 외에는 “강해져서 돌아와라”를 출력합니다.

const score2 = parseInt(prompt("성적을 말해줘요!","이거맞냐"));
if (score2 >= 90) {
    console.log("A");
} else if (score2 >= 80) {
    console.log("B");
} else if (score2 >= 70) {
    console.log("C");
} else if (score2 >= 60) {
    console.log("D");
} else {
    console.log("강해져서 돌아와라")
}


// 100보다 큰 값은 아예 안받을 수 없을까?
const score3 = parseInt(prompt("성적을 말씀해주세요!"))
if (score3 > 100){ // 예외처리 100보다 많은 값을 넣었을 경우를 대비
    alert('값이 너무 커요!');
} else {
    if (score3 >= 90) {
        console.log("A");
    } else if (score3 >= 80) {
        console.log("B");
    } else if (score3 >= 70) {
        console.log("C");
    } else if (score3 >= 60) {
        console.log("D");
    } else {
        console.log("강해져서 돌아와라")
    }
}

// 삼항연산자 // 코드를 실행하고 반환함, if문은 반환하지 않음
// 조건식 ? 조건식이 참일 때 실행될 코드 : 조건식이 거짓일 때 실행될 코드
let item = true ? console.log('true') : console.log('false');
// 이때 코드의 true는 Truthy 값이기 때문에 console.log('true')가 실행되고 그 반환값이 item에 할당
console.log(item); // console.log함수는 반환값이 undefined이므로 item에는 undefined가 할당됩니다.
// console은 전역객체(window객체)다.(어떤 곳이든 콘솔은 액세스 할 수 있다.)
// window는 모든 객체의 조상이다. 전역 객체(글로벌 객체)라고 하는데 모든 객체를 다 포함하고 있기 때문이다.
// console. 뒤의 log는 메소드임 (console 객체의 메서드 )


// if문은 문법, 삼항연산자는 표현식으로 값으로 판단되는 표현식(식이자 값임)
// const name = function(){} 도 표현식이다. 문법이 아닌 값을 표현하기 때문

let price = 5000;
// 삼항 연산자
let message = (price>6000) ? '비싸요!' : 
              (price<3000) ? '엄청싸요!' : '적당해요!'; // 적당해요가 맞다.
// if문 위의 코드는 아래와 같다.
let price2 = 5000;
let message2 = '';

if (price2 > 6000) {
		message2 = '비싸요!';
} else if (price < 3000) {
		message2 = '엄청싸요!';
} else {
		message2 = '적당해요!';
}

// 삼항연산자 문제3

if (score2 >= 90) {
    console.log("A");
} else if (score2 >= 80) {
    console.log("B");
} else if (score2 >= 70) {
    console.log("C");
} else if (score2 >= 60) {
    console.log("D");
} else {
    console.log("강해져서 돌아와라")
}

let score4 = parseInt(prompt("점수 얘기해보셈"));
let message3 =  (score4 > 100) ? alert('값이 너무 커요!') :
                (score4 >= 90) ? 'A' :
                (score4 >= 80) ? 'B' :
                (score4 >= 70) ? 'C' :
                (score4 >= 60) ? 'D' : "강해져서 돌아와라";
console.log(message3);