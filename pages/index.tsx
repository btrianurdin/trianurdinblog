import Head from 'next/head';
import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';
import DarkModeToggle from '../components/DarkModeToggle';
import { baseURL } from '../lib/config';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Silahkan berbelanja!</title>
        <meta name="description" content="Hello, I am Bagus Trianurdin. In my life, I want to be an Astronaut (but now I am a Programmer, hehe)." property="og:description" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@btrianurdin" />
        <meta name="twitter:creator" content="@btrianurdin" />
        <meta property="og:url" content={`${baseURL}`} />
        <meta property="og:description" content="Hello, I am Bagus Trianurdin. In my life, I want to be an Astronaut (but now I am a Programmer, hehe)." />
      </Head>
      <div className="container mx-auto h-screen md:w-3/4 px-3 py-2 mt-9 md:mt-0 md:flex justify-center flex-col">
        <div className="mt-20 text-primary">
          <div className="mb-10 flex items-center">
            <DarkModeToggle />
            <p className="ml-4">#SaveYourEyes</p>
          </div>
          <h1 className="text-3xl md:text-4xl font-medium block">Hello, I am Bagus</h1>
          <p className="mt-1">
            My full name is Bagus Trianurdin.
          </p>
          <p className="mt-2 font-light">
            I work with Javascript, PHP, NodeJS, Etc.
          </p>
          <p className="mt-2 font-light">
            I love everything I do
            {' '}
            <FiHeart className="inline-block text-pink-600" />
          </p>
          <div className="mt-3">
            <Link href="/blogs" passHref><a href="replace" className="link-to">About</a></Link>
            <Link href="/blogs" passHref><a href="replace" className="link-to ml-4">Blog</a></Link>
            <Link href="/blogs" passHref><a href="replace" className="link-to ml-4">CV</a></Link>
          </div>
        </div>
      </div>
    </>
  );
}
