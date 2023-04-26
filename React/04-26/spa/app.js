const container = document.querySelector('#root');

// 환경변수 : API(유료)나 숨겨야하는 내용이 담긴 것은 환경변수로 만듦(전부 대문자로 선언하는 것)
const NEWSLIST_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/$id.json' // json안에 각 객체의 id가 new의 정보를 보는 중요한 키, 각 list에 id를 넣으면 필요한 정보를 가져옴

// 현재 사용자가 보고있는 페이지의 정보와 화면에 보여질 아이템의 갯수를 저장하는 객체
const store = {
    currentPage: 1, // 현재 페이지
    datasPerPage: 10 // 보이는 데이터
}

// 비동기로 주소를 받아와야 하기 때문에 async_await를 사용
async function getData(url) { // 특정한 URL을 전달 받음 (위의 URL 중 하나)
    try {
        const response = await fetch(url); // response에 전달
        if (!response.ok) { // 응답이 잘됬는지 체크. response 에 프로퍼티로 ok가 있음
            throw new Error('네트워크에 문제가 있습니다.');
        }
        return response.json();
    } catch (error) {
        console.log(error); // throw 걸 받아옴
    }

}

// 이것도 비동기로 실행시켜야함 (동기로 실행이 되면 데이터를 받기전에(여기서는 getData(NEWLIST_URL)) 함수가 실행됨)
async function newsFeed() {
    const newsFeed = await getData(NEWSLIST_URL);
    const totalPages = Math.ceil(newsFeed.length / store.datasPerPage) // ceil로 총 페이지 수가 3.n(실수)페이지로 나와도 무조건 올림하여 4페이지로 만듦
    const newsList = [];

    newsList.push('<ul>');

    // i는 현재 페이지(0부터 시작해서 -1)에 페이지에 로드되는 데이터수 값을 곱함. | i < store.currentPage * store.datasPerPage 는 현재페이지에 페이지에 있는 데이터수 만큼 곱함
    for (let i = (store.currentPage - 1) * store.datasPerPage; i < store.currentPage * store.datasPerPage; i++) {
        // i값은 여기서는 불러오는 값의 객체에 대한 인덱스값
        newsList.push(`
            <li>
                <a href="#/detail/${newsFeed[i].id}">${newsFeed[i].title}(${newsFeed[i].comments_count})</a>
            </li>
        `);
        // 라우터로 detail 링크를 눌렀을 때, 그 페이지로 이동하게끔 안내해줌
    }

    newsList.push('</ul>')

    let pageList = '';
    // totalPages의 개수는 우리가 만들어야 할 페이지가 총 몇개인지(30개의 데이터를 1페이지당 10개를 보여주고 싶다면 총 페이지 수(totalPages)는 3페이지 이다.)
    for (let i = 0; i < totalPages; i++) {
        pageList += `<li><a href="#/page/${i + 1}">${i + 1}</a></li>` // 페이지는 1페이지부터기 때문에 +1
    }

    newsList.push(
        `<nav>
            <ul>
                ${pageList}
            </ul>
        </nav>`
    )

    container.innerHTML = newsList.join(''); // join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
}

// 뉴스 디테일 페이지 구성 함수
async function newsDetail() { // location.hash는 href="(이값)"을 가져온다.
    const id = location.hash.substring(9); // n번째 인덱스부터 잘라서 자른 값을 반환함, 이 때는 id만 뽑아올려고 함.
    const newsContent = await getData(CONTENT_URL.replace('$id', id));
    // 원래 내용, 대체할 내용

    container.innerHTML = `
        <h1>${newsContent.title}</h1>
        <div><a href="#/page/${store.currentPage}">목록으로 돌아가기</a></div>
    `;
}

// 라우터 : 화면을 중계하는 함수.
function router() {
    const routePath = location.hash;

    if (routePath === '') {
        newsFeed();
    } // indexOf는 문자열에 #/page/ 이 문자가 있는지 찾고 몇번째에 있는지 확인 
    // 아래의 경우는 0번째부터 있다.
    // 아래의 경우는 include를 사용해도 됨.
    else if (routePath.indexOf('#/page/') >= 0) {
        store.currentPage = parseInt(routePath.substring(7)); // n번째 인덱스부터 잘라서 자른 값을 반환함 이 때는 문자형이니까 숫자형으로 변환
        newsFeed();
    } else {
        newsDetail();
    }
}

// DOM에 hashchange는 url에 해쉬값 다음에 있는 값이 변했을 때 실행하는 이벤트 함수
window.addEventListener('hashchange', router) // 해쉬값 변하면 router 실행

router();
