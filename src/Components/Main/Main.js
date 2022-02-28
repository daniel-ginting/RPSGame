import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Rock } from '../../images/icon-rock.svg';
import { ReactComponent as Paper } from '../../images/icon-paper.svg';
import { ReactComponent as Scissors } from '../../images/icon-scissors.svg';
import { ReactComponent as Triangle } from '../../images/bg-triangle.svg';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

const Circle = styled.div`
    background-color: white;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;    
`

const BigBlueCircle = styled.button`
    background-color: hsl(230, 89%, 65%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 10px hsl(230, 89%, 62%);
`

const BigYellowCircle = styled.button`
    background-color: hsl(40, 84%, 53%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 10px hsl(39, 89%, 49%);
`

const BigRedCircle = styled.button`
    background-color: hsl(349, 70%, 56%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 10px hsl(349, 71%, 52%);
`

const StyledTriangle = styled.div`
    position: absolute;
    top: 360px;
    z-index: -1;
`

const Main = ({ setChoice }) => {
  return (
    <Container>
        <BigBlueCircle onClick={() => setChoice('paper')}>
            <Circle>
                <Paper/>
            </Circle>
        </BigBlueCircle>
        <BigRedCircle onClick={() => setChoice('rock')}>
            <Circle>
                <Rock/>
            </Circle>
        </BigRedCircle>
        <BigYellowCircle onClick={() => setChoice('scissors')}>
            <Circle>
                <Paper/>
            </Circle>
        </BigYellowCircle>
        <StyledTriangle>
            <Triangle/> 
        </StyledTriangle>
    </Container>
  )
}

export default Main