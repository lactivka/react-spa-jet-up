import { BackTop } from 'antd';
import NewsCard from 'components/NewsCard';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import './index.scss';

const Profile: React.FC = () => {
  const { favorite } = useSelector((state: RootState) => state.news);

  return (
    <>
      <div className="profile">
        {favorite.map((item) => {
          return <NewsCard item={item} />;
        })}
      </div>
      <BackTop>
        <div className="backtop-button">UP</div>
      </BackTop>
    </>
  );
};

export default Profile;
