import React from "react";
import { UserInfo } from "../AppConsumer";
import HelloLicatTwo from "./HelloLicatTwo";


const HelloLicat = () => {
    return (
        <>
            <UserInfo.Consumer >
                {(value) => {
                    return (
                        <div>
                            <h2>{value.id}</h2>
                            <strong>{value.name}</strong>
                        </div>
                    )
                }}
            </UserInfo.Consumer>
            <UserInfo.Provider value={{
                name: "gary", id: "garyIsFree"
            }}>
                <HelloLicatTwo />
            </UserInfo.Provider>
        </>
    );
};

export default HelloLicat