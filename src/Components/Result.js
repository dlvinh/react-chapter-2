import React, { Component } from 'react'
import {connect} from 'react-redux';

class Result extends Component {
    render() {
        console.log(this.props.appProps)
        return (
            <div>
                <div className="display-4 text-warning">Ahh! you lose</div>
                <div className="display-4 text-success">Win: <span className="text-warning">{this.props.appProps.win}</span></div>
                <div className="display-4 text-success">Rounds: <span className="text-warning">0</span></div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        appProps: state.appStateReducer.player
    }
}

export default connect(mapStateToProps)(Result);