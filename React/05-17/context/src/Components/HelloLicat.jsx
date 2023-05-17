import React from "react";
import { UserInfo } from "../AppConsumer";


const HelloLicat = () => {
    return (
        <UserInfo.Consumer >
            {(value) => {
                return <div>
                    <h2>{value.id}</h2>
                    <strong>{value.name}</strong>
                </div>
            }}
        </UserInfo.Consumer>
    );
};

export default HelloLicat()