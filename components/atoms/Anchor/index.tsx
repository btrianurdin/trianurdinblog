import Link from 'next/link';

interface Props {
  href: string;
  text: string | number ;
  icon?: JSX.Element;
}

export default function Anchor({ href, text, icon }: Props): JSX.Element {
  return (
    <Link href={href}>
      <a className="anchor mx-4 my-2">
        {icon}
        {text}
      </a>
    </Link>
  );
}

Anchor.defaultProps = {
  icon: '',
};
