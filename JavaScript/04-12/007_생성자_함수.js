let book = {
    책이름: "JavaScript",
    책가격: 1000,
    저자: '홍길동',
    출판일: '2023.04.12'
}

// 생성자함수
let newBook = {}

// form에서 입력 받은 경우라고 가정
newBook['책이름'] = "javaScript"
newBook['책가격'] = 100000
newBook['저자'] = "홍길동"
newBook['출판일'] = "2023.04.12"

newBook
// {책이름: 'javaScript', 책가격: 100000, 저자: '홍길동', 출판일: '2023.04.12'}

function Book(책이름, 책가격, 저자, 출판일) {
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
}

let newBook2 = Book("javaScript", 100000, "홍길동", "2023.04.12")
newBook2
// undefined 뜨는 이유는 return 값이 없어서

let newBook3 = new Book("javaScript", 100000, "홍길동", "2023.04.12")
newBook2
// Book {책이름: 'javaScript', 책가격: 100000, 저자: '홍길동', 출판일: '2023.04.12'}

//////////

// new 키워드를 사용했을 때 일어나는 일
function Book(책이름, 책가격, 저자, 출판일) {
    // this = {} // new 키워드를 사용하면 자동으로 추가함
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
    // return this // new 키워드를 사용하면 자동으로 추가함
}