import Link from 'next/link';

export default function Blogs(): JSX.Element {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-80">
          <h2 className="text-primary font-light text-2xl md:text-3xl">Under Construction.</h2>
          <h4 className="text-primary text-lg font-light mt-3">
            <Link href="/">
              <a className="relative anchor inline-block">@btrianurdin</a>
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
}
