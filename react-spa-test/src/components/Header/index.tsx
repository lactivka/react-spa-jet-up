import { Button } from 'antd';
import * as React from 'react';
import { Link, Route, useHistory, useLocation } from 'react-router-dom';
import { LoginOutlined } from '@ant-design/icons';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginForm } from 'reducers/loginForm';
import Authorization from 'components/Authorization';
import { RootState } from 'store';
import { setIsAuth } from 'reducers/authorization';
import { warning } from '@constants/constants';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const currentLocation = () => location.pathname;
  const isAuth = useSelector((state: RootState) => state.authorization);
  const { isLoginFormOpen } = useSelector(
    (state: RootState) => state.loginForm,
  );
  const clickHandler = () => {
    if(!isAuth) dispatch(toggleLoginForm({ isLoginFormOpen: true }));
    if (isAuth) {
      localStorage.setItem('jwt-token', 'false');
      dispatch(setIsAuth(false));
      if (currentLocation() === '/profile' || currentLocation() === '/weather') {
        warning();
        history.push('/login');
      }
    } else if (!isLoginFormOpen) {
      dispatch(toggleLoginForm({ isLoginFormOpen: true }));
      history.push('/login');
    }
  };

  return (
    <header>
      <h1 className="app-header">News&amp;Weather</h1>
      <Button
        type="primary"
        shape="round"
        icon={<LoginOutlined />}
        size="middle"
        className="logIn-btn"
        onClick={clickHandler}
      >
        {isAuth ? 'Log out' : 'Log in'}
      </Button>
    </header>
  );
};

export default Header;
