const burgerState = { 
    burger: [
        {name:"salad",amount:1,price: 10},
        {name:"cheese",amount:1,price: 20},
        {name:"beef",amount:1,price: 50}
    ], // [{name:'salad',amount:1},{name:'c heese',amount:1},{name:'beef',amount:1}] 
    
    menu: { salad: 10, cheese: 20, beef: 55 }, 
    
    total: 85 
}

const burgerAppReducer = (state = burgerState,action) =>{
    switch(action.type){
        case "ADD_ITEM":{
            // console.log(action.addedItem)
            let cloneState = [...state.burger];
            // console.log(cloneState)
            let index = cloneState.findIndex(item => item.name === action.addedItem.name)
            cloneState[index].amount += 1;
            state.burger = cloneState;
            // console.log("newState",state);
            return {...state};
        };
        case "DELETE_ITEM":{
            let cloneState = [...state.burger];
            let index = cloneState.findIndex(item => item.name === action.deletedItem.name);
            cloneState[index].amount -=1;
            state.burger =cloneState;
            return {...state};
        }
        default: return {...state};
    }
} 

export default burgerAppReducer