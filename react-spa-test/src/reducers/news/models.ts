export interface News {
  data: NewsItem[];
  favorite: NewsItem[];
  loading: boolean;
  error: string | null | unknown;
}

export interface NewsData {
  data: NewsItem[];
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
  image: string;
  language: string;
  published_at: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
  favorite?: boolean;
}
