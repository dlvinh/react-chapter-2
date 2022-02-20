import React, { Component } from 'react'
import '../Style/style.css';
import AddOnTable from './AddOnTable';
import Item from './Item';

import { connect } from "react-redux";

class BurgerApp extends Component {
    renderItem = () => {
        return this.props.burgerProps.map((item, index) => {
            return <Item amount={item.amount} name={item.name}></Item>
        })
    }
    render() {
        return (
            <div className='container-fluid'>
                <h1>REDUX - CONTEXT API PRACTISE</h1>
                <div className='row'>

                    <div className='col-8'>
                        <h2>BURGER</h2>
                        <div className='breadTop' />
                        <div className='add-on-container'>
                            {/* <Item></Item> */}
                            {this.renderItem()}
                        </div>
                        <div className='breadBottom' />
                    </div>
                    <div className='col-4'>
                        <h2>Menu</h2>
                        <AddOnTable></AddOnTable>
                    </div>
                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        burgerProps: state.appStateReducer.burger
    }
}

export default connect(mapStateToProps)(BurgerApp);