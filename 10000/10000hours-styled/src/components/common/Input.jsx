import React from 'react'
import styled from 'styled-components'

export default function Input(props) {
    const { type, value, setValue } = props;

    function onChange(e) {
        setValue(e.target.value)
    }

    return (
        <InputStyle type={type ? type : "text"} value={value} onChange={onChange} {...props} />
    )
}

const InputStyle = styled.input`
    max-width: 224px;
    padding: 15px 20px;
    border-radius: 10px;
    margin: 0 10px;
    font-size: 24px;
    font-family: 'GmarketSansBold';
`