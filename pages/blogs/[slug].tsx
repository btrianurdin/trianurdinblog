/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { Params } from 'next/dist/next-server/server/router';
import PageHeader from '../../components/PageHeader';
import axios from '../../lib/axios';
import Posts from '../../types/posts';
import dateFormat from '../../utils/dateFormat';
import { baseURL } from '../../lib/config';

type Props = {
  post: Posts[]
}

export default function Blog({ post }: Props): JSX.Element {
  const coverImage = post[0].cover?.formats.medium.url || '';

  const myLoader = () => `${post[0].cover.formats.medium.url}`;

  return (
    <>
      <Head>
        <title>{post[0].title}</title>
        <meta name="description" content={post[0].excerpt} property="og:description" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@btrianurdin" />
        <meta name="twitter:creator" content="@btrianurdin" />
        <meta property="og:url" content={`${baseURL}/blogs/${post[0].slug}`} />
        <meta property="og:title" content={post[0].title} />
        <meta property="og:description" content={post[0].excerpt} />
        <meta property="og:image" content={coverImage} />
      </Head>
      <div className="container mx-auto sm:w-3/4 md:w-3/5 lg:w-2/4 text-primary">
        <PageHeader />
        <div className="p-2 mt-6 mb-14">
          <div className="my-3">
            <h1 className="text-xl md:text-2xl font-medium">{post[0].title}</h1>
          </div>
          {coverImage
            && (
            <div className="relative w-full overflow-hidden h-64 rounded-md my-4">
              <Image loader={myLoader} src={coverImage} alt="Cover image" layout="fill" objectFit="cover" />
            </div>
            )}
          <div className="text-base my-3 blog-content">
            <ReactMarkdown skipHtml children={post[0].content || ''} />
          </div>
          <div className="border-t py-3 mt-7 text-sm">
            <p>
              Posted on   &nbsp;
              {dateFormat(post[0].published_at as string)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('/blogs');
  const blogs: Posts[] = res.data;

  return {
    paths: blogs.map((blog) => (
      {
        params: {
          slug: blog.slug,
        },
      }
    )),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const res = await axios.get(`/blogs?slug=${params.slug}`);
  const blogs: Posts[] = res.data;

  return {
    props: {
      post: blogs,
    },
    revalidate: 1,
  };
};
