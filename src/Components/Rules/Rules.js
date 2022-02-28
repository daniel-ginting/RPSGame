import React from 'react';
import styled from 'styled-components';

const StyledRules = styled.button`
    position: absolute;
    right: 30px;
    bottom: 30px;
    background: none;
    border: 2px solid hsl(217, 16%, 45%);
    height: 37px;
    width: 125px;
    border-radius: 5px;
    color: white;
    font-family: aseksemi;
    font-size: 18px;
    letter-spacing: 3px;
    text-align: center;
    cursor: pointer;
`

const Rules = ({ setModal }) => {
  return (
    <StyledRules onClick={() => setModal(true)}>RULES</StyledRules>
  )
}

export default Rules