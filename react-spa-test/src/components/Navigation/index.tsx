import * as React from 'react';
import { Link, Route, useLocation } from 'react-router-dom';
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

const { TabPane } = Tabs;

const Navigation: React.FC = () => {
  const location = useLocation();
  const currentLocation = () => location.pathname;

  const callback = (key: string) => {
    console.log(key);
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
      </Tabs>
    </div>
  );
};

export default Navigation;
