import axios from 'axios';
import {Constants} from '../constant/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const dev = true;
export const apiRootDev = 'https://424f-116-97-243-66.ngrok-free.app';

export const client = axios.create({
  baseURL: apiRootDev,
  timeout: 30000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  },
});

// Add a request interceptor
client.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    var basicAuth = await AsyncStorage.getItem(Constants.TOKEN);
    if (basicAuth != '' && basicAuth != null) {
      config.headers.Authorization = basicAuth;
    } else {
    }
    console.log('Request:', config.method, config.url);
    console.log('Request Headers:', config.headers);
    console.log('Request Body:', config.data);
    console.log('Request Auth:' + basicAuth);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
client.interceptors.response.use(
  function (response) {
    if (response.data) return response.data;
    else {
      var message = 'We had trouble connecting to the server';
      if (response.data.message) message = response.data.message;
      return Promise.reject(response);
    }
  },
  function (error) {
    return Promise.reject(error);
  },
);
