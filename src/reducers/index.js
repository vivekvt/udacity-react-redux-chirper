import { combineReducers } from 'redux';
import authUser from './authUser';
import tweets from './tweets';
import users from './users';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    authUser,
    users,
    tweets,
    loadingBar: loadingBarReducer,
})