import React, { Component } from 'react';
import CardItem from './CardItem';


export default class ProductList extends Component {
  productList = this.props.productList
  RenderProductList = () => {
    console.log(this.productList)
    return this.productList.map((item, index) => {
      return <CardItem key={index} productItem={item}></CardItem>
    })
  }

  render() {
    return <div className='container'>
      <div className='row'>
        {this.RenderProductList()}
      </div>
    </div>;
  }
}


