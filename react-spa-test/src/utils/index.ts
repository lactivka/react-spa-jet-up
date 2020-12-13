import axios from 'axios';
import { NewsItem } from 'reducers/news/models';

export default axios.create({
  responseType: 'json',
});

export const defineTooltip = (
  isAuth: boolean,
  favorite: NewsItem[],
  item: NewsItem,
): string => {
  if (isAuth) {
    if (favorite.includes(item)) return 'Remove from favorite';
    return 'Add to favorite';
  }
  return 'Authorize to select favorite news';
};
