import React, { useState } from 'react'
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';

export default function Main({ modalOpen }) {
  const [field, setField] = useState('');
  const [time, setTime] = useState(0);
  const [day, setDay] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDay(Math.ceil(10000 / time));
  }

  return (
    <MainStyle>
      <h2 className="a11y-hidden">필요한 시간 알아보기</h2>
      <form onSubmit={handleSubmit}>
        <p>
          나는
          <Input type="text" placeholder='ex) 프론트앤드 개발' required value={field} setValue={setField} />
          전문가가 될것이다.
        </p>
        <p>
          그래서 앞으로 매일 하루에
          <Input type="number" min={1} max={24} required value={time} setValue={setTime} />
          시간씩 훈련할 것이다.
        </p>
        <Button type="submit" className="btn-exc">나는 며칠동안 훈련을 해야 1만시간이 될까?</Button>
      </form>
      {!!day && <section>
        <h3 className="a11y-hidden">결과 확인</h3>
        <p>
          당신은 <strong>{field}</strong> 전문가가 되기 위해서<br />
          대략 <strong>{day}</strong> 이상 훈련하셔야 합니다! :&#41;
        </p>
        <Button type="button" onClick={modalOpen}>훈련하러가기 GO!GO!</Button>
        <Button type="button" whiteBtn>공유하기</Button>
      </section>}
    </MainStyle>
  )
}

const MainStyle = styled.main`
  margin: 130px 0;
  font-size: 24px;
  line-height: 24px;

  form {
    margin-bottom: 150px;
  }

  p {
    line-height: 100px;
  }

  strong {
    font-size: 72px;
  font-family: "GmarketSansbold";
  vertical-align: top;
  }

  button {
    margin-top: 80px;
  }
`