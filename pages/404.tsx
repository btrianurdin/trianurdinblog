import Head from 'next/head';

export default function Custom404(): JSX.Element {
  return (
    <>
      <Head>
        <title>Yahhh! Lu nyasar</title>
      </Head>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold p-3">404</h1>
        <p className="font-light tracking-widest">
          <span className="line-through text-sm">Heart</span>
          {' '}
          <br />
          {' '}
          Page
          {' '}
          Not Found
        </p>
      </div>
    </>
  );
}
