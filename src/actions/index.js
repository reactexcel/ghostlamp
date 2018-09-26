import { createAction } from 'redux-actions';
import * as constants from '../constant/index';

//login
export const loginRequest = createAction(constants.LOGIN_REQUEST);
export const loginSuccess = createAction(constants.LOGIN_SUCCESS);
export const loginError = createAction(constants.LOGIN_ERROR);

// Signup
export const signupRequest = createAction(constants.SIGNUP_REQUEST);
export const signupSuccess = createAction(constants.SIGNUP_SUCCESS);
export const signupError = createAction(constants.SIGNUP_ERROR);
