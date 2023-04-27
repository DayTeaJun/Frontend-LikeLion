import ColaGenerator from "./classes/colaGenerator.js";
import VendingMachineEvents from "./classes/vendingMachineEvent.js";
// 다른 js에서 모듈을 받아옴 (from 하고 뒤 경로에 js를 붙여줘야 함(자동완성 다 안됨))

const colaGenerator = new ColaGenerator();
const vendingMachineEvent = new VendingMachineEvents();

// 탑레벨 await : 최상위 모듈에서 실행되는 await
// 탑레벨 모듈이면 동기함수처럼 실행됨()
// 최상위라서 async없어도 실행됨.
await colaGenerator.setup();
// 데이터를 가지고있는 애들이 btn-cola 얘네였네요
// 다른애들은 데이터 처리가 안돼도 상관없는 애들이었고

// 즉시 실행 함수로 await 사용
// (async function () {
//     await colaGenerator.setup();
//     vendingMachineEvents.bindEvent();
// })()

vendingMachineEvent.bindEvent();


// 잘 가져왔는지 확인할려면 크롬 개발자모드에서 network 탭을 확인