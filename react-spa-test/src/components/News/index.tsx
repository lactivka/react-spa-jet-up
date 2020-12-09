import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { BackTop, Button, Card, Skeleton, Tooltip } from 'antd';
import './index.scss';
import { Link } from 'react-router-dom';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { NewsItem } from 'reducers/news/models';
import { addToFavorite, deleteFromFavorite } from 'reducers/news';

const { Meta } = Card;

const News: React.FC = () => {
  const dispatch = useDispatch();
  const news = useSelector((state: RootState) => state.news.data);
  const { favorite } = useSelector((state: RootState) => state.news);
  const { loading } = useSelector((state: RootState) => state.news);
  const isAuth = useSelector((state: RootState) => state.authorization);

  const clickHandler = (newsItem: NewsItem) => {
    if (favorite.includes(newsItem)) dispatch(deleteFromFavorite(favorite.indexOf(newsItem)));
    else dispatch(addToFavorite(newsItem));
  }

  return (
    <Skeleton loading={loading} active>
      <div className="news">
        {news.map((item) => {
          const publishDate = item.publishedAt.split('T');
          return (
            <div
              className="news-card-container"
              key={Date.now() * Math.random()}
            >
              <div className="news-card">
                <div className="image-container">
                  <Tooltip title={isAuth ? 'Add to favorite' : 'Authorize to select favorite news'}>
                    <Button
                      icon={favorite.includes(item) ? <StarFilled className="filled-icon" /> : <StarOutlined />}
                      className="news-favorite-icon"
                      disabled={!isAuth}
                      onClick={() => clickHandler(item)}
                    />
                  </Tooltip>
                  <img
                    src={item.urlToImage}
                    alt={item.source.name}
                    className="news-image"
                  />
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="news-card-title"
                >
                  <Tooltip title={item.title}>
                    <h3>{item.title}</h3>
                  </Tooltip>
                </a>
                <div className="source-info">
                  {item.source.name.includes('.') ? (
                    <a
                      href={`https://www.${item.source.name}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="author">{item.source.name}</p>
                    </a>
                  ) : (
                    <p className="author">{item.source.name}</p>
                  )}
                  <p className="news-publish-date">{`${
                    publishDate[0]
                  } / ${publishDate[1].slice(0, -1)}`}</p>
                </div>
                <p className="news-description">{item.description}</p>
              </div>
              <p className="news-divider">___________________</p>
            </div>
          );
        })}
      </div>
      <BackTop>
        <div className="backtop-button">UP</div>
      </BackTop>
    </Skeleton>
  );
};

export default News;
