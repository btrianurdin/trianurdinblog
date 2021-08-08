import { FiArrowLeft } from 'react-icons/fi';
import { useRouter } from 'next/router';
import DarkModeToggle from './DarkModeToggle';

export default function PageHeader(): JSX.Element {
  const router = useRouter();

  return (
    <div className="py-6 px-2 border-b flex justify-between items-center">
      <button type="button" onClick={() => router.back()} className="flex items-center w-24">
        <FiArrowLeft className="w-5 h-5" />
        <h6 className="ml-1 hidden sm:block">Kembali</h6>
      </button>
      <div className="flex-grow text-center">
        <h1 className="text-xl font-semibold link-to inline-block">Blog Guys</h1>
      </div>
      <div className="w-24 flex justify-end">
        <DarkModeToggle />
      </div>
    </div>
  );
}
