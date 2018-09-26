import { call, put } from "redux-saga/effects";
import { AsyncStorage } from "react-native"
import * as actions from "./index";
import fireAjax from "../services/index";
import CONFIG  from "../config";

export function* LoginUser(action) {
    console.log(action,'asdasdasd')
    try {
      const response = yield call(fireAjax, "POST", `${CONFIG.SIGNIN}`, {
        ...action.payload
      });
      if (response && response.status === 200) {
          const data = JSON.stringify(response.data);      
          AsyncStorage.setItem("data", data);
        yield put(actions.loginSuccess(response.data));
      } else if (response && response.error === 1) {
        yield put(actions.loginError(response));
      }
    } catch (e) {
      yield put(actions.loginError(e.response.data.message));
    }
  }

  export function* SignupUser(action) {
    console.log(action,'asdasdasd')
    // try {
    //   const response = yield call(fireAjax, "POST", `${CONFIG.SIGNIN}`, {
    //     ...action.payload
    //   });
    //   if (response && response.status === 200) {
    //       const data = JSON.stringify(response.data);      
    //       AsyncStorage.setItem("data", data);
    //     yield put(actions.loginSuccess(response.data));
    //   } else if (response && response.error === 1) {
    //     yield put(actions.loginError(response));
    //   }
    // } catch (e) {
    //   yield put(actions.loginError(e.response.data.message));
    // }
  }