import { createContext } from "react";
import HelloLicat from "./Components/HelloLicat";
import HelloLicatTwo from "./Components/HelloLicatTwo";

const UserInfo = createContext();

function AppConsumer() {
  return (
    <UserInfo.Provider value={{
      name: "gary", id: "garyIsFree"
    }}>
      <HelloLicat />
      <HelloLicatTwo />
    </UserInfo.Provider>

  )
}

export { UserInfo, AppConsumer }