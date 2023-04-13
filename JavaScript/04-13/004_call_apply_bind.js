// apply, call, bind

// call : 안에서 사용한 this의 값을 변경시키고 싶을때
var peter = {
    name: 'Peter Parker',
    sayName: function () {
        console.log(this.name);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName()
peter.sayName.call(bruce); // 내가 피터파커 이름을 부르는데 부르스를 잡아


////
var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사) {
        console.log(this.name + 감탄사);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce, '!'); // Bruce Wayne!
peter.sayName('!') // Peter Parker!
peter.sayName() // Peter Parkerundefined

// apply (기본적인 역할은 call과 비슷하나 Array가 들어감)
var peter = {
    name: 'Peter Parker',
    sayName: function (is, is2) {
        console.log(this.name + ' is ' + is + ' or ' + is2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']);

// call과 apply 비교
// 비교1
var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사1, 감탄사2) {
        console.log(this.name + 감탄사1 + 감탄사2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce, '!', '!!');

// 비교2
var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사1, 감탄사2) {
        console.log(this.name + 감탄사1 + 감탄사2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce, ['!', '!!']);


//bind
function sayName() {
    console.log(this.name);
}

var bruce = {
    name: 'bruce',
    sayName: sayName
}

var peter = {
    name: 'peter',
    sayName: sayName.bind(bruce)
}

peter.sayName();
bruce.sayName();