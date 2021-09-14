import Link from 'next/link';

interface Props {
  prefix?: string;
  mainTitle: string;
}

export default function PageHeader({ prefix, mainTitle }: Props): JSX.Element {
  return (
    <div className="py-10">
      <p>
        <Link href="/">
          <a className="underline">@btrianurdin</a>
        </Link>
        {
          prefix && (
          <span>
            {' '}
            //
            {' '}
            <Link href={`/${prefix.toLowerCase()}`}>
              <a className="underline">
                {prefix}
              </a>
            </Link>
          </span>
          )
        }
        <span className="text-pinky">
          {' '}
          //
          {' '}
          {mainTitle}
        </span>
      </p>
    </div>
  );
}

PageHeader.defaultProps = {
  prefix: '',
};
