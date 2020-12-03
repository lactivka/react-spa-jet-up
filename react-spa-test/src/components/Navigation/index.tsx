import * as React from 'react';
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
  const callback = (key: string) => {
    console.log(key);
  };

  return (
    <div className="navigation">
      <Tabs size="large" centered defaultActiveKey="1" onChange={callback}>
        <TabPane
          tab={
            <span>
              <HomeFilled />
              Home
            </span>
          }
          key="1"
        >
          <Home />
        </TabPane>
        <TabPane
          tab={
            <span>
              <CloudFilled />
              Weather
            </span>
          }
          key="2"
        >
          <Weather />
        </TabPane>
        <TabPane
          tab={
            <span>
              <ReadFilled />
              News
            </span>
          }
          key="3"
        >
          <News />
        </TabPane>
        <TabPane
          tab={
            <span>
              <StarFilled />
              Profile
            </span>
          }
          key="4"
        >
          <Profile />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Navigation;
