import {combineReducers} from 'redux';
import burgerAppReducer from './burgerAppReducer';

const rootReducer  = combineReducers({
    appStateReducer: burgerAppReducer
})

export default rootReducer;