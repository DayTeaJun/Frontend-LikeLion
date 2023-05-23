function sum(a = 0, b = 0) {
  return a + b;
}

function substract(a = 0, b = 0) {
  return a - b;
}

function multiply(a = 0, b = 0) {
  // parseFloat은 문자열을 숫자로 바꿔주는 것도 있지만,
  // 소수점 toFixed로 반올림을 하였을 때, 그 마지막 자릿수에 0이 남으면 제거해줌
  return parseFloat((a * b).toFixed(3));
}

function divide(a = 0, b = 0) {
  if (b !== 0) {
    return parseFloat((a / b).toFixed(3));
  } else {
    throw new Error("0으로 나눌 수 없습니다!");
  }
}

export { sum, substract, multiply, divide };
