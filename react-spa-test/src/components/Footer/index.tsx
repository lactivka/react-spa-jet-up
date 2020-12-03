import * as React from 'react';
import { GithubFilled, HeartTwoTone } from '@ant-design/icons';
import './index.scss';
import { Button } from 'antd';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="gitHub-link">
          &lt;&gt;&nbsp;&nbsp; with&nbsp;&nbsp; <HeartTwoTone />
          &nbsp;&nbsp; by&nbsp;&nbsp;
          <Button
            type="link"
            icon={<GithubFilled />}
            href="https://github.com/lactivka/react-spa-jet-up"
            target="_blank"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
