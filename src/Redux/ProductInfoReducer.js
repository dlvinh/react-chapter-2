const itemState = {
    
};

const ProducInfoReducPer = (state = itemState, action) =>{
    switch(action.type){
        case "READ_MORE":{
            let readItem = action.readItem;
            state = readItem;
            console.log("readItem",readItem);
            console.log("state",state)
            return {...state};
        }break;
        default: return {...state};
    }
};


export default ProducInfoReducPer;
