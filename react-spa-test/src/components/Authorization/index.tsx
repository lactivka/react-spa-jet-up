import * as React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import './index.scss';
import { HomeOutlined } from '@ant-design/icons';
import { Link, Route, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginForm } from 'reducers/loginForm';
import Home from 'components/Home';
import emailPattern from '@constants/constants';
import { setIsAuth } from 'reducers/authorization';
import { RootState } from 'store';

const Authorization: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const [form] = Form.useForm();
  const isAuth = useSelector((state: RootState) => state.authorization);
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 10 },
  };
  const success = () => {
    message.success('Authorized!');
  };
  const onFinish = (values: string) => {
    console.log('Success:', values);
    localStorage.setItem('jwt-token', 'true');
    success();
    dispatch(setIsAuth(true));
    history.push('/');
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<string>) => {
    console.log('Failed:', errorInfo);
  };
  // const exitBtnClickHandler = () => {
  //   dispatch(toggleLoginForm({ isLoginFormOpen: false }));
  // };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      className="login-form"
    >
      <Form.Item {...tailLayout} className="exit-item">
        <Link to="/">
          <Button
            danger
            shape="circle"
            icon={<HomeOutlined />}
            className="login-form-exit-button"
            // onClick={exitBtnClickHandler}
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
