import React, { Component } from 'react'

import { connect } from 'react-redux';
import CartAppReducer from '../Redux/CartAppReducer';
class CartModal extends Component {
    renderCartTable = () => {
        console.log(this.props.cartListProps);
        let cartList = this.props.cartListProps;

        return cartList.map((item, index) => {
            return <tr key={index} >
                <td className='align-middle' scope="row"><img src={item.hinhAnh} alt="..." style={{ width: "50px" }} /></td>
                <td  className='align-middle'>{item.tenSP}</td>
                {/* <td className='align-middle'><button className='minusBtn btn btn-dark' onClick={this.props.SubstractQuantityHandler.bind(this, item)}>-</button> {item.soLuong} <button className='additionBtn btn btn-dark' onClick={this.props.AdditionQuantityHandler.bind(this, item)}>+</button></td> */}
                <td  className='align-middle'><button className='minusBtn btn btn-dark' onClick={this.props.substractItemProps.bind(this,item)}>-</button> {item.soLuong} <button className='additionBtn btn btn-dark' onClick={this.props.addItemToCartProps.bind(this,item)}>+</button></td>
                <td  className='align-middle'>{item.subTotal.toLocaleString()}</td>
                <td className='align-middle'><button className='deleteBtn btn btn-danger' onClick={this.props.deleteItemProps.bind(this,item)}>X</button></td>
            </tr>
        })
    }
    render() {
        let cartTotal = 0;
        this.props.cartListProps.map((item,index)=>{
            cartTotal = item.subTotal + cartTotal;
        })
        return <div>
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document" style={{ maxWidth: "800px" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Your Cart</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    {this.renderCartTable()}
                                    <tr>
                                        <th colSpan="4" className='text-right'>
                                            Total: {cartTotal.toLocaleString()}
                                        </th>
                                    </tr>

                                </tbody>

                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
// GET STATE FROM STORE
/**
 * S1: use mapStateToProps function to create props for this components
 */
const mapStateToProps = state => {
    return {
        cartListProps: state.cartState.cartList,
        cartTotalProps: state.cartState.cartTotal,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addItemToCartProps: (item)=>{
            let action ={
              type: 'ADD_TO_CART',
              addedProduct:item
            };
            console.log("addItemAction", item);
            dispatch(action);
        },
        substractItemProps: (item)=>{
            let action ={
                type: 'DEDUCT_ITEM',
                deductedItem: item
            };
            dispatch(action);
        },
        deleteItemProps:(item)=>{
            let action={
                type: "DELETE_ITEM",
                deletedItem: item
            };
            dispatch(action);
        }
}
}
// SET new State and send to STORE or REDUCER
/**
 * 
 * 
 */
export default connect(mapStateToProps,mapDispatchToProps)(CartModal);
