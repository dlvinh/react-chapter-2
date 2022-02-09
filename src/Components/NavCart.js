import React from 'react';

export default function NavCart(props) {
    let cartList  = props.cartStateProps;
    let totalCartItem  = 0;
    cartList.map((item,index)=>{
        totalCartItem = item.soLuong + totalCartItem;
    })
    
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">My Phone</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Phone<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Car<span className="sr-only"></span></a>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0" data-toggle="modal" data-target="#modelId" style={{cursor:"pointer"}}>
                    <i className="fa fa-shopping-cart"></i>
                    <p>{totalCartItem}</p>
                </div>
            </div>
        </nav>

    </div>;
}
