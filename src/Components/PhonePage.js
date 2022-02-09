import React, { Component } from 'react';
import NavCart from './NavCart';
import PhoneList from './PhoneList';
import PhoneInfo from './PhoneInfo';
import CartModal from './CartModal';


export default class PhonePage extends Component {
    phoneData = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2, Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },
        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },
        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5, 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ];
    state = {
        cartList: [],
        cartTotal: 0,
        phoneInfo: {},
    }

    onReadmoreHandler = (item) => {
        this.setState({
            ...this.state,
            cartList: this.state.cartList,
            phoneInfo: item,
        })
    }

    renderPhoneInfo = () => {
        if (Object.keys(this.state.phoneInfo).length === 0) {
            return <h2>Click to see more description</h2>
        } else {
            return <PhoneInfo phoneInfoProps={this.state.phoneInfo}></PhoneInfo>
        }
    }
    onAddToCartHandler = (addedItem) => {
        // console.log(addedItem)
        let newCartItem = {
            maSP: addedItem.maSP,
            hinhAnh: addedItem.hinhAnh,
            tenSP: addedItem.tenSP,
            donGia: addedItem.giaBan,
            soLuong: 1,
            subTotal: addedItem.giaBan,
        }
        let newTotal=0;
        let index = this.state.cartList.findIndex(item => item.maSP === newCartItem.maSP)
        
        if (index === -1) {
            newTotal = +this.state.cartTotal + newCartItem.subTotal;
            this.state.cartList.push(newCartItem);      
            // console.log(this.state.cartList)
        } else {
            this.state.cartList[index].soLuong = this.state.cartList[index].soLuong + 1;
            this.state.cartList[index].subTotal = this.state.cartList[index].donGia  * this.state.cartList[index].soLuong;
            newTotal = this.state.cartTotal + this.state.cartList[index].donGia
            
            // console.log("!== -1", this.state.cartList)
        }
        
        console.log(this.state);
        this.setState({
            ...this.state.phoneInfo,
            cartList: this.state.cartList,
            cartTotal: newTotal
        })
    }

    onSubstractQuantityHandler = (editedItem) => {
        let index = this.state.cartList.findIndex(item => item.maSP === editedItem.maSP);
        this.state.cartList[index].subTotal =this.state.cartList[index].subTotal  - this.state.cartList[index].donGia;
        this.state.cartTotal = this.state.cartTotal - this.state.cartList[index].donGia
        if (editedItem.soLuong > 1) {
            this.state.cartList[index].soLuong = +this.state.cartList[index].soLuong - +1;
        } else {
            this.state.cartList.splice(index, 1);
        }
        console.log(this.state.cartList)
        this.setState({
            ...this.state,
            cartList: this.state.cartList,
            cartTotal:this.state.cartTotal
        })
    }
    onDeleteItemOnCart = (deletedItem)=>{
        let index = this.state.cartList.findIndex(item => item.maSP === deletedItem.maSP);
        this.state.cartTotal = this.state.cartTotal - this.state.cartList[index].subTotal;
        this.state.cartList.splice(index, 1);
        this.setState({
            ...this.state.phoneInfo,
            cartList: this.state.cartList,       
            cartTotal: this.state.cartTotal
        })
    }

    render() {
        return <div>
            <NavCart cartStateProps={this.state.cartList} ToggleCartHandler={this.onToggleCartHandler}></NavCart>
            <PhoneList phoneList={this.phoneData} ReadmoreHandler={this.onReadmoreHandler} AddToCardHandler={this.onAddToCartHandler} ></PhoneList>
            {this.renderPhoneInfo()}
            <CartModal cartListProps={this.state} SubstractQuantityHandler={this.onSubstractQuantityHandler} AdditionQuantityHandler={this.onAddToCartHandler} DeleteItemOnCart={this.onDeleteItemOnCart}/>
        </div>;
    }
}