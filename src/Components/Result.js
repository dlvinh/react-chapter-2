import React, { Component } from 'react'
import {connect} from 'react-redux';

class Result extends Component {
    render() {
        console.log(this.props.appProps)
        return (
            <div>
                <div className="display-4 text-warning">{this.props.appProps.game.message}</div>
                <div className="display-4 text-success">Win: <span className="text-warning">{this.props.appProps.player.win}</span></div>
                <div className="display-4 text-success">Rounds: <span className="text-warning">{this.props.appProps.game.totalRound}</span></div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        appProps: state.appStateReducer
    }
}

export default connect(mapStateToProps)(Result);