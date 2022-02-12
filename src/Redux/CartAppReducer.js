

// WHERE TO STORE STATE OF APPLICATION on STORE

// S3: create State for entire application so that Reducer (STORE) can use it
const cartState = {
    cartList: [],
    cartTotal: 0,
};

const CartAppReducer = (state = cartState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            console.log(action.addedProduct);
            let newItem = {
                maSP: action.addedProduct.maSP,
                hinhAnh: action.addedProduct.hinhAnh,
                tenSP: action.addedProduct.tenSP,
                donGia: action.addedProduct.giaBan,
                soLuong: 1,
                subTotal: action.addedProduct.giaBan
            }
            let index = state.cartList.findIndex(product => product.maSP === newItem.maSP);
            console.log(index)
            if (index !== -1) {
                state.cartList[index].soLuong += 1;
                state.cartList[index].subTotal = state.cartList[index].soLuong * state.cartList[index].donGia;
            } else {
                state.cartList.push(newItem);
            }
            state.cartList = [...state.cartList];
            console.log(state)
            return { ...state };
        };break;
        case "DEDUCT_ITEM":{
            console.log('deduct item: ', action.deductedItem);
            let index = state.cartList.findIndex(item => item.maSP === action.deductedItem.maSP);
            state.cartList[index].subTotal = state.cartList[index].subTotal - state.cartList[index].donGia;
            console.log(index);
            if (action.deductedItem.soLuong > 1){
                state.cartList[index].soLuong -= 1;
            }else{
                state.cartList.splice(index,1);
            }
           
            state.cartList = [...state.cartList];
            console.log(state.cartList)
            return state;
        }; break;
        case "DELETE_ITEM":{
            let index = state.cartList.findIndex(item => item.maSP === action.deletedItem.maSP);
            state.cartList.splice(index,1);
            state.cartList = [...state.cartList];
            return state;
        };break;
        default: return { ...state };
    }
    return { ...state };
};


export default CartAppReducer;
