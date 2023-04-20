// class
// 생성자 함수에서 만들어낸 객체를 인스턴스라고 부르는데, 클래스에서 만들어낸 객체도 인스턴스라고 부른다.


// 생성자 함수는 아래 class와 비슷한 원리다.
function Robot(name) {
    this.name = name;
}

Robot.prototype.sayYourName = function () {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
}
// 생성자 함수를 만드는 방법, 인스턴스를 만드는 방법이다.


// class 사용법
class Robot {
    // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다. 
    // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
    constructor(name) { // 클래스 안에서 생성자 함수를 선언함
        this.name = name;
    }

    // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
    // 생성자 함수처럼 프로토타입을 명시하지 않아도 자동으로 프로토타입에 등록된다.
    sayYourName() { // class문법에서는 함수 선언식 처럼 등록하였음
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

const robot = new Robot('재현'); // 생성자 함수처럼 만들면 된다.
// robot(인스턴스) 안에 구조에 prototype가 생성자 함수처럼 똑같다.

// 자바스크립트만의 사용자 정의 타입 생성(객체 생성) 방법을 다른 언어의 클래스 문법처럼 바꿔준 것이 바로 자바스크립트 클래스(class)입니다!
// 이처럼 내부적인 동작은 동일하지만 더 보기 좋고 편리하게 개선된 문법을 슈가신텍스 (Syntactic sugar) 라고 부릅니다.

// class로 명시를 하면 인스턴스를 생성하는 것을 알 수 있지만, function 함수를 사용하면 바로 알기 어렵다.

// 실습 생성자 함수 -> class로 바꾸기
const me = {
    name: '웨이드',
    address: '제주도 제주시 인다 1길',
    phoneNum: '010-8001-6536',

    canWalk: function () {
        console.log('웨이드가 걷는다.');
    },
    teaching: function (myStudent) {
        myStudent.levelUp();
    }
}

class Me {
    constructor() { // constructor 말 그대로 생성자라는 뜻
        this.name = '웨이드';
        this.address = '제주도 제주시 인다 1길';
        this.phoneNum = '010-8001-6536';
    }

    canWalk() {
        console.log('웨이드가 걷는다.');
    }

    teaching(myStudent) {
        myStudent.levelUp();
    }
}

const me1 = new Me(); // 인스턴스 생성
const me2 = new Me(); // 인스턴스 생성

me.canWalk === me2.canWalk // true 자동으로 프로토타입에 등록된 것을 확인

// class 상속받기
// 클래스의 상속은 extends 키워드를 사용합니다.
// 상속을 받는 클래스는 ‘파생 클래스’(derived classes)라고 부릅니다.
// 부모 클래스의 프로퍼티를 상속받기 위해 super 함수를 사용합니다. 이때 super는 부모 생성자를 참조합니다.

// 부모
class Robot {
    constructor(name) {
        this.name = name;
    }

    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

// 자식
class BabyRobot extends Robot { // BabyRobot은 Robot으로부터 상속받고 있다.
    constructor(name) {
        super(name); // 부모의 생성자함수를 참조한다.
        this.ownName = '아이크'; // BabyRobot의 고유한 프로퍼티
    }

    sayBabyName() { // BabyRobot만의 고유 메서드
        // 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게 됩니다. 때문에 this로 접근 할 수 있습니다.
        this.sayYourName(); // 부모로부터 메서드를 상속받을려면 this
        console.log('Suceeding you, Father!');
    }
}
const babyRobot = new BabyRobot(Robot); // 인자가 Robot일 경우
// babyRobot.sayYourName() 로 사용했을 때
// 삐리비리. 제 이름은 class Robot {
//     constructor(name) {
//         this.name = name;
//     }

//     sayYourName() {
//         console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
//     }
// }입니다. 주인님.

const babyRobot2 = new BabyRobot("준"); // 인자가 "준"일 경우
// babyRobot2.sayYourName() 로 사용했을 때
// 삐리비리. 제 이름은 준입니다. 주인님.

// **super 사용시 주의할 점**

// - 만약 파생 클래스에 생성자 함수를 사용하고 싶다면 반드시 생성자 함수안에서 super 함수를 사용해야합니다.
// - 파생클래스에 생성자 함수가 없다면 super 함수가 자동으로 호출되어 부모 클래스의 프로퍼티를 상속 받게 합니다.
// - 생성자 함수에서 this 값을 사용할 경우 super 함수는 반드시 this 보다 먼저 실행되어야 합니다.
// - 파생 클래스가 아닌 클래스에서 사용하면 에러가 발생합니다. // 상속받지 않은 클래스가 사용 시 에러

// - 실습 : 소시지를 만드는 클래스를 정의해봅시다.
// 1. 생성자 함수는 두 가지 매개변수를 전달 받을 수 있으며 전달되는 매개변수에 따라 소시지의 맛이 결정됩니다.
// 2. 소시지 객체는 taste 라는 메서드가 존재합니다. 생성자함수에서 전달받은 재료에 따라 맛을 나타내는 콘솔로그를 출력하는 역할을 합니다. (예시 : ‘소고기’ 와 ‘파’ 를 매개변수로 전달하였을 경우, ‘소고기와 파 맛이 난다!’ 는 콘솔 메세지를 출력합니다.)
// 3. 소시지 클래스를 상속받는 FiresSausage 파생클래스를 생성해봅니다. 파생클래스의 taste 메서드를 실행하면 콘솔 메세지에 불맛이 나기 시작합니다.

class Vienna {
    constructor(food, ingredient) {
        this.food = food;
        this.ingredient = ingredient;
    }
    taste() {
        console.log(`${this.food}와 ${this.ingredient}맛이 난다.`);
    }
}

class FireSausage extends Vienna {

    // 서브클래스에 생성자 함수가 없다면 super함수가 자동으로 호출되어 부모 클래스의 프로퍼티를 상속 받게 한다.

    taste() {
        console.log(`${this.food}와 ${this.ingredient}, 불맛이 난다.`)
    }
}

const vienna = new Vienna("소고기", "파");
const fireV = new FireSausage('돼지고기', '마늘')

// 범관님
class Sausage {
    constructor(...taste) {
        this.taste = taste
    }
    whatTaste() {
        console.log(`${this.taste} 맛이 난다!`)
    }
}

class firesSausage extends sausage {
    whatTaste() {
        console.log(`${this.taste}맛과 불맛이 난다!`)
    }
}

let a = new sausage('파', '소고기', '겨자')
let b = new firesSausage('과자', '피')

// 강사님
class Sausage1 {
    constructor(el1, el2) {
        this.inside1 = el1;
        this.inside2 = el2;
    }

    taste() {
        console.log(`와! ${this.inside1}맛과 ${this.inside2}맛이 나는 소세지다.`)
    }
}

class FireSausage1 extends Sausage1 {
    constructor(el1, el2, el3) {
        super(el1, el2);
        this.inside3 = el3
    }

    // 오버로딩
    // 같은 이름의 메소드를 실행 시킬 때 인자 개수에 따른 실행법을 다르게 할 수 있다.
    taste(el1) {
        console.log(`와! ${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}이 나는 소세지다.`)
    }

    taste(el1, el2) {
        console.log(`와! ${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}이 나는 소세지다.`)
    }

    // 자바스크립트에서는 여기서 매개변수를 3개 선언해도 인자를 1개만 전달하더라도 나머지는 2개는 undefined로 처리를 한다.
    // 이처럼 실수에 관대하기 때문에 오버로딩의 개념은 쓰지 않음
    // 그래서 if문으로 인자를 몇개를 받는가 하는 것으로 오버로딩을 사용
    // 오버로딩(overloading)은 다형성을 구현하는 방법 중 하나
    taste(el1, el2, el3) {
        console.log(`와! ${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}이 나는 소세지다.`)
    }


    // 오버라이딩
    taste() { // 같은 함수이름을 쓰게 되면 기존의 부모 것을 덮어 쓰게됨 이것을 오버라이딩이라고 부른다.
        console.log(`와! ${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}이 나는 소세지다.`)
    }
}

const sausage1 = new FireSausage1('파', '키위', '불')

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