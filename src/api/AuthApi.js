import { Constants } from '../constant/Constant';
import { LOGIN_SUCCESS } from '../reducer/AuthReduce';
import { setValueToStorage } from '../until/Storage';
import { client } from './Client';

export class AuthApi {
  login = (emailUser, passwordUser, dispatch) => {
    client
      .post('/customers/login', {email: emailUser, password: passwordUser})
      .then(response => {
        setValueToStorage(Constants.TOKEN, response.accessToken);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  register = ({userInfor}) => {
    client
      .post('/customers', userInfor)
      .then(response => {
        setValueToStorage(Constants.TOKEN, response.accessToken);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
