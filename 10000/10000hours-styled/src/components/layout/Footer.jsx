import React from 'react'
import weniv from '../../img/weniv.png'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterStyle>
      <img src={weniv} alt="weniv" />
      <p>&#8251;본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.</p>
      <p>수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</p>
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  font-family: "Noto Sans KR";
  font-size: 12px;
  line-height: 17px;

  img {
    width: 125px;
    margin: 0 auto 20px;
  }
`