// 프로토타입
// 자 그런데 문제가 하나 있습니다. 우리는 손쉽게 객체를 생산할 수 있지만, 객체의 메서드를 등록 할때마다 새로운 함수를 생성하고 있습니다.

function NewFactory(name) {
    this.name = name;
    this.sayYourName = function () {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

this.sayYourName = function () {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
} // 이 부분이 robot1 에 생성자 함수를 할당할 때마다 생성이 된다.

const robot1 = new NewFactory(1);
const robot2 = new NewFactory(2);

robot1 === robot2 // false 각 다르게 생성되고 있기 때문

// 그래서 자원의 낭비를 해결하기 위해 등장한 것이 바로 프로토타입입니다.

// prototype은 특정 객체에 대한 참조입니다. 즉 어떠한 공간을 가르키고 있습니다.
// 생성자 함수가 인스턴스를 생성하게 되면 그 안에는 숨겨진 프로퍼티인 [[Prototype]] 이 존재하게 됩니다.
// 인스턴스.__proto__로 접근가능
robot1.__proto__ === NewFactory.prototype // true

// prototype은 함수에 있고 __proto__는 인수에 있음

// new 키워드가 하는 역할
// 1. 생성자함수랑 같이 호출되면 this랑 인스턴스를 연결한다.
// 2. 인스턴스의 프로토객체와 생성자의 프로토 프로퍼티를 연결한다.

// 잠시만요 … prototype 과 __proto__ 는 다른건가요???
// 네 맞습니다. prototype은 오직 function안에 존재하는 참조값입니다. __proto__  는 객체 안에 존재하는 숨겨진 프로퍼티입니다. 인스턴스는 __proto__를 통해 생성자 함수의 prototype에 접근하여 필요한 여러가지 값과 메서드를 사용할 수 있습니다.

// 모든 함수는 prototype라는 프로퍼티를 갖는다.(여기서 다루는 생성자 함수 뿐만 아니라)

// 이렇듯 프로토타입은 모든 인스턴스가 하나의 메서드를 공유하도록 만들어 자원을 더 효율적으로 사용하도록 도와줍니다. 생성된 객체끼리 메서드를 비교하여 같은 곳을 참조하는지 살펴보는것도 이해하는데 도움이 됩니다.

function Junyoung() {

}

// 프로토타입안에 name이라는 프로퍼티를 할당
Junyoung.prototype.name = "준영"

junyoung1.__proto__.name = "수영" // 인스턴스로 prototype을 바꿔줄 때는 이렇게
junyoung3.name // 은 위에서 같은 함수의 prototype이 바뀌었기 때문에 다 바뀜


const junyoung1 = new Junyoung();
const junyoung2 = new Junyoung();
const junyoung3 = new Junyoung();

// 실습
function FoodPicker(foodName) {
    this.name = foodName;
}

FoodPicker.prototype.randomFood = `오늘 밥은 ${this.name[Math.floor(Math.random() * this.name.length)]}이다!`

const myFood2 = new FoodPicker(['짜장면', '청국장', '김치찌게'])


// 실습2

function Me() {
    this.name = '웨이드';
    this.address = '제주도 제주시 인다 1길';
    this.phoneNum = '010-8001-6536';
}

Me.prototype.canWalk = function () {
    console.log('웨이드가 걷는다.');
};
Me.prototype.teaching = function (myStudent) {
    myStudent.levelUp();
}


const obj = {
    name: 'test'
}

console.log(obj.hasOwnProperty('name')); // 객체에 name이란 프로퍼티가 존재하는가에 대해 boolean값으로 반환

const arr1 = [1, 2, 3];

console.log(arr.hasOwnProperty('name')); // hasOwnProperty는 객체의 메서드인데 배열에 참조가능하다.

// 그 이유는 Array 함수의 __proto__ 가 Object 함수의 __proto__ 를 참조하고 있기 때문에 Array의 prototype에 존재하지 않는 Object 객체의 프로퍼티와 메서드를 사용할 수 있습니다.

// array 의 메소드들은 prototype 공간에 다 숨겨져 있다.
// 위에서 array는 오브젝트 안에 들어있는 prototype 공간에 object 프로퍼티와 메서드들이 연결되어 있다

// 이처럼 자기 자신에게 존재하지 않는 프로퍼티나 메서드를 프로토타입을 통해 추적하는 과정을 프로토타입 체이닝이라고 합니다.

// 자바스크립트의 타입들은 기본적으로 Object 타입을 상속받고 있습니다. 

let arr = new Array()
const str = new String()
const num = new Number()
// 로 다 찾아보면 안에 object prototype들이 다 상속받고 있다는 것을 있음


// 이번에는 우리가 직접 생성한 생성자 함수를 통해 상속을 받도록 해보겠습니다.먼저 부모의 역할을 할 생성자 함수를 만들고,
function Parent() {
    this.name = '재현';
}
// Parent.prototype에 등록함
Parent.prototype.rename = function (name) {
    this.name = name;
}
Parent.prototype.sayName = function () {
    console.log(this.name);
}

const parent = new Parent();

// 자식 역할의 생성자 함수를 만듭니다.
function Child() {
    Parent.call(this); // Child 함수의 this가 Parent 생성자 함수의 this를 바라보게 만듭니다. // call 은 즉 this의 대상을 바꾼다.
}

Child.prototype = Object.create(Parent.prototype);
// Object.create는 새 객체와 프로퍼티를 만듦
//  Object.create 함수는 주어진 인자를 Child.prototype에 연결하는 역할을 합니다. 즉 Parent 객체의 프로토타입을 Child 객체의 프로토타입이 참조하게 합니다.

Child.prototype.canWalk = function () {
    console.log('now i can walk!!');
}

const child = new Child();

// 위의 두 가지 과정을 통해 Child 객체는 Parent 객체의 모든 것을 상속받게 됩니다.
// 사용자 지정 타입에 한해서 이런 식으로 만들어 볼수도 있다. (깊게 보진 말자.)