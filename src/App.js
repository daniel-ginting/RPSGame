import React, { Component } from 'react';
import styled from 'styled-components';
import Box from './Components/Box/Box';
import './App.css';
import Main from './Components/Main/Main';


const Button = styled.button`
  color: red;
  margin-right: 50px
`

const StyledApp = styled.div`
  
  text-align: center; 
`

class App extends Component {
  constructor(){
    super();
    this.state = {
      player: '',
      computer: '',
      winner: '',
      score: 0
    }
  }

  setChoice = (param) => {
    const arr = ['rock', 'paper', 'scissors'];

    this.setState({player: param});
    const computer = arr[Math.floor((Math.random() * 3))];
    this.setState({computer: computer});

    const asek = (player, computer) => {
      if (
        (player === 'scissors' && computer === 'paper') || 
        (player === 'paper' && computer === 'rock') || 
        (player === 'rock' && computer === 'scissors') )
        {
        return 'player'
      } 
      else if (
        (player === 'scissors' && computer === 'rock') || 
        (player === 'paper' && computer === 'scissors') || 
        (player === 'rock' && computer === 'paper')
      ){
        return 'computer'
      } else if (!(player.length)){
        return ''
      } else if (player === computer){
        return 'tie'
      }
    }
    let score = this.state.score;
    const winner = asek(param, computer)
    if(winner === 'player') {
      score++
    } else if (winner === 'computer') {
      score--
    }
    this.setState({winner: winner})
    this.setState({score: score})
  }
  // setWinner = () => {


  //   this.setState({winner: asek()})
  // }

  render() {
    return (
      <StyledApp>
        <Box score={this.state.score}/>
        <Main setChoice={this.setChoice}/>
        <h1>You: {this.state.player} vs Computer: {this.state.computer}</h1>
        <h1>{this.state.winner}</h1>
      </StyledApp>
    )
  }
}

export default App;

