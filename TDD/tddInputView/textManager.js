// 값을 저장해주는 역할 (값 꺼내기 (get) 값 바꾸기(set))
class TextManager {
  // 생성자함수를 만들 때 자동실행됨
  constructor() {
    // 초기화
    this.value = { data: "hello Lions!" };
  }

  // 이걸 만든 인스턴스는 위 value의 data 값을 빼내게 됨.
  getValue() {
    return this.value.data;
  }

  setValue(newValue) {
    this.value = newValue;
  }
}
