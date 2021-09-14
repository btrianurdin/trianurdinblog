import dynamic from 'next/dynamic';
import Seo, { MetaSeo } from '../../Seo';

const ToggleDarkMode = dynamic(() => import('../../atoms/ToggleDarkMode'), { ssr: false });

interface Props {
  seoMeta: MetaSeo;
  children: React.ReactNode
  fixedBackground?: boolean
}

export default function Layout({ seoMeta, children, fixedBackground }: Props): JSX.Element {
  return (
    <>
      <Seo
        meta={seoMeta}
      />
      <div className={`hero-bg ${fixedBackground ? 'fixed' : 'absolute'} left-0 w-full h-full bg-no-repeat`} />
      {children}
      <ToggleDarkMode />
    </>
  );
}

Layout.defaultProps = {
  fixedBackground: false,
};
