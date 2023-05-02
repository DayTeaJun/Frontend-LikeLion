// 밴딩머신 이벤트
export class VendingMachineEvents {
  constructor() {
    // 부모를 타고 들어가는 쿼리셀렉터 순서로 하면 좋음(안의 클래스가 다른 부모에 있는 클래스 이름이 겹칠 수 있기 때문)
    const vMachine = document.querySelector(".section1"); // 밴딩머신
    this.balance = vMachine.querySelector(".bg-box p"); // 잔액: ~원
    this.itemList = vMachine.querySelector(".cola-list"); //콜라 리스트 전체
    this.inputCostEl = vMachine.querySelector("#input-money"); //입금액 입력창
    this.btnPut = vMachine.querySelector("#input-money+.btn"); //입금 버튼
    this.btnReturn = vMachine.querySelector(".bg-box+.btn"); //거스름돈 반환 버튼
    this.btnGet = vMachine.querySelector(".btn-get"); //획득 버튼
    this.stagedList = vMachine.querySelector(".get-list"); // 장바구니 획득 목록
    // Q : class를 안주면 어떻게 연결하나요
    // A : 주변의 형제 요소들을 보고 파고 들어갈만한 요소가 있다면 그것을 선택해라
    // btn같은건 겹치는 클래스가 많을테니 부모나 형제 요소를 타고 가라.
    // id class는 개발자 쓰기나름.

    const myInfo = document.querySelector(".section2");
    this.myMoney = myInfo.querySelector(".bg-box strong"); //소지금: ~원

    const getInfo = document.querySelector(".section3");
    this.getList = getInfo.querySelector(".get-list"); //획득 음료 리스트
    this.txtTotal = getInfo.querySelector(".total-price"); //총금액: ~원
    this.btnsCola = document.querySelectorAll(".section1 .btn-cola");
  }

  // 장바구니 콜라 생성 함수
  stagedItemGenerator(target) {
    //함수안에서 템플릿으로 생성, 하단 장바구니(get-list)에 생성되는 li 생성해줌.

    const stageItem = document.createElement("li");
    stageItem.dataset.item = target.dataset.item;
    stageItem.dataset.price = target.dataset.price;
    stageItem.innerHTML = `
        <img src="./img/${target.dataset.img}" alt="">
            ${target.dataset.item}
        <strong>1
            <span class="a11y-hidden">개</span>
        </strong>
        `;
    this.stagedList.append(stageItem);
  }

