import { NextSeo } from 'next-seo';
import { baseURL } from '../lib/config';

export interface MetaSeo {
  title: string;
  description: string;
  pathname: string;
  imageUrl?: string;
}

interface Props {
  meta: MetaSeo;
}

export default function Seo({ meta }: Props): JSX.Element {
  return (
    <NextSeo
      title={meta.title}
      description={meta.description}
      canonical={`${baseURL}`}
      openGraph={{
        url: `${baseURL}${meta.pathname}`,
        title: meta.title,
        description: meta.description,
        images: [
          { url: meta.imageUrl || '' },
        ],
        site_name: 'Just absurd personal web of me.',
      }}
      twitter={{
        handle: '@btrianurdin',
        site: '@btrianurdin',
        cardType: 'summary',
      }}
    />
  );
}
