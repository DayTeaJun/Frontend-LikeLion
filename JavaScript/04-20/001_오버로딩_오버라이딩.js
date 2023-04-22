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
    taste() { // 같은 함수이름을 쓰게 되면 기존의 부모 것을 덮어 쓰게됨 이것을 오버라이딩이라고 부른다. // 결론은 같은 함수이름이라면 자식의 함수꺼만 씀
        console.log(`와! ${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}이 나는 소세지다.`)
    }
}

const sausage1 = new FireSausage1('파', '키위', '불')