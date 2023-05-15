import { useState, useEffect } from "react";

function Counter() {
  // useState가 계속 0으로 만들어주는데 초기화가 안되고 왜 계속 이어질까? => React가 해준 것
  const [count, setCount] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const handleCountUp = (e) => {
    setCount(count + 1);
  };
  // count가 변했을때 동작할 행동을 useEffect(리액트에서 효과를 일으켜주는 애)를 이용해 구현
  // state(count)가 바뀔 때마다 아래 함수를 실행
  useEffect(() => {
    if (isFirstRender) {
      console.log("난 처음 렌더링되었는지 확인하고 있지. 첫번째");
      setIsFirstRender(false);
    } else {
      console.log("난 처음 렌더링되었는지 확인하고 있지. 근데 이건 두번째");
      if (count % 2) {
        alert("홀수입니다");
        console.log(count);
      } else {
        alert("짝수입니다");
        console.log(count);
      }
    }

    // count가 바뀌기 직전에 실행되는 부분 -> clean-up
    // 이전 코드가 실행되고 실행됨.
    return () => {
      alert("카운트가 바뀌었습니다.");
      console.log("카운트가 바뀌었습니다.");
    };

    // [count] = 의존성배열(디펜던시)
    // [] 가 있는 이유는 더 추가 될 수 있음, props를 받거나 등
    /*state값이 들어갑니다.(들어가지 않으면 최초 1번만 실행됩니다.*/
  }, [count]); // 의존안하고 있어서 노란줄 지금은(isFirstRender)
  // 자, 여기서 한 번 페이지를 새로고침 해봅시다. 그러면 클릭하지 않았는데도 "짝수입니다!"라는 메시지가 나옵니다. 이유는 useState(0)에서 count값을 0으로 초기화하면서 count의 값이 변하기 때문입니다.

  // // 컴포넌트가 업데이트 될 때마다 매번 실행
  // // 의존을 아예 안함.
  // useEffect(()=>{
  // 	console.log('hello world');
  // })

  // // 처음에만 실행 (의존을 하는데 감지할 상태가 없기 때문에 한번만 함)
  // useEffect(()=>{
  // 	console.log('hello world');
  // }, [])

  // // 변수들의 변화가 일어날 때마다 실행
  // useEffect(()=>{
  // 	console.log('hello world');
  // }, [변수1, 변수2...])

  return (
    <>
      <div>{count}</div>
      {/* 순서 : 상태가 변경되고 cleanup 실행 -> useEffect내 코드실행 */}
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}
export default Counter;
