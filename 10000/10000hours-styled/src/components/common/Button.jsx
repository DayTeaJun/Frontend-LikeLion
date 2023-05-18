import React from 'react'
import styled from 'styled-components'
import hand from "../../img/hand.png"

export default function Button(props) {
  const { type } = props;
  console.log(props.whiteBtn)
  return (

    <BtnStyle {...props} type={type ? type : "button"} >
      {props.children}
    </BtnStyle>
  )
}

const BtnStyle = styled.button`
  padding: 21px 49px;
  font-size: 24px;
  line-height: 24px;
  font-family: GmarketSansBold;
  color: #5B2386;
  background-color: ${({ whiteBtn }) => whiteBtn ? "#fff" : "#FCEE21"};
  border-radius: 56px;
  cursor: pointer;
  border: none;
  margin-left: ${({ whiteBtn }) => whiteBtn && "20px"};
  transition: all .3s;

  &.btn-exc {
    position: relative;

    &::after {
      position: absolute;
      content: '';
      right: -80px;
      bottom: -20px;
      width: 60px;
      height: 70px;
      background-image: url(${hand});
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`