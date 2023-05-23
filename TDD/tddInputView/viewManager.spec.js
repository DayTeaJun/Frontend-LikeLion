describe("클릭 이벤트가 일어나면 데이터를 가져와서 화면에 뿌리는 클래스입니다.", () => {
  it("viewManager에 textManager 개게가 잘 전달되는지 확인합니다.", () => {
    const textManager = null;
    const btnEl = document.createElement("button");
    const viewerEl = document.createElement("strong");
    const inpTxt = document.createElement("input");

    // 인자가 잘 전달되는지 확인하는 함수를 만든다.
    const actual = () =>
      new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
    // 나는 actual 함수가 실행되면 에러가 나오길 기대함.
    expect(actual).toThrowError();
  });

  it("viewManager에 요소들이 인자로 잘 전될되는지 확인해봅니다.", () => {
    const textManager = new TextManager();
    const btnEl = null;
    const viewerEl = null;
    const inpTxt = null;

    // 인자가 잘 전달되는지 확인하는 함수를 만든다.
    const actual = () =>
      new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
    // 나는 actual 함수가 실행되면 에러가 나오길 기대함.
    expect(actual).toThrowError();
  });

  const textManager = new TextManager();
  const btnEl = document.createElement("button");
  const viewerEl = document.createElement("strong");
  const inpTxt = document.createElement("input");
  const viewManager = new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

  it("click 이벤트가 발생했을 때 changeValue 함수가 실행되는지 확인한다.", () => {
    // spyOn 특정 모듈(viewManager)의 함수(changeValue)를 감시합니다.
    spyOn(viewManager, "changeValue");
    // btn의 클릭 이벤트 (재스민 문법은 아님 그냥 클릭임)
    btnEl.click();

    // toHaveBeenCalled 한번 호출된 적이 있는지 판별한다.
    expect(viewManager.changeValue).toHaveBeenCalled();
  });

  it("changeValue 함수가 실행되고 나서 updateview 함수가 실행되는지 확이난다.", () => {
    // spyOn 특정 모듈(viewManager)의 함수(updateValue)를 감시합니다.
    spyOn(viewManager, "updateView");
    // changeValue가 실행되고 난 후에
    viewManager.changeValue();

    // toHaveBeenCalled 한번 호출된 적이 있는지 판별한다.
    expect(viewManager.updateView).toHaveBeenCalled();
  });
});
