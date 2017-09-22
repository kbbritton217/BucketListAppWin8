import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
// import {
// 	AUTH_USER,
// 	UNAUTH_USER
// } from '../actions/types';

//Define the properties of our Application State here
const rootReducer = combineReducers({
	form: formReducer,
	auth: authReducer,
	posts: PostsReducer
	//state: (state = {}) => state
});

export default rootReducer;
