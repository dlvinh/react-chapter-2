import React, { Component } from 'react'
import { connect } from 'react-redux';
class AddOnTable extends Component {
    renderMenuTable = () => {
        // console.log("renderTable",this.props.burgerProps)
        return this.props.burgerProps.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td><button className='btn btn-warning' disabled={item.amount === 0 ? true : false} onClick={this.props.onDeleteItem.bind(this, item)}>-</button><span className='m-2'>{item.amount}</span><button className='btn btn-success' onClick={this.props.onAddQuantity.bind(this, item)}>+</button></td>
                    <td>{item.price}</td>
                    <td>{item.price * item.amount}</td>
                </tr>
            )
        })
    }
    

    render() {
        // console.log(this.props.burgerProps)
        let total = 0;
        for(let i =0; i < this.props.burgerProps.length; i++){
            total = total + (this.props.burgerProps[i].price * this.props.burgerProps[i].amount)
        }       
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Food</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMenuTable()}
                        <td colspan="4" style={{textAlign:"right",fontSize:20}}>TOTAL: {total}</td>
                    </tbody>
                   
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        burgerProps: state.appStateReducer.burger
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddQuantity: (item) => {
            let action = {
                type: "ADD_ITEM",
                addedItem: item
            }
            dispatch(action)
        },
        onDeleteItem: (item) => {
            let action = {
                type: "DELETE_ITEM",
                deletedItem: item
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOnTable)
