// 객체는 ‘행동’과 ‘상태’를 가집니다. 여기서 행동은 메소드, 상태는 프로퍼티 정도로 이해하시면 됩니다.
const me = {
    // 상태 - 프로퍼티 (키 : 벨류)
    name: '웨이드',
    address: '제주도 제주시 인다 1길',
    phoneNum: '010-8001-6536',

    // 행동 - 메소드 (canWalk, teaching)
    canWalk: function () {
        console.log('웨이드가 걷는다.');
    },
    teaching: function (myStudent) {
        myStudent.levelUp();
    }
}

const student = {
    level: 1,
    levelUp: function () {
        this.level++;
    }
}
// 실행할 때마다 level이 1씩 오른다.
me.teaching(student); // 메소드 호출

// 위 코드의 실행 원리 ChatGPT
// me.teaching(student) 코드에서 me 객체의 teaching 메소드가 실행될 때 student 객체가 함수의 매개변수 myStudent로 전달됩니다. 그리고 myStudent 매개변수로 전달된 student 객체의 levelUp 메소드가 호출되어 student 객체의 level 속성 값이 증가하게 됩니다.

// me.teaching()에 levelUp() 메소드가 없는 객체나 다른 데이터 타입을 인자로 전달하면 myStudent.levelUp(); 코드에서 오류가 발생합니다. 


// 내꺼
const jun = {
    name: '정준영',
    address: '부산',

    game: function (sword) {
        sword.gain();
    }
}

const weapon = {
    greatSword: 1,
    gain: function () {
        this.greatSword++
    }
}

jun.game(weapon);

// 동훈님 코드
const Hoonie = {
    name: '후니',
    address: 'classified',
    phoneNum: 'classified',
    encounter: function () {
        console.log('앗! 야생의 후니(이)가 나타났다!');
    },
    canRap: function () {
        console.log('후니(이)가 랩을 한다!');
    },
    coding: function (myMacBook) {
        myMacBook.writeCode();
    },
};

const myMacBook = {
    cpu: 'M1 PRO',
    writeCode: function () {
        console.log('후니(은)는 코딩을 시작했다...');
    },
};

Hoonie.coding(myMacBook)
// myMacBook 객체뿐만 아니라, writeCode 메소드를 가지고 있는 다른 객체를 매개변수로 전달하더라도 Hoonie 객체의 coding 메소드를 사용하여 해당 객체의 writeCode 메소드를 호출할 수 있습니다. 

// 따라서 Hoonie.coding(myMacBook) 코드는 coding 메소드가 writeCode 메소드를 호출하는 것 뿐만 아니라, coding 메소드의 매개변수로 다른 객체를 전달하여 다형성을 구현할 수 있도록 합니다.

// 이처럼 다형성을 활용하면, 동일한 인터페이스를 갖는 다양한 객체를 처리하는 코드를 구현할 수 있습니다. 이는 코드의 유연성을 높이고, 재사용성을 높일 수 있어서 코드의 효율성을 증대시키는 장점이 있습니다.

// 동일한 인터페이스란, 메소드나 속성의 이름이 동일하고, 반환값과 인자도 같은 형식으로 사용되는 것을 말합니다.
// 다시 말해, 다형성을 활용하려면 여러 개의 객체가 있어도 그 객체들이 공통적으로 사용할 수 있는 메소드나 속성이 있어야 합니다. 이를 통해 하나의 인터페이스를 정의하고, 이를 구현한 다양한 객체를 사용할 수 있습니다. 예를 들어, 여러 개의 도형 객체가 있을 때, 이들이 공통적으로 갖는 메소드인 getArea()를 구현하면, 이를 활용하여 다양한 도형 객체들의 면적을 계산할 수 있습니다.

// 미현님 코드
const nor = {
    name: '노르',
    isLikeLionStudent: true,
    project: 1,
    rank: "bronze",

    studying: function () {
        this.project++;
        this.rank = this.project >= 10 ? "grand-master" : "bronze";
        console.log(`현재 진행한 프로젝트: ${this.project} 현재 랭크: ${this.rank}`);
    }
}

nor.studying()