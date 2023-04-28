var hello = "hello";
// var은 함수 스코프다. 함수안에서만 범위를 갖게됨.

// function sayHello() {
//     var hello = "hello hello"
//     console.log(hello);
// }

if (true) {
    var hello = "hello hello"
}
// hello hello

var hello = 'hello hello';

console.log(hello)