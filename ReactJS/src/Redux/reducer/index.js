import categoryReducer from './Category';
import postReducer from './Posts'
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    category: categoryReducer,
    posts:postReducer,
});

export default rootReducers;