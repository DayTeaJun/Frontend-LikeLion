// 생성자(사용자가 만든) 함수는 맨앞에 대문자로 적어야한다 (암묵적 룰)
function NewFactory(name) {
    // 이때 this는 전역공간을 가리키고 있음(window)
    console.log(this);
    this.name = name;
    this.sayYourName = function () {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

// 생성자 함수 생성은 new 로한다.
const robot = new NewFactory('준');
// 이때 robot은 NewFactory클래스의 인스턴스다.

// 프로퍼티와 메서드를 똑같은 것 여러개를 만들기 위해 생성자 함수를 만듦
const robot2 = new NewFactory('영');

// 결론 : 생성자 함수 앞에 new 연산자가 사용되면 함수안의 this는 생성자가 만들어낸 객체 즉, 인스턴스를 바라본다(참조).

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