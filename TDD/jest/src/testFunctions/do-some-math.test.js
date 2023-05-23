import { sum, substract, multiply, divide } from "../myFunctions/do-some-math";

// jest는 모든 test 파일을 test함
// describe는 test함수들을 test할 수 있음
describe("Math functions test", () => {
  it("두가지 값을 더한다.", () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum()).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });

  it("두가지 값을 뺀다.", () => {
    expect(substract(1, 2)).toBe(-1);
    expect(substract()).toBe(0);
    expect(substract(0, 0)).toBe(0);
  });

  it("두가지 값을 곱한다", () => {
    expect(multiply(3, 2)).toBe(6);
    expect(multiply()).toBe(0);
    expect(multiply(0, 0)).toBe(0);
    expect(multiply(2.3, 2.2)).toBe(5.06);
    expect(multiply(-1, -1)).toBe(1);
  });

  it("두가지 값을 나눈다.", () => {
    expect(divide(4, 2)).toBe(2);
    expect(divide(3, 4)).toBe(0.75);
    // 나는 divide 함수가 빈 매개변수라면 실행되면 에러가 나오길 예상함.
    expect(() => divide()).toThrowError("0으로 나눌 수 없습니다!");
    expect(divide(-2, 0.1)).toBe(-20);
  });
});
