import counterReducer from './counterReducer';
import {combineReducers} from 'redux';
import registerReducer from './registerReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    user_info : registerReducer
});

export default rootReducer;