const aespa = ["카리나", "윈터", "지젤", "닝닝"];
aespa.forEach((item, index) => {
    aespa[index] = item + '💖';
})
console.log(aespa);
// 결과 : ['카리나💖', '윈터💖', '지젤💖', '닝닝💖']
// 원본 데이터를 수정하게 됨, 이런 방법은 지양한다.

const aespa2 = aespa.map(e => e + '💖');
// 결과 : ['카리나💖', '윈터💖', '지젤💖', '닝닝💖']
// 원본 데이터는 놔두고, 새로운 배열을 만듦