// 기능이 뭐가있어야할까..

// 1.입력할 수 있어야함. 통과

// 2.입력한걸 저장해야함
// 2.1 입력한 값을 우리가 가져와야하죠.
// 2.1.1 버튼눌렀을때!
// 2.1.2 메모제목이랑 메모내용을 가져와서 한번에 저장해야!
// 2.2 입력한 값 가져온걸 저장할거임.
// 2.3 저장했을때 입력한곳 초기화해야함.

// 3.저장된거 불러와야함
// 3.1 화면에 보여주기 ㅋ
// 3.2 메모들을 가져와함
// 3.3 메모내용으로 li요소를 만들었음
// 3.4 li요소에는 strong과 p태그로 각각 title이랑 content를 넣어줌
// 3.5 가져온 메모들을 화면에 뿌려주자


// 4.삭제해야함

// 5.수정해야함

function getMemoTitle() {
    const memoTitle = document.querySelector("#memotitle").value;
    return memoTitle
}
function getMemoContent() {
    const memoContent = document.querySelector("#memo").value;
    return memoContent
}


function resetInput() {
    document.querySelector("#memotitle").value = "";
    document.querySelector("#memo").value = "";
}


function createMemo() {
    const title = getMemoTitle();
    const content = getMemoContent();

    const memoObj = {
        title: title,
        content: content
    }

    return memoObj
}

const memolists = []

function saveMemo(memo) {
    memolists.push(memo)
}

function createMemoLi(memo) {
    // 요소 만들기
    // memo를 저장할 li요소만들기
    const $memoLi = document.createElement("li");
    // title을 넣어줄 strong
    const $title = document.createElement("strong");
    // content를 넣어줄 p
    const $content = document.createElement("p");
    // title요소(strong)에 실제 메모의 제목 텍스트를 넣어준다
    $title.innerHTML = memo.title;
    // content요소(p)에 실제 메모의 내용 텍스트를 넣어준다.
    $content.innerHTML = memo.content;
    // title요소와 content요소를 li안에 넣어준다.
    $memoLi.append($title, $content);
    // 그리고 완성된 memoli를 함수호출한 곳에 돌려준다.
    return $memoLi
}

function showMemo() {
    // li요소 "들"
    const $memoLists = memolists.map(createMemoLi);
    const $memoUl = document.querySelector(".memolists");
    // 내용을 채워넣기전에 청소하기.
    $memoUl.innerHTML = ""
    // 메모들을 전부 li요소로 만들었는데
    // 이걸 memoUL에 뿌려준다.
    $memoUl.append(...$memoLists);
}

function showMemo() {
    // const $memoLists = []
    // for (let index = 0; index < memolists.length; index++) {
    //     // const memoObj = {
    //     //     title: title,
    //     //     content: content
    //     // }
    //     // 이렇게 생긴 메모 하나 가져오기
    //     const memo = memolists[index];

    //     const $memoLi = document.createElement("li");
    //     const $title = document.createElement("strong");
    //     const $content = document.createElement("p");

    //     $title.innerHTML = memo.title;
    //     $content.innerHTML = memo.content;
    //     $memoLi.append($title, $content);

    //     $memoLists.push($memoLi);
    // }

    const $memoList = memolists.map(createMemoLi);
    // 위와 같음

    console.log($memoLists);
}


function buttonOnclickHandler() {
    const memo = createMemo();
    saveMemo(memo)
    showMemo()
    resetInput()
}

const $memoButton = document.querySelector("#memosubmit");
$memoButton.onclick = buttonOnclickHandler;