import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../constant';

const initialState = {
    login:{
        data:"",
        isLoading:false,
        isSuccess:false,
        isError:false,
        error:""
    }
}

const loginRequest = (state, action) => update(state, {
    login: {
         isLoading: {$set: true},
         },
  });

  const loginSuccess = (state, action) => update(state, {
    login: {
         isLoading: {$set: false},
         isSuccess: {$set: true },
         data: {$set: action.payload}
         },
  });

  const loginFailed = (state, action) => update(state, {
    login: {
         isLoading: {$set: false},
         isError: {$set: true },
         error: {$set: action.payload}
         },
  });

export default handleActions({
    [constants.LOGIN_REQUEST]: loginRequest,
    [constants.LOGIN_SUCCESS]: loginSuccess,
    [constants.LOGIN_FAILED]: loginFailed,
  
  }, initialState);