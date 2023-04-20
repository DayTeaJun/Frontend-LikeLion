// 생성자(사용자가 만든) 함수는 맨앞에 대문자로 적어야한다 (암묵적 룰)
function NewFactory(name) {
    this.name = name;
    // this.name은 key이고, name은 value입니다. this.name은 객체의 프로퍼티 키(Key)를 나타내고, name은 생성자 함수를 호출할 때 전달받은 매개변수 값(Parameter)을 나타냅니다. 생성자 함수에서 this.name = name 구문은 객체의 name 프로퍼티에 매개변수로 전달받은 값(name)을 할당하는 것을 의미합니다.
    this.sayYourName = function () { // 메소드
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

// 생성자 함수 생성은 new 로한다.
const robot = new NewFactory('준');
// 이때 robot은 NewFactory클래스의 인스턴스다.
// 자바스크립트에서 생성자 함수를 사용하여 객체를 생성하면, 해당 객체는 생성자 함수의 인스턴스가 됩니다. 즉, 생성자 함수를 호출하여 생성된 객체가 인스턴스입니다.

// 프로퍼티와 메서드를 똑같은 것 여러개를 만들기 위해 생성자 함수를 만듦
const robot2 = new NewFactory('영');

// 결론 : 생성자 함수 앞에 new 연산자가 사용되면 함수안의 this는 생성자가 만들어낸 객체 즉, 인스턴스(여기서는 robot)를 바라본다(참조).
// 객체라는 말도 맞지만, 보통 클래스와 객체지향 프로그래밍에서는 클래스의 인스턴스라는 용어를 사용하는 경우가 많습니다.

// 생성자 함수를 사용하여 객체를 생성하면, 해당 객체는 생성자 함수의 프로토타입 객체를 상속합니다. 이러한 객체 지향 프로그래밍의 특성을 이용하여 코드를 모듈화하고 재사용성을 높일 수 있습니다.

// 실습 내꺼
function FoodPicker(foodName) {
    this.name = foodName;
    this.randomFood = function () {
        console.log(this);
        console.log(`오늘 밥은 ${this.name[rand(0, 3)]}이다!`)
    }
}

// random의 범위 길이를 구하는 함수
function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const myFood = new FoodPicker(['짜장면', '청국장', '김치찌게'])

// 실습 강사님
function FoodPicker(foodName) {
    this.name = foodName;
    this.randomFood = function () {
        console.log(`오늘 밥은 ${this.name[Math.floor(Math.random() * this.name.length)]}이다!`)
        // Math.random은 0~0.9999.. 까지 반환
        // Math.floor은 소숫점을 정수로 반환
        // 인스턴스의 길이만큼 곱해서 랜덤 길이를 넓힘
    }
}

const myFood2 = new FoodPicker(['짜장면', '청국장', '김치찌게'])

// this 로 가르키는 이유
// 생성자 함수 내부에서 객체의 프로퍼티를 추가하려면, this 키워드를 사용해야 합니다. this는 생성자 함수에서 생성되는 인스턴스 객체를 가리키는 역할을 하며, this를 사용하여 인스턴스 객체의 프로퍼티를 정의할 수 있습니다. 따라서 생성자 함수 내부에서 프로퍼티의 키(key)를 정의하는 것은 this 키워드를 사용하는 것과 같습니다.