import { createContext } from "react"

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
    return (
        <HelloLicat />
    );
};

const HelloLicat = () => {

    return (
        // 값을 전달해줄 컴포넌트에 Context.Consumer 형식으로 감싸주고 UserInfo(context) 안에 있는 것을 Consumer라는 컴포넌트를 통해 value 값을 가져옵니다.
        <UserInfo.Consumer>
            {/* value값은 컨텍스트에 있는 데이터값 */}
            {/* Consumer은 자식으로 태그를 가질 수 없다. */}
            {(value) => {
                return <div>
                    <h2>{value.id}</h2>
                    <strong>{value.name}</strong>
                    <HelloLicatTwo />
                </div>
            }}
        </UserInfo.Consumer>
    );
};

const HelloLicatTwo = () => {
    return (
        // Consumer은 소비자 라는 느낌으로 UserInfo의 내용을 소비한다.
        <UserInfo.Consumer>
            {(value) => {
                return <div>
                    <h2>Two : {value.id}</h2>
                    <strong>Two : {value.name}</strong>
                </div>
            }}
        </UserInfo.Consumer>
    );
};

export default App;