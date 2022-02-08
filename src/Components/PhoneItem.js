import React from 'react';

export default function PhoneItem(props) {
    let { tenSP, giaBan, hinhAnh } = props.phoneItemProps;
    return <div className='col-4'>
        <div className="card text-align">
            <img className="card-img-top" src={hinhAnh} alt="..." style={{minHeight:"350px"}} />
            <div className="card-body">
                <h4 className="card-title">{tenSP}</h4>
                <p className="card-text">{giaBan.toLocaleString()}</p>
                <div className='d-flex justify-content-around'>
                    <button type="button" className="btn btn-primary" onClick={props.RenderReadmoreHandler.bind(this, props.phoneItemProps)}>Read more</button>
                    <button type="button" className="btn btn-primary" onClick={props.AddToCartHandler.bind(this,props.phoneItemProps)} >Add Cart</button>
                </div>

            </div>
        </div>
    </div>;
}
