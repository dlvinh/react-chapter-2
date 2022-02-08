import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';
import PhoneItem from './PhoneItem';
export default class PhoneList extends Component {
    phoneData = this.props.phoneList;

    state = {
        phone:{}
    }
    RenderPhoneList = () => {
        console.log()
        return this.phoneData.map((item, index) => {
            return <PhoneItem key={index} phoneItemProps={item} RenderReadmoreHandler={this.props.ReadmoreHandler} AddToCartHandler={this.props.AddToCardHandler}></PhoneItem>
        })
    }
    
    render() {
        return <div className='container'>
            <div className='row'>
                {this.RenderPhoneList()}
            </div>
        </div>;
    }
}

