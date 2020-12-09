import { message } from 'antd';

export const API_KEY = '144ef1280a9f452b91b552e92d353028';

export const getHeadlinesForUAurl = `top-headlines?country=ua&apiKey=${API_KEY}`;

export const emailPattern = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);

export const error = () => {
  message.error('Invalid email or password');
};

export const warning = () => {
  message.warning('To visit this page, authorize, please.');
};

export const success = () => {
  message.success('Authorized!');
};
