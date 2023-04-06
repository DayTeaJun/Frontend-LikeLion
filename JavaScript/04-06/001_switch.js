const value = 'two'

switch (value) {
    case 'one':
        console.log('hello one')
        break; // break값 넣어야함
    case 'two':
        console.log('hello two')
        break;
    case 'three':
        console.log('hello three')
        break;
    default: // 아무것도 없는 값 디폴트
        console.log('hello default')
        break;
}

const value2 = 'four' // 밑에 케이스 값 중 four가 없으므로 default 값 나옴

switch (value2) {
    case 'one':
        console.log('hello one')
        break;
    case 'two':
        console.log('hello two')
        break;
    case 'three':
        console.log('hello three')
        break;
    default: // 아무것도 없는 값 디폴트
        console.log('hello default')
        break;
}

const value3 = 'two'

switch (value3) {
    case 'one':
        console.log('hello one')

    case 'two':
        console.log('hello two')

    case 'three':
        console.log('hello three')

    default:
        console.log('hello default')

}
// one이 아니기 때문에 two부터 실행되고 break가 없으므로 다 실행됨

///

switch (new Date().getDay()) {
    case 0:
        console.log('일요일')
        break;
    case 1:
        console.log('월요일')
        break;
    case 2:
        console.log('화요일')
        break;
    case 3:
        console.log('수요일')
        break;
    case 4:
        console.log('목요일')
        break;
    case 5:
        console.log('금요일')
        break;
    case 6:
        console.log('토요일')
        break;

    // default는 견고한 코드를 위해 써주는게 좋다.
}

// 여러줄 복사하고 싶을 때에 
// window : Alt + Shift + 위아래
// mac : option키와 shift키 누르고 방향키

// 같은 단어 찾고 싶을 때 
// window : Ctrl + D
// mac : cmd + D

// 같은 모든 단어 
// window : Ctrl + Shift + l 입니다.
// mac : cmd + Shift + l 입니다.

// 자동정렬
// window : Ctrl + a, Ctrl k + Ctrl + f(Ctrl누른 상태여야 합니다.)
// mac : cmd + a, cmd k + f

// 전체 줄 선택
// window : 컨트롤 L 커서 있는 줄 전체선택
// mac : shift + cmd + left, cmd + opt + l // 안되는 분도 있으십니다.

// 되돌리는 단축키(되돌리기, 되돌리기에 되돌아가기)
// window : Ctrl + z, Ctrl + y(Ctrl + Shift + z)
// mac : cmd + z, cmd shift z

// 잘라내기
// 한 줄 잘라내기  ctrl + x / 한 줄 삭제: ctrl + shift + k

switch (value3) {
    case 'one':
        console.log('hello one')
    case 'two':
        console.log('hello two')
    case 'three':
        console.log('hello three')
    default:
        console.log('hello default')
}

// 다른 언어에서 switch문 어떻게 사용할까요?
// python은 switch문 없는데? JavaScript에서는 아래 문법 대신 switch문 사용함

const 요일 = new Date().getDay()
const 요일객체 = {
    0: '일요일',
    1: '월요일',
    2: '화요일',
    3: '수요일',
    4: '목요일',
    5: '금요일',
    6: '토요일',
}

console.log(요일객체[요일])
// default는 어떻게 처리?

const 요일2 = 10
const 요일객체2 = {
    0: '일요일',
    1: '월요일',
    2: '화요일',
    3: '수요일',
    4: '목요일',
    5: '금요일',
    6: '토요일',
}


// 널리쉬 연산자 사용
console.log(요일객체2[요일2] ?? 'hello') // 요일객체2[요일2]가 undefined이기 때문에 false
// 단락평가 사용
console.log(요일객체2[요일2] || 'hello') // 요일객체2[요일2]가 undefined이기 때문에 false
// 앞이 false라도 뒤가 true 실행 (컴퓨터입장에서는 앞값이 false라면 뒤에 값까지 봄) 
console.log(undefined || 'hello')