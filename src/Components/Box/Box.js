import React from 'react';
import styled from 'styled-components';
import './Box.css';
import { ReactComponent as Logo } from '../../images/logo.svg';

const StyledBox = styled.div`
    border: 3px solid hsl(217, 16%, 45%);
    height: 150px;
    width: 700px;
    border-radius: 20px;
    color: white;
    font-weight: bold;
    margin: auto;
    font-family: asekbold;
    font-size: 3em;
    margin-top: 45px;
    display: flex;
    text-align: left;
`

const Title = styled.div`
  flex:1;
  margin: auto;
  margin-left: 40px;
  margin-top: 25px;
`

const ScoreBox = styled.div`
  background-color: white;
  // flex:1;
  width: 150px;
  height: 115px;
  border-radius: 5px;
  margin: auto;
  margin-right: 20px;
  color: black;
  text-align: center;
`

function Box({ score }) {
  return (
        <StyledBox>
          <Title>
          <Logo/>
          </Title>
            <ScoreBox>
              <div style={{
                marginBottom: '5px',
              }}>
              <span 
              style={{
                color: 'hsl(229, 64%, 46%)',
                fontFamily: 'asekbold',
                marginBottom: '10px',
                fontSize: '30px'
              }}>SCORE</span>
              <br/>
              <span
              style={{
                color: 'hsl(229, 25%, 31%)'
              }}>{score}</span>
              </div>
            </ScoreBox>
        </StyledBox>
    
  )
}

export default Box