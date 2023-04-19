// 그리고 또한 객체는 ‘행동’과 ‘상태’를 가집니다. 여기서 행동은 메소드, 상태는 프로퍼티 정도로 이해하시면 됩니다.
const me = {
    // 상태 - 프로퍼티(키:벨류)
    name: '웨이드',
    address: '제주도 제주시 인다 1길',
    phoneNum: '010-8001-6536',

    // 행동 - 메소드 (canWalk, teaching)
    canWalk: function () {
        console.log('웨이드가 걷는다.');
    },
    teaching: function (myStudent) {
        myStudent.levelUp();
    }
}

const student = {
    level: 1,
    levelUp: function () {
        this.level++;
    }
}
// 실행할 때마다 level이 1씩 오른다.
me.teaching(student);

// 내꺼
const jun = {
    name: '정준영',
    address: '부산',

    game: function (sword) {
        sword.gain();
    }
}

const weapon = {
    greatSword: 1,
    gain: function () {
        this.greatSword++
    }
}

jun.game(weapon);

// 동훈님 코드
const Hoonie = {
    name: '후니',
    address: 'classified',
    phoneNum: 'classified',
    encounter: function () {
        console.log('앗! 야생의 후니(이)가 나타났다!');
    },
    canRap: function () {
        console.log('후니(이)가 랩을 한다!');
    },
    coding: function (myMacBook) {
        myMacBook.writeCode();
    },
};

const myMacBook = {
    cpu: 'M1 PRO',
    writeCodee: function () {
        console.log('후니(은)는 코딩을 시작했다...');
    },
};

// 미현님 코드
const nor = {
    name: '노르',
    isLikeLionStudent: true,
    project: 1,
    rank: "bronze",

    studying: function () {
        this.project++;
        this.rank = this.project >= 10 ? "grand-master" : "bronze";
        console.log(`현재 진행한 프로젝트: ${this.project} 현재 랭크: ${this.rank}`);
    }
}