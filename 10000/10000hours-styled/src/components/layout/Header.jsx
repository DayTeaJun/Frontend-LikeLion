import React from 'react'
import title from '../../img/title.png'
import subtitle from '../../img/txt_subtitle.png'
import title_bg from "../../img/title_bg.png"
import txtLeft from "../../img/txt-left.png"
import txtRight from "../../img/txt-right.png"

import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderStyle>
      <h1>
        <img src={title} alt="1만시간의법칙" />
      </h1>
      <img src={subtitle} alt="연습은 어제의 당신보다 당신을 더 낫게 만든다." />
      <p>
        <strong>1만 시간의 법칙</strong>은<br />
        어떤 분야의 전문가가 되기 위해서는<br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </p>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  margin-bottom: 95px;

  h1 {
    position: relative;
    max-width: 564px;
    margin: auto;

      img {
        width: 100%;
      }

      &::after {
        display: block;
        content: '';
        position: absolute;
        width: 224px;
        height: 224px;
        top: 50%;
        left: 50%;
        margin: -112px 0 0 -112px;
        background-image: url(${title_bg});
        background-size: contain;
        z-index: -1;
      }
    }

    h1 + img {
      max-width: 486px;
      margin: 125px auto 84px;
    }

    p {
      position: relative;
      max-width: 475px;
      margin: 0 auto;
      line-height: 30px;
      font-size: 18px;

      strong {
        font-size: 24px;
        font-weight: bold;
      }

      &::before,
      &::after {
        position: absolute;
        top: 50%;
        content: '';
        width: 37px;
        height: 32px;
        margin-top: -16px;
      }

      &::before {
        left: 0;
        background-image: url(${txtLeft});
      }

      &::after {
        right: 0;
        background-image: url(${txtRight});
      }
    }
`