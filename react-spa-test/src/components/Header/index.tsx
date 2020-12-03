import { Button } from 'antd';
import * as React from 'react';
import { LoginOutlined } from '@ant-design/icons';
import './index.scss';

const Header: React.FC = () => {
  return (
    <header>
      <h1 className="app-header">Weather&amp;News</h1>
      <Button
        type="primary"
        shape="round"
        icon={<LoginOutlined />}
        size="middle"
        className="logIn-btn"
      >
        Log in
      </Button>
    </header>
  );
};

export default Header;
