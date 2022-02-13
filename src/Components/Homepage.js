import React, { Component } from 'react'
import '../Style/DiceGame.css'
import Dice from './Dice'
import GameInfo from './GameInfo'

import { connect } from 'react-redux'
class Homepage extends Component {
  render() {
    return (
        <div className="game">
        <div className="title-game text-center mt-5 display-4">
            DICE GAME
        </div>

        <div className="row text-center mt-5">
            <div className="col-5">
                <button className="btnGame" onClick={this.props.onSelectSide.bind(this,"TAI")}>TÀI</button>
            </div>
            <div className="col-2">
                <Dice></Dice>
            </div>
            <div className="col-5">
                 <button className="btnGame" onClick={this.props.onSelectSide.bind(this,"XIU")}>XỈU</button>
            </div>

        </div>
        <div className="thongTinTroChoi text-center">
            <GameInfo></GameInfo>
            <button className="btn btn-success p-2 display-4 mt-5" onClick={this.props.onStartGame}>Play game</button>
        </div>
    </div>
    )
  }
};


const mapDispatchToProps = (dispatch)=>{
    return {
        onSelectSide: (side) =>{
            let action = {
                type: "SELECT_SIDE",
                selectedSide: side
            };
            console.log("SIDE:", side );
            dispatch(action);
        },
        onStartGame:()=>{
            let action ={
                type: "START_GAME",
            };
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(Homepage)