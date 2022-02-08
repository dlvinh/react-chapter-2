import React, { Component } from 'react';

export default class CartModal extends Component {
    cartList = this.props.cartListProps;
    newCartList = [];
    state = {
        cartItem:[]
    }
    renderCartTable = () => {
        console.log(this.cartList);
        // return this.cartList.filter((item, index) => {
        //     let newItem = this.cartList.indexOf(index).maSP === item.maSP;
        //     return <tr>
        //         <td scope="row"><img src={newItem.hinhAnh} alt="..." /></td>
        //         <td>{newItem.tenSP}</td>
        //         <td>{newItem.giaBan}</td>
        //         <td>1</td>
        //     </tr>
        // })
        let newCartList = this.cartList.filter((item, index) => {
            return this.cartList.indexOf(item) === index;
        }, () => {

        })
        //  return newCartList.map((item, index) => {
        //         return <tr>
        //             <td className='align-middle' scope="row"><img src={item.hinhAnh} alt="..." style={{width:"50px"}} /></td>
        //             <td className='align-middle'>{item.tenSP}</td>
        //             <td className='align-middle'>1</td>
        //             <td className='align-middle'>{item.giaBan.toLocaleString()}</td>
        //         </tr>
        //     })
        // return this.cartList.map((item, index) => {
        //     return <tr >
        //         <td className='align-middle' scope="row"><img src={item.hinhAnh} alt="..." style={{width:"50px"}} /></td>
        //         <td className='align-middle'>{item.tenSP}</td>
        //         <td className='align-middle'>1</td>
        //         <td className='align-middle'>{item.giaBan.toLocaleString()}</td>
        //     </tr>
        // })
        this.cartList.map((item,index)=>{
            if(this.cartList.indexOf(item) === index){

            }else{
                
            }
        })

    }
    render() {
        return <div>
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
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
                                        <th>Unit</th>
                                        <th>Price</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <tr>
                                        <td scope="row"></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td scope="row"></td>
                                        <td></td>
                                        <td></td>
                                    </tr> */}
                                    {this.renderCartTable()}
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
