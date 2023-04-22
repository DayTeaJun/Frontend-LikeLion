class Robot {
    #password

    constructor(name, pw) {
        this.name = name;
        this.#password = pw;
    }


    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }

    // get 키워드로 설정하면 접근할 수 있다.
    get password() {
        return this.#password
    }

    // set 키워드로 설정하면 변경할 수 있다.
    set password(pw) {
        this.#password = pw;
    }

    // get, set의 키워드로 접근할려면 함수이름이 같아야한다.
}

const bot = new Robot('재현', 1234);

bot.password = 5678; // 근데 이런식으로 접근하면 비공개 프로퍼티의 의미가 사라진다.
// console.log(bot.password);

// get 과 set을 사용할 때 주의할 점!
// get과 set을 사용하면 마치 객체의 프로퍼티를 수정하는것 같은 간편함을 느낄 수 있습니다.하지만 해당 코드를 직접 작성하지 않은 협업자들에게는 오해를 일으킬 소지가 있습니다.get, set 안에 어떤 로직이 들어있는지 파악하지 못하고 단순히 객체의 프로퍼티를 수정한다는 착각을 일으킬 수 있기 때문입니다.
// 때문에 협업 시에는 주석이나, 가이드 문서를 만들어 충분한 정보를 제공해주는것이 좋습니다.

// 그래서 비공개 프로퍼티를 만들려면 생성자 함수에 클로저로 만드는게 좋냐
// class에 #을 이용하는게 좋냐
// 회사 컨벤션 마다 다름