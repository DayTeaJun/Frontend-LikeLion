// 비공개(private) 프로퍼티

class Robot {
    // # 키워드를 사용하면 프로퍼티를 비공개로 전환할 수 있다.
    #password

    constructor(name, pw) {
        this.name = name;
        this.#password = pw;
    }


    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }

    // password 키워드를 가져 올 수 있는 함수
    // this.#password 로 접근 가능
    getPassword() {
        return this.#password
    }

    // password 키워드를 바꾸는 함수
    setPassword(pw) {
        this.#password = pw;
    }
}

const myBot = new Robot('준영', '1000')

// 사용자 정의 타입으로는 어떻게 비공개 프로퍼티를 만들 수 있을까요?
// 생성자 함수에서는 '클로저'로 만들 수 있다.