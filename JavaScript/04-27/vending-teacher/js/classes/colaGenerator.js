// 콜라만 생성하는 JS
class ColaGenerator {
    // class 실행시 자동으로 만든 것(constructor)을 초기화시켜 설정함
    // 자식들이 생기면 자식들이 다 생기게 공유해주는 것
    constructor() {
        // this는 인스턴스를 가르킴. (콜라제네레이터를 가르키지만 생성자를 만들면 생성된 인스턴스를 가르킴)
        // 아래 this는 생성된거임
        this.itemList = document.querySelector('.section1 .cola-list');
    }

    async setup() {
        // loadData가 완료될때까지 기다린 후 response에 넣음
        const response = await this.loadData(); // fetch로 서버 응답을 받고
        this.colaFactory(response); // 응답으로 받은 데이터를 이용해서 DOM함
    }

    // 콜라 데이터가 담긴 JSON 파일을 불러옴
    // await 사용할 경우 함수에도 async 적음
    async loadData() {

        // 시도
        try {
            // fetch로 서버를 불러오는 것을 다 할 때까지 기다려!(await)
            // fetch는 promise 객체를 반환하고
            // promise 서버 연결이 잘 되면 resolve가 자동적으로 실행이 되고, resolve가 실행이 되면 그 콜백함수에 반환하는 그 안의 인자가 response임
            // 근데 위의 과정은 fetch를 실행할 때 다 실행하고
            // await로 위의 fetch의 순서를 다 기다려서 실행하자 => 그래서 promise resolve(then) response 는 생략해도 된다.(await하는 동안 다 실행되기 때문)
            const response = await fetch('./items.json');

            // ok 쓰면 서버로부터 응답이 잘 왔다는 의미
            if (response.ok) { // 서버의 응답 코드가 200 ~ 299 일 경우를 의미
                return response.json(); // 받아온 json을 js 객체로 바꿔줌
                // loadData() 실행하면 json으로 반환하여 밖으로 반환하는 코드가 됨
            } else {
                throw new Error(response.status) // response 객체 안에는 서버 응답에 대한 상태가 저장되어 있음
                // error가 무엇인지 서버 응답 코드를 줌
                // throw를 주면 catch에 전달
            }
        } catch (error) { // 실패 시
            console.log(error);
        }
        // promise로 사용하면 then catch를 사용하지만 fetch를 사용하면 try catch로 간략하게 만듦.
    }

    // data에 loadData를 받아옴
    colaFactory(data) {

        // 가상 돔을 만듦
        const docFrag = document.createDocumentFragment();

        data.forEach((el) => {
            const item = document.createElement('li');
            // data-item , data-price .. 를 해준 이유 data를 밖으로 빼내기 위해 data속성을 줌(data에 직접 접근해서 가져오기 위해)
            const itemTemplate = `
            <button class="btn-cola" type="button" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img class="cola-img" src="./img/${el.img}" alt="">
                <span class="cola-name">${el.name}</span>
                <strong class="cola-price">${el.cost}원</strong>
            </button>
            `;

            item.innerHTML = itemTemplate;
            // 스코프 밖에서 하면 li 한개에 itemTemplate 여러개가 들어간다.
            // 근데 어처피 const는 블록레벨 스코프라서 밖에서 접근 안됨

            docFrag.append(item);
        })
        // 굳이 여러번 넣어서 메모리 일 시키지말고 가상돔에 한번에 만들어서 넣기
        this.itemList.append(docFrag);
    }
}

export default ColaGenerator; // 밖으로 수출 될 준비 완료 (default는 하나만 수출할 경우 적음)