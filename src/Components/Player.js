import React, { Component } from 'react';
import {connect} from 'react-redux';
class Player extends Component {
  render() {
    console.log(this.props.playerProps)
    return (
        <div className="text-center playerGame">
        <div className="theThink">
            <img style={{transform:'rotate(120deg)'}} className="mt-3" width={100} height={100} src={this.props.playerProps.selection} alt={this.props.playerProps.selection} />
            {/* {this.renderSelection()} */}
        </div>
        <div className="speech-bubble"></div>
        <img style={{ width: 200, height: 200 }} src="./img/gameOanTuXi/player.png" alt="./img/gameOanTuXi/player.png" />

        <div className="row">
            <div className="col-4">
                <button className="btnItem" onClick={this.props.selectOption.bind(this,"./img/gameOanTuXi/bao.png")}>
                    <img width={50} height={50} src="./img/gameOanTuXi/bao.png" alt="./img/gameOanTuXi/bao.png" />
                </button>
            </div>
            <div className="col-4">
                <button className="btnItem" onClick={this.props.selectOption.bind(this,"./img/gameOanTuXi/bua.png")} >
                    <img width={50} height={50} src="./img/gameOanTuXi/bua.png" alt="./img/gameOanTuXi/bua.png" />
                </button>
            </div>
            <div className="col-4">
                <button className="btnItem" onClick={this.props.selectOption.bind(this,"./img/gameOanTuXi/keo.png")}>
                    <img width={50} height={50} src="./img/gameOanTuXi/keo.png" alt="./img/gameOanTuXi/keo.png" />
                </button>
            </div>
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
        playerProps: state.appStateReducer.player
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        selectOption: (myOption) => {
           let action = {
                type: "SELECT_OPTION",
                option: myOption
           };
           dispatch(action);
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Player)