  // 이벤트를 처리할 함수
  bindEvent() {
    /*
            1. 입금 버튼 기능
            입금 버튼을 누르면
            1) 소지금 === 소지금 - 입금액
            2) 잔액 === 기존 잔액 + 입금액
            3) 입금액이 소지금보다 많으면 경고창 출력
            4) 입금액이 정상적으로 입금되면 입금창은 초기화 돼야한다.        
        */

    // 입금 버튼
    this.btnPut.addEventListener("click", () => {
      // 입력값
      const inputCost = parseInt(this.inputCostEl.value);
      // 소지금
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));
      // 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));

      // 입금액이 있다면
      if (inputCost) {
        // 입금액이 소지금 보다 적다면
        if (inputCost <= myMoneyVal && inputCost > 0) {
          // 소지금
          this.myMoney.textContent =
            new Intl.NumberFormat().format(myMoneyVal - inputCost) + "원";

          // Intl.NumberFormat() 인터네셔널 객체, 사용자의 언어에 따른 숫자를 반환함. (25000원 -> 25,000원)
          // format(number) 메소드는 숫자를 통화 형식에 맞게 변환
          // 잔액 blanceVal이 빈칸이기때문에 빈칸이면 0 아니면 그대로
          this.balance.textContent =
            new Intl.NumberFormat().format((balanceVal || 0) + inputCost) +
            "원";
        }
        // 입금액이 소지금 보다 많다면
        else {
          alert("소지금이 부족합니다.");
        }
        // 입금액 초기화
        this.inputCostEl.value = "";
      }
    });

    /*
            2. 거스름돈 반환 버튼
            1) 반환버튼을 누르면 소지금 === 잔액 + 소지금
            2) 반환버튼을 누르면 전액창이 초기화된다.
        */
    this.btnReturn.addEventListener("click", () => {
      // 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));
      // 소지금
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));

      if (balanceVal) {
        this.myMoney.textContent =
          new Intl.NumberFormat().format(balanceVal + myMoneyVal) + "원";
        this.balance.textContent = null;
      }
    });

    /*
        3. 자판기 장바구니 채우기
        1) 아이템을 누르면 잔액 === 잔액 - 아이템 가격
        2) 아이템 가격이 잔액보다 크다면 경고메세지를 줍니다.
        3) 아이템이 장바구니에 들어갑니다.
        4) 아이템의 count가 -1이 됩니다. 아이템의 카운트가 0이 되면 
    */
    this.btnsCola = document.querySelectorAll(".section1 .btn-cola"); //콜라 버튼들 선택

    this.btnsCola.forEach((item) => {
      //item은 콜라 버튼 하나하나
      item.addEventListener("click", (event) => {
        // 잔액
        const balanceVal = parseInt(
          this.balance.textContent.replaceAll(",", "")
        );
        const targetEl = event.currentTarget;
        //target은 사용자가 마우스로 선택하는 요소 그 자체, currentTarget은 이벤트 리스너가 달린 요소, 여기에선 item -> this.btnsCola의 영역이다.

        // target은 이벤트 근원지임, dataset은 data에 접근하는 메서드
        const targetElPrice = parseInt(targetEl.dataset.price);
        const stagedListitem = this.stagedList.querySelectorAll("li");
        //
        let isStaged = false; // 이미 장바구니에 있는가?

        // 잔액이 아이템 가격보다 같거나 클 경우
        if (balanceVal >= targetElPrice) {
          this.balance.textContent =
            new Intl.NumberFormat().format(balanceVal - targetElPrice) + "원";

          // 선택한 콜라가 장바구니에 담은 콜라가 있는지 확인
          for (const item of stagedListitem) {
            // 클릭한 콜라의 이름과 장바구니에 있던 콜라의 이름이 같은지 비교함

            //중복됐을 때 카운트 쌓이는 것을 해결해주는 for문
            //같은 제품을 넣었을 때, li가 개별로 추가되지 않고 카운트되는 숫자가 +1되도록
            //클릭한 콜라의 이름과 장바구니에 있던 콜라의 이름이 같은지 비교
            if (targetEl.dataset.item === item.dataset.item) {
              // 이미 장바구니에 콜라가 있다면 카운트 +1
              item.querySelector("strong").firstChild.textContent =
                parseInt(item.querySelector("strong").firstChild.textContent) +
                1;

              isStaged = true;
              break;
            }
          }

          // 처음 선택했을 경우에만 장바구니에 콜라를 생성합니다.
          if (!isStaged) {
            //장바구니 콜라 생성
            this.stagedItemGenerator(event.currentTarget);
          }

          // 자판기 콜라 갯수 차감
          targetEl.dataset.count--;

          // dataset 객체에서 가져온 속성 값은 다 문자열로 반환함 그래서 parseInt해야됨.
          if (parseInt(targetEl.dataset.count) === 0) {
            // target 요소에 인접한곳으로 배치(이때는 닫히기 직전에 넣음)
            targetEl.insertAdjacentHTML(
              "beforeend",
              `<strong class="soldout">
                    <span>품절</span>
                </strong>`
            );

            targetEl.disabled = "disabled";
          }
        } else {
          alert("입금한 금액이 부족합니다.");
        }
      });
    });
    /*
        4. 획득 버튼 기능
        1) 장바구니에 있는 음료수 목록이 획득한 음료 목록으로 이동함
        2) 획득한 음료의 모든 금액을 합하여 총 금액을 업데이트합니다.
      */

    this.btnGet.addEventListener("click", () => {
      const itemStagedList = this.stagedList.querySelectorAll("li"); //왼쪽 list의 li
      const itemGetList = this.getList.querySelectorAll("li"); //오른쪽 list의 li
      let totalPrice = 0; //총금액 더해주기 위해 초깃값 숫자형(0)으로 설정

      // 175-193과정: 왼쪽 list와 오른쪽 list를 순회하는데, 초기 획득 값(isGet)을 false로 설정해둔 뒤 진행해야 한다. let isGet = false;은 각 색상별 음료수가 왼쪽에서 오른쪽으로 넘어갔을 때, if(!isGet)을 거치도록 해주는 초깃값 세팅이다. 또, isGet =false가 for문 바깥에 있으면, 각 음료가 for문을 돌때에 true상태이기 때문에 if(!isGet)이하 코드블럭이 실행되지 않아 append되지 않는다.
      for (const itemStaged of itemStagedList) {
        let isGet = false; // 이미 획득했는가?
        for (const itemGet of itemGetList) {
          // 장바구니의 콜라가 이미 획득한 목록에 있다면
          if (itemStaged.dataset.item === itemGet.dataset.item) {
            // 이미 장바구니에 콜라가 있다면 카운트 +1
            itemGet.querySelector("strong").firstChild.textContent =
              parseInt(itemGet.querySelector("strong").firstChild.textContent) +
              parseInt(
                itemStaged.querySelector("strong").firstChild.textContent
              );

            isGet = true;
            break;
          }
        }

        if (!isGet) {
          this.getList.append(itemStaged);
        }
      }
      // 장바구니 목록 초기화
      this.stagedList.innerHTML = null;

      // 획득한 음료 리스트를 순회하면서 총금액을 계산합니다.
      this.getList.querySelectorAll("li").forEach((itemGet) => {
        totalPrice +=
          parseInt(itemGet.dataset.price) *
          parseInt(itemGet.querySelector("strong").firstChild.textContent);
        //strong이 a11된 span까지 포함하고 있어서. 사실 firstChild없어도 parseInt('1개')는 1로 출력된다.
      });
      this.txtTotal.textContent = `총금액 : ${new Intl.NumberFormat().format(
        totalPrice
      )} 원`;
    });
  }
}

export default VendingMachineEvents;
