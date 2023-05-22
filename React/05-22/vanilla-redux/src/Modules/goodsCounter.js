// reducer 파일안에 action값을 설정하는 코드를 같이 넣어주면
// 관리가 편하기 때문에 보통 이렇게 한다고 함.

export const addNumber = () => {
  return { type: "ADD" };
};

export const substractNumber = () => {
  return { type: "SUBSTRACT" };
};

// reducer 초기값
const initialState = {
  stock: 100,
  goods: 0,
};

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        //상품의 재고 -1
        stock: state.stock - 1,
        // 사용자가 선택한 물건 +1
        goods: state.goods + 1,
      };
    case "SUBSTRACT":
      return {
        ...state,
        stock: state.stock + 1,
        goods: state.goods - 1,
      };
    default: {
      return state;
    }
  }
};

export default goodsReducer;
