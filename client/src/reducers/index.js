import {combineReducers} from 'redux';
import Tables from './Tables';
import Data from './Data';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    Tables,
    Data,
    routing: routerReducer
});

export default rootReducer;
