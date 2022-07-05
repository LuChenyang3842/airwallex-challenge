import axios from 'axios';
import { message } from 'antd';

export const timeoutMessage =
  'Request time-out, please check the network or contact the administrator';
export const serverErrorMessage = 'Server error, Please contact admin！';

const service = axios.create({
  withCredentials: false,
  timeout: 20000, // 20s timeout
  validateStatus() {
    return true;
  },
  baseURL: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com',
});

// request interceptor
service.interceptors.request.use((config) => {
  config.headers = {
    'Content-Type': 'application/json;charset=utf-8',
  };
  return config;
});

// response interceptor
service.interceptors.response.use(
  (response) => {
    const status = response.status;
    if (status < 400) {
      return response;
    } else {
      return Promise.reject(response);
    }
  },
  (err) => {
    err.message = timeoutMessage;

    message.error(err.message);
    return Promise.reject(err);
  },
);

export default service;
