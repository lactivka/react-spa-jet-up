export interface News {
  data: NewsItem[];
  favorite: NewsItem[];
  loading: boolean;
}

export interface NewsData {
  data: NewsItem[];
  status: number;
  totalResults: number;
  [x: string]: unknown;
}

export interface NewsItem {
  // source: {
  //   id: string;
  //   name: string;
  // };
  // author: string;
  // title: string;
  // description: string;
  // url: string;
  // urlToImage: string;
  // publishedAt: string;
  // content: string;
  // favorite?: boolean;
  author: string;
  category: string;
  country: string;
  description: string;
  image: string;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
  favorite?: boolean;
}
