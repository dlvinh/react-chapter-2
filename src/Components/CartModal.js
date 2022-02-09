import React, { Component } from 'react';

export default class CartModal extends Component {
    cartList = this.props.cartListProps.cartList;


    renderCartTable = () => {
        console.log(this.props.cartListProps)

        console.log(this.cartList);
        return this.cartList.map((item, index) => {
            return <tr >
                <td className='align-middle' scope="row"><img src={item.hinhAnh} alt="..." style={{ width: "50px" }} /></td>
                <td className='align-middle'>{item.tenSP}</td>
                <td className='align-middle'><button className='minusBtn btn btn-dark' onClick={this.props.SubstractQuantityHandler.bind(this, item)}>-</button> {item.soLuong} <button className='additionBtn btn btn-dark' onClick={this.props.AdditionQuantityHandler.bind(this, item)}>+</button></td>
                <td className='align-middle'>{item.subTotal.toLocaleString()}</td>
                <td className='align-middle'><button className='deleteBtn btn btn-danger' onClick={this.props.DeleteItemOnCart.bind(this, item)}>X</button></td>
            </tr>
        })
    }
    render() {
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
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody style={{fontSize:"18px", fontWeight:"bold"}}>
                                    {this.renderCartTable()}
                                    <tr>
                                        <th colspan="4" className='text-right'>
                                            Total: {this.props.cartListProps.cartTotal.toLocaleString()}
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
