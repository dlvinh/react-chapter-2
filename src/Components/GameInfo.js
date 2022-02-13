import React, { Component } from 'react';
import {connect} from 'react-redux';

class GameInfo extends Component { 
  render() {
    console.log(this.props.gameProps)
    return (
        <div>
        <div className="display-4">Your Selection: <span className="text-danger">{this.props.playerProps.selection}</span></div>
       <div className="display-4">Wins: <span className="text-success"> {this.props.playerProps.win}</span></div>
       <div className="display-4">Play Round: <span className="text-primary"> {this.props.playerProps.playRound}</span></div>
   </div>
    )
  }
}
const mapStateToProps = (state)=>{
    return {
      gameProps: state.gameStateReducer,
      playerProps: state.gameStateReducer.player,
      diceProps: state.gameStateReducer.dice
    }
}


export default connect(mapStateToProps)(GameInfo);