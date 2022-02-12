import React, { Component } from 'react';


import { connect } from 'react-redux';
import CartAppReducer from '../Redux/CartAppReducer';
class CardItem extends Component {
  render() {
    return <div className='col-4'>
    <div className="card text-align">
        <img className="card-img-top" src={this.props.productItem.hinhAnh} alt="..." style={{minHeight:"350px"}} />
        <div className="card-body">
            <h4 className="card-title">{this.props.productItem.tenSP}</h4>
            <p className="card-text">{this.props.productItem.giaBan.toLocaleString()}</p>
            <div className='d-flex justify-content-around'>
                <button type="button" className="btn btn-primary" onClick={this.props.readMoreInfoProps.bind(this,this.props.productItem)} >Read more</button>
                <button type="button" className="btn btn-primary" onClick={this.props.addItemToCartProps.bind(this,this.props.productItem)} >Add Cart</button>
            </div>

        </div>
    </div>
</div>;
  }
}


//SET new STATE value and UPDATE it on REDUCER (STORE)
/**
 * using mapDispatchToProps for external functions that will change the state
 */

 const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCartProps: (item)=>{
        let action ={
          type: 'ADD_TO_CART',
          addedProduct:item
        };
        console.log("addItemAction", item);
        dispatch(action);
    },
    readMoreInfoProps: (item)=>{
      let action ={
        type:"READ_MORE",
        readItem: item
      };
      console.log("Read more action", item);
      dispatch(action)
    }
  }
}


export default connect(null,mapDispatchToProps)(CardItem)

