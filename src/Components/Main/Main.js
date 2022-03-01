import React, {useState} from 'react';
import styled from 'styled-components';
import { ReactComponent as Rock } from '../../images/icon-rock.svg';
import { ReactComponent as Paper } from '../../images/icon-paper.svg';
import { ReactComponent as Scissors } from '../../images/icon-scissors.svg';
import { ReactComponent as Triangle } from '../../images/bg-triangle.svg';
import { ReactComponent as RulesModal } from '../../images/image-rules.svg';
import { ReactComponent as Close } from '../../images/icon-close.svg';
import Rules from '../Rules/Rules';

const Container = styled.div`
    display: flexbox;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 50px;
    width: 500px
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
    margin-right: 64px;
    cursor: pointer;
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
    cursor: pointer;
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
    cursor: pointer;
`

const StyledTriangle = styled.div`
    position: absolute;
    top: 360px;
    z-index: -1;
`

const NewLine = styled.div`
    display: contents;
    margin-top:100px;
`

const Modal = styled.div`
    display: block; 
    position: fixed; 
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    // overflow: auto; 
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



const Main = ({ setChoice, route, setRoute }) => {
    const handleClick = (choice) => {
        setChoice(choice);
        setRoute('finish')
    }
    const [modal, setModal] = useState(false);
  return (
    <Container>
        <BigBlueCircle onClick={() => handleClick('paper')}>
            <Circle>
                <Paper/>
            </Circle>
        </BigBlueCircle>
        <BigRedCircle onClick={() => handleClick('rock')}>
            <Circle>
                <Rock/>
            </Circle>
        </BigRedCircle>
        <NewLine>
            <BigYellowCircle onClick={() => handleClick('scissors')}>
                <Circle>
                    <Scissors/>
                </Circle>
            </BigYellowCircle>
        </NewLine>
        <StyledTriangle>
            <Triangle/> 
        </StyledTriangle>
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
    </Container>
  )
}

export default Main