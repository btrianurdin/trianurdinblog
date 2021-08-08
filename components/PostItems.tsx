import Link from 'next/link';
import Posts from '../types/posts';

export default function PostItems({ slug, title, excerpt }: Posts): JSX.Element {
  return (
    <div className="my-9">
      <Link href={`/blogs/${slug}`} passHref>
        <a href="replace">
          <h1 className="text-xl md:text-2xl hover:underline">{title}</h1>
        </a>
      </Link>
      <p className="text-sm my-1">
        {excerpt}
      </p>
    </div>
  );
}
