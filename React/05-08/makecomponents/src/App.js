// 컴포넌트 두개 있었는데, 컴포넌트 폴더를 만들어서 파일로 분리한다.
import Hello from "./Components/Hello";
import Time from "./Components/Time";
import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";

// 컴포넌트화 <Licat/>, <Time/> 등 그리고 App() 도 하나의 컴포넌트
// 컴포넌트의 이름을 지을 때는 첫 글자를 대문자로 작성해야 컴포넌트로 해석됨
// 이처럼 컴포넌트를 만드는 것이 사용자 정의 태그로 만드는 것이다

function HelloProps(props) {
  console.log(props);
  // props는 객체형태로 밑에 프로퍼티들을 저장되어 있음
  return (
    <div>
      <p>
        my name is {props.name} and age is {props.age}
      </p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  );
}

function App() {
  return (
    <>
      <Hello name="Gary" />
      <Time />
      <HelloProps
        name="jaehyun"
        age={25}
        someFunc={() => "awesome!!!"}
        someJSX={<img src="https://picsum.photos/id/237/200/300" />}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }}
      />
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" />
    </>
  );
}

export default App;
