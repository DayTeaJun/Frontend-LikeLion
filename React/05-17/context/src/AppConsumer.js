import { createContext } from "react";
import HelloLicat from "./Components/HelloLicat";

const UserInfo = createContext();

function AppConsumer() {
  return (
    // constext.Provider 은 기존 값을 변경할 뿐만 아니라, 자식에게 전달까지 해주는 기능이 있다.
    <UserInfo.Provider value={{
      name: "gary", id: "garyIsFree"
    }}>
      <HelloLicat />
    </UserInfo.Provider>
  )
}

export { UserInfo, AppConsumer }