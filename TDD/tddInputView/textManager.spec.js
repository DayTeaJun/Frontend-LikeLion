// 제스민 테스트 사용시 첫번 째 함수
describe("텍스트 관리지 테스트입니다.", () => {
  // 아래 값을 가져올려면 인스턴스가 필요함 (원래 코드에서 인스턴스가 필요했음)
  const textManager = new TextManager();

  it("텍스트 값을 가져옵니다.", () => {
    // 값을 가져오는지 확인
    const initValue = textManager.getValue();
    // 위 코드가 제대로 작동하는지 예상하고, 확인함
    expect(textManager.getValue()).toBe(initValue);
  });

  it("텍스트 값을 변경합니다.", () => {
    const newValue = { data: "hello zebras" };
    textManager.setValue(newValue);

    expect(textManager.getValue()).toBe(newValue.data);
  });
});
