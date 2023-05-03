const article = document.querySelector('.popup');
const openBtn = document.querySelector('.btn-open');
const closeBtn = article.querySelector('.btn-close');

const dim = document.querySelector(".dim");

// a가 많을 때 제일 첫번째거 찾음
// 첫번째 포커스 요소
const firstEl = article.querySelector('a');
const nodeAll = article.querySelectorAll('a');
console.log(nodeAll[2])

function openPopup() {
    article.classList.add('active');
    firstEl.focus();
}

function closePopup() {
    article.classList.remove('active');
}

openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
closeBtn.addEventListener('keydown', function (e) {
    // tab만 눌렀을 때 (Shift+tab일땐 실행되지 않음)
    if (!e.shiftKey && e.key === 'Tab') {
        // console.log(firstEl);
        e.preventDefault()
        firstEl.focus();
    }
});

firstEl.addEventListener('keydown', function (e) {
    // Shift+tab 같이 눌렀을 때 실행
    if (e.shiftKey && e.key === 'Tab') {
        e.preventDefault()
        closeBtn.focus();
    }
})

dim.addEventListener('click', closePopup);