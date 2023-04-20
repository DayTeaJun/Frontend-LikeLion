// 최적화 (Optimization)
//Make it work, Make it right, Make it fast

//- Kent Beck -

// 본 내용은 https://likelion.notion.site/17-Optimization-49c181d86dff4dfd83df99d9e3a597fd#5b9aaffbed4e4ecab4af2d55abe935dd 사이트에서 더 추가해볼만한 코멘트를 남긴다. 이 문서를 참고할거면 위 링크를 같이 봐야함

// 최적화된 폰트를 사용합니다. 사용하려는 폰트의 용량을 체크해보고 가능한 최신 포맷의 폰트(참고)를 사용합니다. (https://caniuse.com/?search=woff)

// 폰트 포멧 종류 :
// https://paullabworkspace.notion.site/8-CSS-declarations-5b71dd1a23be48c0898178cb7d5816dd#721f358198a748b39c3b59c20844fbfa

// WOFF(Web Open Font Format) : 모질라재단, 마이크로소프트, 오페라 등 여러 회사들의 협업으로 제안된 포맷이며 덕분에 가장 널리 사용되고 있습니다. 태생적으로 웹 환경을 위해 개발되었기 때문에 용량도 적은 웹 글꼴 포맷입니다.

// 폰트의 사용빈도가 제한적이라면 이미지 폰트를 사용합니다. 단순히 몇 글자 안되는 것을 꾸미고 싶을 때는 폰트포멧을 사용한다면 용량을 잡아 먹으므로 이미지 폰트를 사용한다.

// 2. 최소화한(minify) CSS, JS 파일 사용하여 파일의 용량을 줄입니다. ([참고](https://jquery.com/download/))
//- vscode의 JS & CSS Minifier 설치해봅시다.
// minify 사용법
// 설치한 후, 그 파일에 들어가서 F1, minify 입력하면 미니파일 생성해줌

// 중요하지 않은 컨텐츠라면 레이지 로딩을 고려해볼 필요가 있습니다
// lazy: 이미지가 뷰포트의 일정 거리 안으로 들어와야 불러옵니다. 거리는 브라우저가 정의합니다. 이미지를 보게 될 것으로 충분히 예상 가능한 상황에만 불러옴으로써, 불필요하게 네트워크와 저장소 대역폭을 낭비하지 않을 수 있습니다. 또한 일반적인 사용처에서는 대개 성능을 향상할 수 있습니다.

// 지속적인 구동시간 측정하기. (크롬 네트워크 탭, 참고(https://pagespeed.web.dev/analysis/https-www-naver-com/2md64k9tsk?form_factor=mobile))
// 구글에서 6가지 항목을 체크해서 평가함.
// 내가 만든 포트폴리오를 체크해서
// 이력서에 내가 넣을 내용을 적기
// 위의 사이트에 넣어서 성능이 낮은 것을 어떻게 개선했느냐로 적기
// 코어 웹 바이탈 평가의 6항목 자체 이미지를 넣기에도 좋음
// 이력서 쓸 때 참고하자.