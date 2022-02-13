import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dice extends Component {

  renderDices = (diceList) => {
    if (diceList.length === 0) {
      return <div>
       
      </div>
    } else {
      diceList.map((item,index)=>{
        console.log(item)
          return <img className="ml-2" style={{ width: 50, height: 50 }} src={item.imgSrc} alt={item.value+".png"} />
      })
    }
  }
  render() {
    console.log("DICE PROPS", this.props.diceProps)
    return (
      <div>
        <img className="ml-2" style={{ width: 50, height: 50 }} src={this.props.diceProps.length === 0 ? "./img/gameXuxXac/1.png" : this.props.diceProps[0].imgSrc} alt="1.png" />
        <img className="ml-2" style={{ width: 50, height: 50 }} src={this.props.diceProps.length === 0 ? "./img/gameXuxXac/1.png" : this.props.diceProps[1].imgSrc} alt="1.png" />
        <img className="ml-2" style={{ width: 50, height: 50 }} src={this.props.diceProps.length === 0 ? "./img/gameXuxXac/1.png" : this.props.diceProps[2].imgSrc}alt="1.png" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    diceProps: state.gameStateReducer.dice
  }
}
export default connect(mapStateToProps)(Dice);

