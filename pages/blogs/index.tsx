import { GetStaticProps } from 'next';
import Head from 'next/head';
import PageHeader from '../../components/PageHeader';
import PostItems from '../../components/PostItems';
import axios from '../../lib/axios';
import { baseURL } from '../../lib/config';
import Posts from '../../types/posts';

type Props = {
  blogs: Posts[]
}

export default function Blogs({ blogs }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>I don&apos;t know what I will write</title>
        <meta name="description" content="Hello, I am Bagus Trianurdin. In my life, I want to be an Astronaut (but now I am a Programmer, hehe)." property="og:description" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@btrianurdin" />
        <meta name="twitter:creator" content="@btrianurdin" />
        <meta property="og:url" content={`${baseURL}`} />
        <meta property="og:description" content="Hello, I am Bagus Trianurdin. In my life, I want to be an Astronaut (but now I am a Programmer, hehe)." />
      </Head>
      <div className="container mx-auto sm:w-3/4 md:w-3/5 lg:w-2/4 text-primary">
        <PageHeader />
        <div className="p-2">
          {
            blogs.map((blog) => (
              <PostItems
                key={blog.id}
                slug={blog.slug}
                title={blog.title}
                excerpt={blog.excerpt}
              />
            ))
          }
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/blogs');
  const blogs = await res.data;

  return {
    props: {
      blogs,
    },
    revalidate: 1,
  };
};
