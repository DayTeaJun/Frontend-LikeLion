let a;
console.log(a);

if (typeof a === "undefined") {
    console.log('y에 아무것도 할당되지 않았습니다')
}

if (!a) { // a에 부정 연산자를 줘서 true로 if문 실행함
    console.log('y에 아무것도 할당되지 않았습니다')
}