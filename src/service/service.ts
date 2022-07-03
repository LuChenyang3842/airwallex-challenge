import axios from 'axios';
import { message } from 'antd';

const service = axios.create({
  withCredentials: false,
  timeout: 20000, // 20s timeout
  validateStatus() {
    return true;
  },
});
service.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=utf-8';

// request interceptor
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    err.message = 'Server error, Please contact admin！';
    message.error(err.message);
    return Promise.reject(err);
  },
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const status = response.status;
    if (status < 200 || (status >= 300 && status != 401 && status != 500)) {
      if (typeof response.data === 'string') {
        response.data = { msg: status };
      } else {
        response.data.msg = status;
      }
      return response;
    } else if (status == 200) {
      return response;
    } else if (status == 500) {
      response.data = { msg: status };
      return response;
    }
  },
  (err) => {
    err.message =
      'Request time-out, please check the network or contact the administrator';

    message.error(err.message);
    return Promise.reject(err);
  },
);

export default service;
