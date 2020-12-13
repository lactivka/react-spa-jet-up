import * as React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './index.scss';
import { HomeOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleLoginForm } from 'reducers/loginForm';
import { emailPattern, error, success } from '@constants/constants';
import { setIsAuth } from 'reducers/authorization';

const Authorization = ({ path }: { path: string }): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 10 },
  };

  const exitBtnClickHandler = () => {
    dispatch(toggleLoginForm({ isLoginFormOpen: false }));
  };

  const onFinish = () => {
    localStorage.setItem('jwt-token', 'true');
    success();
    dispatch(setIsAuth(true));
    exitBtnClickHandler();
    history.push(path);
  };

  const onFinishFailed = () => {
    error();
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="login-form"
    >
      <Form.Item {...tailLayout} className="exit-item">
        <Link to="/">
          <Button
            danger
            shape="circle"
            icon={<HomeOutlined />}
            className="login-form-exit-button"
            onClick={exitBtnClickHandler}
          />
        </Link>
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            min: 2,
            message: 'Please input correct email!',
            pattern: emailPattern,
          },
        ]}
      >
        <Input placeholder="admin@admin.com" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="12345" />
      </Form.Item>
      <Form.Item
        {...tailLayout}
        name="remember"
        valuePropName="checked"
        className="checkbox-item"
      >
        <Checkbox className="login-form-checkbox">Remember me</Checkbox>
      </Form.Item>
      <Form.Item {...tailLayout} className="submit-item">
        <Button
          type="primary"
          htmlType="submit"
          shape="round"
          className="login-form-submit-button"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Authorization;
