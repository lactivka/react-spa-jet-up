export interface News {
  data: NewsItem[];
  favorite: NewsItem[];
  loading: boolean;
}

export interface NewsItem {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}