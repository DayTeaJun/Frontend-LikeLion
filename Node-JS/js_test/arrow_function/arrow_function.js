const foo = (x) => {
    return x
    // return 뒤 값은 실행이 안됨.
    console.log("arrow function")
};
console.log(foo("arrow"));

// 위 코드와 아래 코드는 동일
foo4() // 함수 선언식은 호이스팅 됨. 함수표현식(const = function)은 호이스팅 안됨.
function foo4() {
    console.log("arrow function222")
}

const foo2 = (x, y) => x + y;
// => 뒤는 리턴값
console.log(foo2(1, 5));

const foo3 = (x, y) => {
    console.log("2줄 이상")
    // return 전에 실행해야 할 코드가 있으면 중괄호 있어야함
    return x + y
};
console.log(foo3("arrow"));