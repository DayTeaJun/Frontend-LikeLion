import React from "react";
import MenuListItem from "../MenuListItem/MenuListItem";
import "./MenuList.css";

// App.js에서 currentMood랑 setCurrentMood를 받음 (props로)
export default function MenuList(props) {
  const menus = ["좋아요!", "정말 좋아요!", "최고에요!", "미쳤어요!!"];

  return (
    <ul className="container-list">
      {menus.map((moodEl) => {
        // mood : 기분의 텍스트, isSelected : 현재 사용자의 기분이 맞는지 전달 (props.mood(현재의 기분 상태(App.js)) === moodEl(선택한 기분 상태(MenuList)))
        // , props.onItemClick : 현재 기분을 변경하는 함수
        return (
          <MenuListItem
            mood={moodEl}
            isSelected={props.mood === moodEl}
            onClickEvt={props.onItemClick}
          />
        );
      })}
    </ul>
  );
}
