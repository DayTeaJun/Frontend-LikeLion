// Date()

let d = new Date()

d.getDate() // 1부터 시작합니다. 날짜를 출력합니다.
d.getMonth() // 0월부터 시작합니다. +1을 해야 합니다.
d.getDay() // 0부터 시작합니다. 0은 일요일입니다.

switch (d.getDay()) {
    case 0:
        console.log('일요일')
        break;
    case 1:
        console.log('월요일')
        break;
    case 2:
        console.log('화요일')
        break;
    case 3:
        console.log('수요일')
        break;
    case 4:
        console.log('목요일')
        break;
    case 5:
        console.log('금요일')
        break;
    case 6:
        console.log('토요일')
        break;
    default:
        console.log('날짜의 양식이 잘못되었습니다.')
        break;
}

d.getHours()
d.getMinutes()
d.getSeconds()


d.getFullYear()
// d.getYear() // 1900년도부터 연도 계산, 쓰지 않습니다. 잊어버리세요.

// new Date(2023, 6, 30)
new Date(2023, 6, 30)
// 6월을 표시하기 위해서는 -1을 해야 합니다. 월은 0부터 시작합니다.
// 6월 30일이 수료일인데 얼마나 남았을까요? => 하단에 코드 만들겠습니다.

new Date(2023, 5, 30, 18)

// 다음처럼 표현하면 가독성이 훨씬 좋다. 여기에서 문제가 발생! 왜 1이(2월) 아닌가??
new Date('2023/1/20/10:00:00')

today = new Date() // today의 지정 로캘은 KST다.


// UTC와 today의 지정 로캘(locale) KST와의 차이는 -9시간이다.
// 쉬운 말로 협정 세계시(Universal Time Coordinated)와 내 컴퓨터 시간 차가 -9시간
// https://ko.wikipedia.org/wiki/%ED%98%91%EC%A0%95_%EC%84%B8%EA%B3%84%EC%8B%9C
// locale 을 활용하면 언어권에 맞게 입력과 출력을 수정하지 않고도 사용하는 언어권에 맞는 날짜를 처리할 수 있습니다.
//UTC와 현재 로케일(호스트 시스템, today의 지정 로캘 KST(Korea Standard Time))의 차이는 -9시간이다.
today.getTimezoneOffset() / 60

today.toString();     // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toTimeString(); // -> 12:30:00 GMT+0900 (대한민국 표준시)

today = new Date('2023/1/20/10:00:00')
today.toString();

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
// 국제표준시 기준 형식으로 표현
today.toISOString();
today.toISOString().slice(0, 10);
today.toISOString().slice(0, 10).replace(/-/g, '')

// 날짜를 언어별로 구분하여 나타내는 문자열을 반환
//http://www.w3bai.com/ko/tags/ref_language_codes.html#gsc.tab=0
//http://www.w3bai.com/ko/tags/ref_country_codes.html#gsc.tab=0
today.toLocaleString('ko-KR'); // -> 2020. 7. 24. 오후 12:30:00
today.toLocaleString('en-US'); // -> 7/24/2020, 12:30:00 PM
today.toLocaleString('ja-JP'); // -> 2020/7/24 12:30:00


const dayNames = [
    '(일요일)',
    '(월요일)',
    '(화요일)',
    '(수요일)',
    '(목요일)',
    '(금요일)',
    '(토요일)'
];
// getDay 메서드는 해당 요일(0 ~ 6)을 나타내는 정수를 반환한다.
const day = dayNames[today.getDay()];

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
const ampm = hour >= 12 ? 'PM' : 'AM';

// 날짜의 차를 구하는 코드
// getTime은 1970 년 1 월 1 일 00:00:00 UTC와 주어진 날짜 사이의 경과 시간 (밀리 초)을 나타내는 숫자
function getDateDiff(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const diffDate = date1.getTime() - date2.getTime();
    // 일 == 밀리세컨 * 초 * 분 * 시
    return Math.abs(diffDate / (1000 * 60 * 60 * 24));
}

getDateDiff("2023-02-27", "2023-06-30");
getDateDiff("2023-04-17", "2023-06-30");