export interface IPost {
  id?: number;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  cover?: any;
  published_at?: string;
}
