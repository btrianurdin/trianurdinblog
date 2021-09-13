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
    icon: <SiInstagram className="mr-0.5 inline" />,
  },
  {
    name: 'twitter',
    link: 'https://instagram.com/btrianurdin',
    text: '@btrianurdin',
    icon: <SiTwitter className="mr-0.5 inline" />,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/btrianurdin',
    text: 'btrianurdin',
    icon: <SiLinkedin className="mr-0.5 inline" />,
  },
  {
    name: 'telegram',
    link: 'https://t.me/bgstrianurdin',
    text: '@bgstrianurdin',
    icon: <SiTelegram className="mr-0.5 inline" />,
  },
];

export default socialMedia;
