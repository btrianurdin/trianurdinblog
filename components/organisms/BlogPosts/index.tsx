import Link from 'next/link';
import { IPost } from '../../../types/Blogs';
import dateFormat from '../../../utils/dateFormat';

interface Props {
  posts: IPost[];
}

export default function BlogPosts({ posts }: Props): JSX.Element {
  return (
    <>
      {
        posts.map((post) => (
          <div key={post.id} className="mt-4 mb-10">
            <Link href={`/blogs/${post.slug}`}>
              <a>
                <h1 className="text-2xl md:text-3xl font-medium hover:underline">{post.title}</h1>
              </a>
            </Link>
            <p className="mt-2 mb-3 font-light text-sm text-pinky">{dateFormat(post.published_at as string)}</p>
            <p className="font-light">{post.excerpt}</p>
          </div>
        ))
      }
    </>
  );
}
