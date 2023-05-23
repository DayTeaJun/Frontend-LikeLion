// @testing-library 라이브러리는 테스트하는데 도움을 줄뿐 테스트하지 않음
// jest가 테스트를 하는 라이브러리이므로
// 위의 두 라이브러리는 다른 라이브러리이다.
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("버튼이 제대로 동작하고 있나요?", () => {
  // 가상으로 render를 하고
  render(<App />);

  // 위에 만든 가상돔인 App에 접근함
  const button = screen.getByRole("button", { name: "change to blue" });

  // button의 스타일이 background가 red을 가져야한다고 예상한다.
  expect(button).toHaveStyle({ backgroundColor: "red" });

  // React Testing Library에서 제공하는 fireEvent를 사용하면 쉽게 유저 이벤트를 발생시킬 수 있습니다.
  // button click시 발생하는 이벤트
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
  // toBe는 앞의 expect의 값과 toBe의 값이 같아야한다
  expect(button.textContent).toBe("change to red");
});

// test라는 함수로 시작함. 재스민의 describe랑 같음
// test("renders learn react link", () => {
//   render(<App />);

//   // Screen : 생성된 가상돔에 접근하기 위한 전역 객체입니다.
//   // getByText : 인자로 전달된 텍스트를 가지는 돔 안의 요소를 찾습니다. 여기서는 정규표현식을 사용했군요. /learn react/i 뒤에 붙은 i는 대소문자를 구분하지 않겠다는 의미입니다.
//   const linkElement = screen.getByText(/learn react/i);
//   // .toBeInTheDocument : matcher 함수입니다. 제스민의 .toBe() 함수가 기억나시나요? 제스트에도 존재합니다.
//   toBeIntheDocument 문서안에 있냐
//   expect(linkElement).toBeInTheDocument();
// });
