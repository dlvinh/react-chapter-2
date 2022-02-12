/**
 * STORE where to store all states of appliaction
 * Components now dont have to interact with parents and children relationship via props anymore
 * instead, all components will interact with STORE to upload state, get state to change UI
 * 
 */

/**
 *  AFTER HAVING STORE, 
 * S1: Create or Set up STORE in here (Reducer) with combineReducers function
 * S2: Connect to root index Js (index.js) 
 * S3: Create State on AppReducer.js so that in HERE we can use it
 * S4: USe Component enter STORE And get State
 */

// S1
import {combineReducers} from "redux";
import CartAppReducer from '../Redux/CartAppReducer'
import ProducInfoReducPer from "./ProductInfoReducer";
const rootReducer = combineReducers({
    cartState: CartAppReducer,
    itemState: ProducInfoReducPer
});

export default rootReducer;