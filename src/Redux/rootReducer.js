import {combineReducers} from 'redux';
import appReducer from './appReducer';

const rootReducer = combineReducers({
    appStateReducer: appReducer
})

export default rootReducer;