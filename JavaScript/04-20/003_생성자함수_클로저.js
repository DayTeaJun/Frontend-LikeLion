// 비공개 프로퍼티를 생성자함수로 만들려면 클로저 이용
// 방법 1
function PersonGenrator() {
    let age = 25; // 이거 숨길꺼임

    // 클로저 특징 함수를 return함
    function innerPersonType() { }; // 생성자 함수 대신 innerPersonType을 생성자 함수로 연결시킴

    // innerPersonType으로 만든 인스턴스가 프로토타입에 getAge라는 메서드를 등록
    innerPersonType.prototype.getAge = function () {
        return age
    }

    // 클로저의 마지막은 안에서 만든 함수를 return으로 빼줘야 함
    return innerPersonType; // 생성자 함수 대신 이것을 리턴함
}

// 이렇게 생성자 함수를 만들면 프로퍼티를 접근할 수 없다.
const Person = new PersonGenrator() // 이때 생성자 함수로 연결 된 것은 innerPersonType()

person.age // undefined

const myPerson = new Person(); // 클로저 패턴을 통해 접근한다.
// myPerson 인스턴스는 innerPersonType 생성자 함수의 프로토타입 객체를 상속받으며, getAge 메서드를 호출할 수 있습니다. getAge() 메서드는 PersonGenrator 함수의 지역 변수인 age 값을 반환합니다. 따라서 myPerson.getAge()를 호출하면 25가 반환됩니다.

// 위 클로저 형식은 getAge로만 age에 접근할 수 있다.
myPerson.getAge() // 25


// 방법 2 즉시실행 함수
const PersonGenrator2 = (function () {
    let age = 25;

    function innerPersonType() { };

    innerPersonType.prototype.getAge = function () {
        return age
    }

    return innerPersonType;
})

// 위에 2번 담아서 실행하는 것보다 즉시실행 함수로 한번만에 실행시키게 함
const myPerson2 = new PersonGenrator2()

// 결론 클로저의 장점 : 비공개 프로퍼티를 만들수 있음