import React, { Component } from 'react'

export default class Item extends Component {
    
    renderItem = ()=>{
        let itemList = [];
        for (let i = 0; i < this.props.amount; i++) {
            itemList.push(<div className={this.props.name}></div>)
        }
        return itemList
    }
    render() {
        return (
            <div>{this.renderItem()}</div>
        )
    }
}
