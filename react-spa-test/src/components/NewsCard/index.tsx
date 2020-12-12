import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { Button, Tooltip } from 'antd';
import './index.scss';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { NewsItem } from 'reducers/news/models';
import { addToFavorite, deleteFromFavorite } from 'reducers/news';
import { defineTooltip } from 'utils';
import NewsCardProps from './models';

const NewsCard = ({ item }: NewsCardProps): JSX.Element => {
  const dispatch = useDispatch();
  const { favorite } = useSelector((state: RootState) => state.news);
  const isAuth = useSelector((state: RootState) => state.authorization);
  const publishDate = item.published_at.split('T');
  const iconTooltip = defineTooltip(isAuth, favorite, item);

  const clickHandler = (newsItem: NewsItem) => {
    if (favorite.includes(newsItem))
      dispatch(deleteFromFavorite(favorite.indexOf(newsItem)));
    else dispatch(addToFavorite(newsItem));
  };

  return (
    <div className="news-card-container">
      <div className="news-card">
        <div className="image-container">
          <Tooltip title={iconTooltip}>
            <Button
              icon={
                favorite.includes(item) ? (
                  <StarFilled className="filled-icon" />
                ) : (
                  <StarOutlined />
                )
              }
              className="news-favorite-icon"
              disabled={!isAuth}
              onClick={() => clickHandler(item)}
            />
          </Tooltip>
          <img src={item.image} alt={item.source} className="news-image" />
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
          {item.source.includes('.') ? (
            <a
              href={`https://www.${item.source}`}
              target="_blank"
              rel="noreferrer"
            >
              <p className="author">{item.source}</p>
            </a>
          ) : (
            <p className="author">{item.source}</p>
          )}
          <p className="news-publish-date">{`${
            publishDate[0]
          } / ${publishDate[1].slice(0, -8)}`}</p>
        </div>
        <p className="news-description">{item.description}</p>
      </div>
      <p className="news-divider">___________________</p>
    </div>
  );
};

export default NewsCard;
