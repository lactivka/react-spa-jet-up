import { BackTop, Empty } from 'antd';
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
        {favorite.length > 0 &&
          favorite.map((item) => {
            return (
              <NewsCard
                item={item}
                key={`${Date.now() * Math.random()} + ${item.title.slice(10)}`}
              />
            );
          })}
        {favorite.length === 0 && (
          <Empty description="No selected favorite news" />
        )}
      </div>
      <BackTop>
        <div className="backtop-button">UP</div>
      </BackTop>
    </>
  );
};

export default Profile;
