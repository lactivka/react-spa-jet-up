import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { BackTop, Empty, Skeleton } from 'antd';
import './index.scss';
import NewsCard from 'components/NewsCard';

const News: React.FC = () => {
  const news = useSelector((state: RootState) => state.news.data);
  const { loading } = useSelector((state: RootState) => state.news);

  return (
    <Skeleton loading={loading} active>
      <div className="news">
        {news.length > 0 &&
          news.map((item) => {
            return (
              <NewsCard
                item={item}
                key={`${Date.now() * Math.random()} + ${item.title.slice(10)}`}
              />
            );
          })}
        {news.length === 0 && <Empty description="No news" />}
      </div>
      <BackTop>
        <div className="backtop-button">UP</div>
      </BackTop>
    </Skeleton>
  );
};

export default News;
