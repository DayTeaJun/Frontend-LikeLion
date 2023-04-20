// 명세서
// 간단한 투두 리스트기능 구현해보기
// 1. 해야할 일 Todo 클래스(내용, 상태 두 가지 프로퍼티를 가집니다.)

// 2. Todo 클래스는 상태를 변경하는 changeState 메서드를 가집니다.

// 3. 할일의 목록을 관리하는 관리자를 추상화한 TodoManager 클래스(할일 목록을 프로퍼티로 가집니다.)

// 4. 할 일을 저장하고(addItem), 할 일의 목록을 보여주며(getItems), 할 일의 남은 갯수를 반환하는(getLeftTodoCount) 세 가지 메소드를 가집니다.

// todoclass 에 해야할 내용, 끝냈는지의 상태(boolean)

// 메소드 필요함 change메소드 (자기자신의 상태를 변경시켜주는 거 해야할일을 끝냈는지 안끝냈는지 확인하는 메소드)

// todomanage 클래스는 메소드 3가지 (할일저장, 할일의 목록 보여주는 기능, 남은 일의 갯수를 반환(아직 못끝낸 일의 개수가 몇개인지))

// 내가 만든거
class Todo {
    constructor(content, status) {
        this.content = content;
        this.status = status;
    }

    changeState() {
        this.status = !this.status;
    }
}

const myTodo = new Todo('밥먹기', true)

class TodoManager extends Todo {

    addItem() {

    }

    getItem() {
        return Todo[]
    }

    getLeftTodoCount() {

    }
}

// 강사님
class Todo {
    // 1. 할것 객체
    constructor(item, finishied) {
        this.item = item;
        this.finishied = finishied;
    } // 프로퍼티 끝

    changeState() {
        this.finishied = !this.finishied
    }
}

class TodoManager { // 위의 Todo를 TodoManager로 만듦
    constructor() {
        this.todoList = [];
    }

    addItem(item, finishied = false) { // 매개변수를 미리 할당해 초기값을 만듦 
        const todo = new Todo(item, finishied); // addItem 을 실행하면 자동으로 todo에 Todo()함수를 저장함
        this.todoList.push(todo) // 저장한 내용을 todoList에 추가함
    }

    getItems() {
        return this.todoList; // todoList에 있는 내용을 보여줌
    }

    getLeftTodoCount() {
        // reduce안에는 reducer라는 콜백함수가 있음
        // return this.todoList.reduce((total, current) => { // current(현재벨류)가 접근하려는 배열의 인덱스를 다 순회할 때 까지 계속 반복함
        // if (current.finishied === false) {
        //     return ++total;
        // } else {
        //     return total;
        // }

        // 삼항연산자
        //     current.finishied === false ? ++total : total;
        // }, 0)

        // filter 안의 조건을 통과한 것들을 모아서 배열로 만들어줌
        return this.todoList.filter((item) => item.finishied === false).length;
    }
}

const manager = new TodoManager()

manager.getItems()[0].changeState() // 