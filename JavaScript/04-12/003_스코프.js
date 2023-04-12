// let과 const는 블록레벨 스코프를 가지고 있습니다.
{
    let x = 10
    const y = 20
}

console.log(x, y) // 스코프안에 선언해서 error

// 지역변수와 전역변수
let x = 100 // 블록 밖에 선언하면 전역에서 접근할 수 있는 변수. 이를 전역 변수라고 한다.
function 함수() {
    let y = 20 // 블록 안에 변수를 선언하면 밖에서 접근할 수 없다. 이를 지역변수라고 한다.
    console.log(x) // 스코프 채이닝(스코프 체인을 따라 해당 영역에 변수가 없으면 계속해서 상위 스코프(블록)를 따라 올라간다.(윈도우까지) 전역까지 올라갔는데도 변수가 없다면 에러가 난다.)
}
함수()

let x = 10
function 함수1() {
    let x = 20
    function 함수2() {
        function 함수3() {
            // let x = 30
            console.log(x) // 20
        }
        함수3()
    }
    함수2()
}
함수1()
// 스코프채이닝 스코프를 타고 올라가는 채이닝
console.log(x) // 10
// 함수1() 호출하면 안의 값을 보는데 함수2()를 보고 호출하고 함수3()을 보고 호출하는데 x값이 그 스코프에 안에 없으면 상위스코프를 따라 올라가서 함수1() 스코프안의 let x = 20을 가져온다. 결과적으로 console.log(x)는 20을 호출한다.


// 함수의 호이스팅(함수나 변수를 끌어올려 주는 것처럼 보임)
// 실제로는 인터프리터가 변수와 함수의 메모리 공간을 선언전에 미리 할당하는 것을 의미
// 자바스크립트 함수는 실행되기 전에 함수 안에 필요한 변수값들을 모두 모아서 유효 범위의 최상단에 선언한다.
https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html

// error 없이 실행 됩니다.
함수(10)

function 함수(x) {
    return x + 100
}

// error가 생깁니다. // let이나 const로 선언했을 때는 순서를 지켜줘야함, 선언한 다음 값을 할당한 다음 사용할 수 있음
함수(10)

let 함수 = x => x + 100

// error가 생깁니다.
함수(10)

const 함수 = function (x) {
    return x + 100
}