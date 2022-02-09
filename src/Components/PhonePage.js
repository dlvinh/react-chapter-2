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
    onAddToCartHandler = (addedItem)=>{
        console.log(addedItem)
        let newCartItem = {
            maSP: addedItem.maSP,
            hinhAnh: addedItem.hinhAnh,
            tenSP: addedItem.tenSP,
            donGia: addedItem.giaBan,
            soLuong: 1,
        }
        let index= this.state.cartList.findIndex(item => item.maSP === addedItem.maSP)
        console.log("index",index);
        if (index === -1){
            this.state.cartList.push(newCartItem);
            console.log(this.state.cartList)
        }else{
            this.state.cartList[index].soLuong = this.state.cartList[index].soLuong + 1;
            console.log("!== -1",this.state.cartList)
            
        }
        console.log(this.state.cartList);
        this.setState ({
            ...this.state.phoneInfo,
            cartList: this.state.cartList
        })
    }

    onSubstractQuantityHandler=(editedItem)=>{
        let index = this.state.cartList.findIndex(item => item.maSP === editedItem.maSP );
        console.log("ajkhsdjkha")
        if(editedItem.soLuong > 1){
        
            this.state.cartList[index].soLuong =  +this.state.cartList[index].soLuong - +1;
        }else{
            this.state.cartList.splice(index,1);
        }
        console.log(this.state.cartList)
        this.setState({
            ...this.state.phoneInfo,
            cartList:this.state.cartList
        })
    }
    onAdditionQuantityHandler = (item)=>{

    }
    render() {
        return <div>
            <NavCart cartStateProps={this.state.cartList} ToggleCartHandler={this.onToggleCartHandler}></NavCart>
            <PhoneList phoneList={this.phoneData} ReadmoreHandler={this.onReadmoreHandler} AddToCardHandler={this.onAddToCartHandler} ></PhoneList>
            {this.renderPhoneInfo()}
            <CartModal cartListProps={this.state.cartList} SubstractQuantityHandler={this.onSubstractQuantityHandler} AdditionQuantityHandler={this.onAdditionQuantityHandler}/>
        </div>;
    }
}