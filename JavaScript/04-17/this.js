// this의 특징
// - 함수가 만들어질 때가 아닌 '실행'될 때 그 값이 결정됨

// 기존 수업 코드
function attackBeam() { // 레이저 공격
    this.hp -= 20    // danaged1을 호출하면 좀비를 가리킴
    // // {name: 'jombi', hp: 9980, power: 2, damaged1: ƒ, damaged2: ƒ}
    // damaged1: ƒ attackBeam()
    // damaged2: ƒ attackKnife()
    // hp: 9975
    // name: "jombi"
    // power: 2
    // [[Prototype]] : Object
}

function attackKnife() { // 칼공격
    this.hp -= 5 // 타노스가 damaged를 호출하면 타노스를 가리킴
    // 즉, 호출되는 곳에 따라 다른 값을 가리키는 것 
    //     { name: 'jombi', hp: 9975, power: 2, damaged1: ƒ, damaged2: ƒ }
    //     damaged1: ƒ attackBeam()
    //     damaged2: ƒ attackKnife()
    //     hp: 9975
    //     name: "jombi"
    //     power: 2
    //     [[Prototype]]: Object
    // 
}

function attackall() {
    this.hp -= 25
}

let jombi = {
    name: 'jombi', // 좀비라고 선언하는 것
    damaged1: attackBeam, // 레이저 공격은 damaged1로 호출
    damaged2: attackKnife, // 칼공격은 damaged2로 호출
    damaged3: attackall,
    hp: 10000, // 좀비의 체력
    power: 2 // 다른 게임을 만들게 되면 사용될 수 있는 변수 예시
}

let thanos = {
    name: 'thanos', // 타노스라고 선언하는 것
    damaged: attackBeam, // 레이저 공격은 damaged로 호출
    hp: 1000, // 타노스의 체력
    power: 100 // 다른 게임을 만들게 되면 사용할 수 있는 변수 예시
}

jombi.damaged1() // Beam - 좀비한테 레이저공격
jombi.damaged2() // Knife - 좀비한테 칼공격
jombi.hp // 좀비의 체력을 출력