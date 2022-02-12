import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartAppReducer from '../Redux/CartAppReducer';
export default class ProductInfo extends Component {
    render() {
        return <div className='row'>
             <div className="col-4">
            <h2>{this.props.item.tenSP}</h2>
            <img className="card-img-top" src={this.props.item.hinhAnh} alt="Card image cap" />
        </div>
        <div className='col-8'>
            <h2>Description</h2>
            <table className="table text-left">
                <tbody>
                    <tr>
                        <td>Screen Resolution</td>
                        <td>{this.props.item.tenSP}</td>
                    </tr>
                    <tr>
                        <td >Operation System</td>
                        <td>{this.props.item.tenSP}</td>
                    </tr>
                    <tr>
                        <td >Front Camera</td>
                        <td>{this.props.item.tenSP}</td>
                    </tr>
                    <tr>
                        <td>Camera</td>
                        <td>{this.props.item.tenSP}</td>
                    </tr>
                    <tr>
                        <td>Ram</td>
                        <td>{this.props.item.tenSP}</td>
                    </tr>
                    <tr>
                        <td >Rom</td>
                        <td>{this.props.item.tenSP}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>;
    }
}

