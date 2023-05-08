import "./TripList.css";

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];
function TripList() {
  let areas = list.map((item, index) => {
    // 각 아이템(불러온 데이터)마다 key라는 프로퍼티가 있어야함  (보통 프론트엔드 개발자는 데이터를 받아와서 뿌리고, 그 데이터안에 no이나 id값을 식별자라 하는데 이걸 key값으로 사용 많이함)
    // html에는 공개되지 않지만 등록됨
    // react가 아이템 값에 key라는 걸 요구하는 이유는 최적화와 관련이 있다. 사용자의 인터랙션을 통해서(spa같은) 화면에 변화가 있을 때 컴포넌트를 렌더링해줘야하는데
    // 싹 바꾸지 않고 비교함(미리 저장(현재 부분과 바뀔 부분)), 비교해서 바뀐 부분만 교체함, 그래서 빠른 성능으로 랜더링 처리함
    // 그래서 리액트가 아이템을 교체할 때 '기존의 존재했던 key'와 '바뀌어야했던 key'를 비교해서 서로 업데이트를 함
    // key를 프로퍼티를 컴포넌트를 생성할 때 계속 달아주면 랜더링을 줄이게 할 수 있음.
    // 개발자가 key를 안넣어줘도 내부적으로 넣어주는 로직(key={index} 자동 생성)이 있지만, 에러(경고)가 뜸(문제 없이 실행되긴 함)
    // key라는 마땅한 식별자가 없다면 key={index}를 임의로 넣어도 됨.
    // 라이브러리로 난수로 만들어서 넣어도 되지만 별로임
    return (
      <li
        key={index}
        className={item.visited ? "list-area-item active" : "list-area-item"}
      >
        {item.area}
      </li>
    );
  });

  return <ul className="list-area">{areas}</ul>;
}

export default TripList;
