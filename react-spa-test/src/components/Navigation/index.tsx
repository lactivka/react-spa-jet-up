import * as React from 'react';
import { Link, Route, useHistory, useLocation } from 'react-router-dom';
import './index.scss';
import { Tabs } from 'antd';
import {
  CloudFilled,
  HomeFilled,
  ReadFilled,
  StarFilled,
} from '@ant-design/icons';
import Home from 'components/Home';
import Weather from 'components/Weather';
import News from 'components/News';
import Profile from 'components/Profile';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { warning } from '@constants/constants';

const { TabPane } = Tabs;

const Navigation: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const currentLocation = () => location.pathname;
  const isAuth = useSelector((state: RootState) => state.authorization);

  const callback = (key: string): void => {
    if ((key === '/profile' || key === '/weather') && !isAuth) {
      warning();
      history.push('/login');
    }
  };

  return (
    <div className="navigation">
      <Tabs
        size="large"
        centered
        activeKey={currentLocation()}
        defaultActiveKey="/"
        onChange={callback}
      >
        <TabPane
          tab={
            <Link to="/">
              <span>
                <HomeFilled />
                Home
              </span>
            </Link>
          }
          key="/"
        >
          <Route path="/" component={Home} />
        </TabPane>
        <TabPane
          tab={
            <Link to="/news">
              <span>
                <ReadFilled />
                News
              </span>
            </Link>
          }
          key="/news"
        >
          <Route path="/news" component={News} />
        </TabPane>
        <TabPane
          tab={
            <Link to="/profile">
              <span>
                <StarFilled />
                Profile
              </span>
            </Link>
          }
          key="/profile"
        >
          <Route path="/profile" component={Profile} />
        </TabPane>
        <TabPane
          tab={
            <Link to="/weather">
              <span>
                <CloudFilled />
                Weather
              </span>
            </Link>
          }
          key="/weather"
        >
          <Route path="/weather" component={Weather} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Navigation;
