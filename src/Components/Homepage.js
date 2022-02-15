import React, { Component } from 'react'
import '../Style/style.css';
import NpcPlayer from './NpcPlayer';
import Player from './Player';
import Result from './Result';

import {connect} from 'react-redux';
class Homepage extends Component {
  render() {
    return (
        <div className="gameOanTuXi">
        <div className="row text-center mt-5">
            <div className="col-4 mt-3">
                <Player />
            </div>
            <div className="col-4 mt-3">
                <Result></Result>
                <button className="btn btn-success p-2 display-4 mt-5" onClick={this.props.onClickPlay}>Play game</button>
            </div>
            <div className="col-4 mt-3">
                <NpcPlayer></NpcPlayer>
            </div>
        </div>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onClickPlay: ()=>{
            let randomAnimation = {
                type:"RANDOM"
            }
            let count=0;
            let random = setInterval(()=>{
                dispatch(randomAnimation)
                count ++;
                if (count >10){
                    clearInterval(random);
                    let action ={
                        type: "PLAY_GAME",
                    }
                    dispatch(action)
                }
            },100);

        }
    }
}


export default connect(null,mapDispatchToProps)(Homepage)
