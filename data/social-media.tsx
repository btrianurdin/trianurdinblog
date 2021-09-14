import {
  SiInstagram, SiLinkedin, SiTelegram, SiTwitter,
} from 'react-icons/si';

interface ISocialMedia {
  name: string;
  link: string;
  text: string;
  icon: JSX.Element;
}

const socialMedia: Array<ISocialMedia> = [
  {
    name: 'instagram',
    link: 'https://instagram.com/btrianurdin',
    text: '@btrianurdin',
    icon: <SiInstagram style={{ marginRight: '2px', display: 'inline' }} />,
  },
  {
    name: 'twitter',
    link: 'https://instagram.com/btrianurdin',
    text: '@btrianurdin',
    icon: <SiTwitter style={{ marginRight: '2px', display: 'inline' }} />,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/btrianurdin',
    text: 'btrianurdin',
    icon: <SiLinkedin style={{ marginRight: '2px', display: 'inline' }} />,
  },
  {
    name: 'telegram',
    link: 'https://t.me/bgstrianurdin',
    text: '@bgstrianurdin',
    icon: <SiTelegram style={{ marginRight: '2px', display: 'inline' }} />,
  },
];

export default socialMedia;
