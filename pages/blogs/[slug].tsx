import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/molecules/Layout';
import PageHeader from '../../components/molecules/PageHeader';
import { getBlogPost, getBlogPosts } from '../../services/blogs';
import { IPost } from '../../types/Blogs';
import dateFormat from '../../utils/dateFormat';
import Custom404 from '../404';

export default function Blog({ post }: { post: IPost }): JSX.Element {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <Custom404 />;
  }

  if (router.isFallback) {
    return <h1 className="text-xl font-light text-center">Loading...</h1>;
  }

  return (
    <Layout
      fixedBackground={false}
      seoMeta={{
        title: post.title,
        description: post.excerpt,
        pathname: `/blogs/${post.slug}`,
        imageUrl: post.cover?.formats?.medium.url || '',
      }}
    >
      <div className="container mx-auto sm:w-3/4 lg:w-3/6 px-3.5 text-primary">
        <PageHeader prefix="blogs" mainTitle={post.title} />
        <div className="mt-4 mb-28">
          <h1 className="text-2xl md:text-3xl font-medium">{post.title}</h1>
          <p className="mt-2 mb-3 font-light text-sm text-pinky">{dateFormat(post.published_at as string)}</p>
          {
            post.cover && (
            <div className="relative w-full overflow-hidden h-72 rounded-md my-4">
              {
                post.cover.formats?.large ? (
                  <Image src={post.cover?.formats.large.url} alt="Cover image" layout="fill" objectFit="cover" />
                ) : (
                  <Image src={post.cover?.formats.medium.url} alt="Cover image" layout="fill" objectFit="cover" />
                )

              }
            </div>
            )
          }
          <div className="mt-8 blog-content">
            <ReactMarkdown skipHtml={false}>
              {post.content || ''}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string};
  const post: IPost = await getBlogPost(slug);

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: IPost[] = await getBlogPosts();
  const getPaths = posts?.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths: getPaths || [],
    fallback: true,
  };
};
