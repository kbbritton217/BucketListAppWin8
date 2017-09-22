import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import authReducer from './auth_reducer';
import {
	AUTH_USER,
	UNAUTH_USER
} from '../actions/types';

//Define the properties of our Application State here
const rootReducer = combineReducers({
	form,
	auth: authReducer
	//state: (state = {}) => state
});

export default rootReducer;
