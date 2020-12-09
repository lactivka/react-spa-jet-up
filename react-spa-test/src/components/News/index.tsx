import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Card, Skeleton } from 'antd';
import './index.scss';

const { Meta } = Card;

const News: React.FC = () => {
  const news = useSelector((state: RootState) => state.news.data);
  const { loading } = useSelector((state: RootState) => state.news);
  return (
    <div className="news">
      {news.map((item) => {
        return (
          <Skeleton loading={loading} active>
            <Card>
              <Meta title={item.title} description={item.description} />
            </Card>
          </Skeleton>
        );
      })}
    </div>
  );
};

export default News;
