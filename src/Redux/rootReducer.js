import { combineReducers } from "redux";
import diceAppReducer from "./diceAppReducer";

const rootReducer = combineReducers({
    gameStateReducer: diceAppReducer
});

export default rootReducer;