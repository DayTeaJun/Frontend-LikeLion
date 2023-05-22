import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, substractNumber } from "../Modules/goodsCounter";

export default function GoodsCounter() {
  // store에 있는 상태 state 값을 가져옴
  const { stock, goods } = useSelector((state) => {
    return {
      stock: state.goodsReducer.stock,
      goods: state.goodsReducer.goods,
    };
  });

  // React는 dispatch 사용할려면 useDispatch 사용
  const dispatch = useDispatch();

  // dispatch(action)
  const onAddNumber = () => dispatch(addNumber());
  const onSubstractNumber = () => dispatch(substractNumber());

  return (
    <div>
      <h2>딥러닝 개발자 무릎 담요</h2>
      <span>
        <strong>17,500</strong>원
      </span>
      <div>
        <button type="button" onClick={onSubstractNumber}>
          MINUS
        </button>
        <span>{goods}</span>
        <button onClick={onAddNumber}>PLUS</button>
      </div>
      <div>
        총 수량 <strong>{goods}</strong>
      </div>
      <div>
        <strong>{goods * 17500}</strong>원
      </div>
      <div>
        재고 <strong>{stock}</strong>
      </div>
    </div>
  );
}
