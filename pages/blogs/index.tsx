import { GetStaticProps } from 'next';
import Layout from '../../components/molecules/Layout';
import BlogPosts from '../../components/organisms/BlogPosts';
import { getBlogPosts } from '../../services/blogs';
import { IPost } from '../../types/Blogs';
import PageHeader from '../../components/molecules/PageHeader';

interface Props {
  posts: IPost[];
}

export default function Blogs({ posts }: Props): JSX.Element {
  return (
    <Layout
      fixedBackground
      seoMeta={{
        title: 'My Personal Blogs',
        description: 'Hello, I am Bagus Trianurdin. In my life, I want to be an Astronaut (but now I am a Programmer, hehe). I am a Web Developer and Web Tech lover.',
        pathname: '/blogs',
      }}
    >
      <div className="container mx-auto sm:w-3/4 lg:w-3/6 px-3.5 text-primary">
        <PageHeader mainTitle="blogs" />
        <div className="mb-16">
          <BlogPosts posts={posts} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: IPost[] = await getBlogPosts();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};
