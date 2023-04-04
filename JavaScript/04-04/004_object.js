// object 객체는 키-값 쌍으로 이루어져 있다

const human = {
    name: "Jun",
    age: 53,
    from: "korean",
    askingHim: function(){
        console.log("hello world!");
    },
    0: '01050442903'
};

console.log(human.name) // Jun
console.log(human.age) // 53
console.log(human['name']) //Jun
console.log(human['age']) // 53
// human.0 error // 그래서 arr.1 안되는 것
human['0']
// '01050442903'
human[0]
// '01050442903'

// 유사배열객체는 실무에서 사용하지 않기 때문에 잊어도 됨
const arr = {
    0: 10,
    1: 20,
    2: 30,
    length: 3
}; 

arr[0]
// 10
arr[1]
// 20
arr[2]
// 30
arr.length
// 3
// 배열이 아니다. 유사배열객체라고 함
// 똑같은 요소로 만들어도 arr가 순회할 때 더 빠르다.

const human2 = {
    name: "Jun",
    age: 53,
    from: "korean",
    askingHim: function(){
        console.log("hello world!");
    },
};

human2.name = 'Zun'
human2.name // 'Zun'
human2.askingHim()
delete human2.job

// 다른 언어와 동작방식이 다르니 주의
console.log('age' in human2) // human2안에 age가 있나
// console.log(20 in [10, 20 ,30 ,40]);
// 이때 false인데 in 연산자는 key만(0,1,2,3) 순회함
// console.log('length' in [10, 20, 30, 40]); 만 씀

const aespa = {
    members: ['카리나', '윈터', '지젤', '닝닝'],
    from: '광야',
    sing: function(){
        return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
    }
};

// (**)
console.log(aespa.hasOwnProperty('itzy')); // false 프로퍼티가 있는지 물어봄
console.log(aespa.hasOwnProperty('from')); // true

// (***)
// 다른 언어는 aespa.keys()와 같은 방식으로 사용
console.log(Object.keys(aespa)) // asepa의 키를 가져옴 불편한 코드(Object함수를 써야 하기 때문)
console.log(Object.values(aespa)) // asepa의 값을 가져옴 불편한 코드