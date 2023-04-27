// 밴딩머신 이벤트
export class VendingMachineEvents {
    constructor() {
        // 부모를 타고 들어가는 쿼리셀렉터 순서로 하면 좋음(안의 클래스가 다른 부모에 있는 클래스 이름이 겹칠 수 있기 때문)
        const vMachine = document.querySelector('.section1'); // 밴딩머신
        this.balance = vMachine.querySelector('.bg-box'); // 잔액
        this.itemList = vMachine.querySelector('.cola-list');
        this.inputCostEl = vMachine.querySelector('#input-money');
        this.btnPut = vMachine.querySelector('#input-money+.btn');
        this.btnReturn = vMachine.querySelector('.bg-box+.btn');
        this.btnGet = vMachine.querySelector('.bg-get');
        this.stagedList = vMachine.querySelector('.get-list'); // 장바구니
        // Q : class를 안주면 어떻게 연결하나요
        // A : 주변의 형제 요소들을 보고 파고 들어갈만한 요소가 있다면 그것을 선택해라
        // btn같은건 겹치는 클래스가 많을테니 부모나 형제 요소를 타고 가라.
        // id class는 개발자 쓰기나름.

        const myInfo = document.querySelector('.section2');
        this.myMoney = myInfo.querySelector('.bg-box strong');

        const getInfo = document.querySelector('.section3');
        this.getList = getInfo.querySelector('.get-list');
        this.txtTotal = getInfo.querySelector('.total-price');
    }

    // 장바구니 콜라 생성 함수
    stagedItemGenerator(target) {
        const stageItem = document.createElement('li');
        stageItem.innerHTML = `
        <img src="./img/${target.dataset.img}" alt="">
            ${target.dataset.item}
        <strong>2
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
        this.btnPut.addEventListener('click', () => {
            // 입력값
            const inputCost = parseInt(this.inputCostEl.value);
            // 소지금
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));
            // 잔액
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));

            // 입금액이 있다면
            if (inputCost) {
                // 입금액이 소지금 보다 적다면
                if (inputCost <= myMoneyVal && inputCost > 0) {
                    // 소지금
                    this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + '원';

                    // Intl.NumberFormat() 인터네셔널 객체, 사용자의 언어에 따른 숫자를 반환함. (25000원 -> 25,000원)
                    // format(number) 메소드는 숫자를 통화 형식에 맞게 변환
                    // 잔액 blanceVal이 빈칸이기때문에 빈칸이면 0 아니면 그대로
                    this.balance.textContent = new Intl.NumberFormat().format((balanceVal ?? 0) + inputCost) + '원';
                }
                // 입금액이 소지금 보다 많다면
                else {
                    alert('소지금이 부족합니다.')
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
        this.btnReturn.addEventListener('click', () => {
            // 잔액
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));
            // 소지금
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));

            if (balanceVal) {
                this.myMoney.textContent = new Intl.NumberFormat().format(balanceVal + myMoneyVal) + '원';
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
        this.btnsCola = document.querySelectorAll('.section1 .btn-cola');

        this.btnsCola.forEach((item) => {
            item.addEventListener('click', (event) => {
                // 잔액
                const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));

                // target은 이벤트 근원지임, dataset은 data에 접근하는 메서드
                const targetElPrice = parseInt(event.currentTarget.dataset.price);
                console.log(targetElPrice);

                // 잔액이 아이템 가격보다 같거나 클 경우
                if (balanceVal >= targetElPrice) {
                    this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + '원';

                    // 장바구니 콜라
                    this.stagedItemGenerator(event.currentTarget);
                    // for (const item of this.stagedList) {

                    // }

                } else {
                    alert('입금한 금액이 부족합니다.')
                }
            })
        })
    }

}

export default VendingMachineEvents;