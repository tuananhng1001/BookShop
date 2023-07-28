import { login } from '../api/AuthApi';
import { getValueFromStorage } from '../until/Storage';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const {Constants} = require('../constant/Constant');

const initalState = {
  isAuthenticated: getValueFromStorage(Constants.TOKEN) == null ? true : false,
  user: getValueFromStorage(Constants.USER),
};

export default function loginReducer(state = initalState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        user: action.payload.customer,
      };
    case LOGOUT_SUCCESS:
      return {
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}

export const loginWork = (emailUser, passwordUser,dispatch) => {
  console.log('logging')
  login(emailUser, passwordUser, dispatch);
};
