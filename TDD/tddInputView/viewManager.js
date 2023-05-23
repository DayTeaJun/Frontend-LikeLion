// textManager에서 가져온 값을 변화시키거나, 화면에 뿌려주는 역할
class ViewManager {
  constructor(textManager, options) {
    // 자신을 생성한 인스턴스가 맞는지 검증
    if (textManager.constructor !== TextManager) {
      throw Error("올바른 textManager 객체가 전달되지 않았습니다.");
    }

    if (!options.btnEl || !options.viewerEl || !options.inpTxt) {
      throw Error("전달받지 못한 요소가 존재합니다.");
    }

    this.textManager = textManager;
    this.inpTxt = options.inpTxt;
    this.viewerEl = options.viewerEl;

    options.btnEl.addEventListener("click", () => {
      this.changeValue();
    });
  }

  // 객체 또는 클래스 안에서는 function 붙힐 필요가 없음
  changeValue() {
    this.textManager.setValue({ data: this.inpTxt.value });
    this.updateView();
  }

  updateView() {
    this.viewerEl.textContent = this.textManager.getValue();
  }
}
