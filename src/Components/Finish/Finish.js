import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Rock } from '../../images/icon-rock.svg';
import { ReactComponent as Paper } from '../../images/icon-paper.svg';
import { ReactComponent as Scissors } from '../../images/icon-scissors.svg';
import Rules from '../Rules/Rules';
import { ReactComponent as RulesModal } from '../../images/image-rules.svg';
import { ReactComponent as Close } from '../../images/icon-close.svg';

const StyledButton = styled.button`
  width: 220px;
  height: 48px;
  border: 1px solid black;
  border-radius: 8px;
  font-family: aseksemi;
  color: hsl(229, 25%, 31%);
  font-size: 20px;
  cursor: pointer;
  letter-spacing: 2px;
  margin: auto;
`

const YouWin = styled.h1`
  font-family: asekbold;
  color: white;
  font-size: 50px;
  margin-top: 150px;
  margin-bottom: 24px;
`

const BigBlueCircle = styled.button`
    background-color: hsl(230, 89%, 65%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    z-index: -100;
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

const PickedText = styled.h2`
  color: white;
  font-family: aseksemi;
  float: left;
  flex: 1;
  margin-top: 75px;
  margin-bottom: 65px;
`

const Modal = styled.div`
    display: block; 
    position: fixed; 
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4); 
`

const ModalContent = styled.div`
    background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 400px;
    height: 415px;
    border-radius: 20px;
`

const BigYellowCircle = styled.button`
    background-color: hsl(40, 84%, 53%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    z-index: -100;
`

const BigRedCircle = styled.button`
    background-color: hsl(349, 70%, 56%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    z-index: -100;
`
const BigYellowCircleShadow = styled.button`
    background-color: hsl(40, 84%, 53%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    box-shadow: 0 0 0 65px rgba(41, 50, 81, 0.5), 0 0 0 135px rgba(35, 44, 75, 0.5), 0 0 0 220px rgba(30, 41, 73, 0.5);
    z-index: -100;
`

const BigRedCircleShadow = styled.button`
    background-color: hsl(349, 70%, 56%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    box-shadow: 0 0 0 65px rgba(41, 50, 81, 0.5), 0 0 0 135px rgba(35, 44, 75, 0.5), 0 0 0 220px rgba(30, 41, 73, 0.5);
    z-index: -100;
`
const BigBlueCircleShadow = styled.button`
    background-color: hsl(230, 89%, 65%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    box-shadow: 0 0 0 65px rgba(41, 50, 81, 0.5), 0 0 0 135px rgba(35, 44, 75, 0.5), 0 0 0 220px rgba(30, 41, 73, 0.5);
    z-index: -100;
`

const Finish = ({ setRoute, player, computer, winner }) => {
  const [modal, setModal] = useState(false);

  const renderPlayer = () => {
    if (player === 'rock' && (winner === 'computer' || winner === 'tie')){
      return (
        <BigRedCircle>
          <Circle>
            <Rock/>
          </Circle>
        </BigRedCircle>
      )
    } else if (player === 'scissors' && (winner === 'computer' || winner === 'tie')){
      return(
      <BigYellowCircle>
        <Circle>
          <Scissors/>
        </Circle>
      </BigYellowCircle>
      )
    } else if (player === 'paper' && (winner === 'computer' || winner === 'tie')){
      return (<BigBlueCircle>
        <Circle>
          <Paper/>
        </Circle>
      </BigBlueCircle>   
      )   
    } 
    else if (player === 'rock' && winner === 'player'){
      return (
        <BigRedCircleShadow>
          <Circle>
            <Rock/>
          </Circle>
        </BigRedCircleShadow>
      )
    } else if (player === 'scissors' && winner === 'player'){
      return(
      <BigYellowCircleShadow>
        <Circle>
          <Scissors/>
        </Circle>
      </BigYellowCircleShadow>
      )
    } else if (player === 'paper' && winner === 'player'){
      return (<BigBlueCircleShadow>
        <Circle>
          <Paper/>
        </Circle>
      </BigBlueCircleShadow>   
      )   
    } 
  }

  const renderComputer = () => {
    if (computer === 'rock' && (winner === 'player' || winner === 'tie')){
      return (
        <BigRedCircle>
          <Circle>
            <Rock/>
          </Circle>
        </BigRedCircle>
      )
    } else if (computer === 'scissors' && (winner === 'player' || winner === 'tie')){
      return(
      <BigYellowCircle>
        <Circle>
          <Scissors/>
        </Circle>
      </BigYellowCircle>
      )
    } else if (computer === 'paper' && (winner === 'player' || winner === 'tie')){
      return (<BigBlueCircle>
        <Circle>
          <Paper/>
        </Circle>
      </BigBlueCircle>   
      )   
    } 
    else if (computer === 'rock' && winner === 'computer'){
      return (
        <BigRedCircleShadow>
          <Circle>
            <Rock/>
          </Circle>
        </BigRedCircleShadow>
      )
    } else if (computer === 'scissors' && winner === 'computer'){
      return(
      <BigYellowCircleShadow>
        <Circle>
          <Scissors/>
        </Circle>
      </BigYellowCircleShadow>
      )
    } else if (computer === 'paper' && winner === 'computer'){
      return (<BigBlueCircleShadow>
        <Circle>
          <Paper/>
        </Circle>
      </BigBlueCircleShadow>   
      )   
    } 
  }

  const renderWinner = () => { 
    if (winner === 'player'){
      return 'YOU WIN'
    } else if(winner === 'computer') {
      return 'YOU LOSE'
    } else if (winner === 'tie'){
      return 'TIE'
    }
  } 
  return (
    <div style={{
      display: 'flex'
    }}>
      <div style={{
        flex: '1',
        margin: '0 8px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <PickedText>YOU PICKED</PickedText>
        {renderPlayer()}
        {console.log(player)}
      </div>

      <div style={{
        flex: '1',
        margin: '0 8px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <YouWin>{renderWinner()}</YouWin>
        <StyledButton onClick={() => setRoute('select')}>PLAY AGAIN</StyledButton>
      </div>

      <div style={{
        flex: '1',
        margin: '0 8px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <PickedText>THE HOUSE PICKED</PickedText>
        {renderComputer()}
        <Rules setModal={setModal}/>
        {modal === true 
        ? 
        <Modal>
            <ModalContent>
                <div
                style={{
                    display: 'block',
                    fontFamily: 'asekbold',
                    textAlign: 'left',
                    marginBottom: '20px',
                    marginTop: '18px'
                }}>
                    <h1
                    style={{
                        display: 'inline-block',
                        margin: 0,
                        marginLeft: '12px'
                    }}>RULES</h1>
                    <Close 
                        onClick={() => setModal(false)}
                        style={{
                            float: 'right',
                            marginTop: '10px',
                            marginRight: '12px',
                            cursor: 'pointer'
                    }}/>
                 </div>
            <RulesModal
                style={{
                    marginTop: '32px'
                }}/>
            </ModalContent>
        </Modal> 
        : 
        ''}
        {console.log(modal)}
      </div>
    </div>
  )
}

export default Finish