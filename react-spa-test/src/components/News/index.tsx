import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { BackTop, Empty, Skeleton } from 'antd';
import './index.scss';
import NewsCard from 'components/NewsCard';
import staticData from '@constants/news_static_data';
import { modalWarning } from '@constants/constants';
import { useEffect } from 'react';
import { removeError } from 'reducers/news';

const News: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.news,
  );
  const news = data.length > 0 ? data : staticData;

  useEffect(() => {
    if (error !== null) {
      modalWarning(error as string);
      dispatch(removeError(null));
    }
  });

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
