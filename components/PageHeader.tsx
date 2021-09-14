import { FiArrowLeft } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {
  title: string;
  link: string;
}

export default function PageHeader({ title, link }: Props): JSX.Element {
  const router = useRouter();

  return (
    <div className="py-6 px-2 border-b flex justify-between items-center">
      <button type="button" onClick={() => router.back()} className="flex items-center w-24">
        <FiArrowLeft className="w-5 h-5" />
        <h6 className="ml-1 hidden sm:block">Kembali</h6>
      </button>
      <div className="flex-grow text-center">
        <Link href={`/${link}`} passHref>
          <a href="replace" className="link-to">
            <h1 className="text-xl font-semibold inline-block">{ title }</h1>
          </a>
        </Link>
      </div>
    </div>
  );
}
