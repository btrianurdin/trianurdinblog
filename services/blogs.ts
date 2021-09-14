import { IPost } from '../types/Blogs';
import axios from './axios';

export const getBlogPosts = async (): Promise<IPost[]> => {
  const ENDPOINT = '/blogs';
  const QUERY = '?_sort=published_at:DESC';
  const response = await axios.get(`${ENDPOINT}${QUERY}`);

  return response.data;
};

export const getBlogPost = async (slug: string): Promise<IPost> => {
  const ENDPOINT = '/blogs';
  const QUERY = `?slug=${slug}`;
  const response = await axios.get(`${ENDPOINT}${QUERY}`);

  return response.data[0];
};

export const getNull = (): null => (null);
