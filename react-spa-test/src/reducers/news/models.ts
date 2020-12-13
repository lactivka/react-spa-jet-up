export interface News {
  data: NewsItem[];
  favorite: NewsItem[];
  loading: boolean;
  error: string | null | unknown;
}

export interface NewsData {
  articles: NewsItem[];
  status: number;
  totalResults: number;
  [x: string]: unknown;
}

export interface NewsItem {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
  favorite?: boolean;
}
