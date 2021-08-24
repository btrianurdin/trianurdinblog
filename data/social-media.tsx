import {
  SiInstagram, SiLinkedin, SiTelegram, SiTwitter,
} from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

type SocialMediaProperty = {
  [key: string]: string | JSX.Element;
}

export type SocialMedia = {
  instagram: SocialMediaProperty;
  twitter: SocialMediaProperty;
  linkedin: SocialMediaProperty;
  email: SocialMediaProperty;
  telegram: SocialMediaProperty;
}

const socialMedia: SocialMedia = {
  instagram: {
    link: 'https://instagram.com/btrianurdin',
    text: '@btrianurdin',
    icon: <SiInstagram className="mr-0.5" />,
  },
  twitter: {
    link: 'https://instagram.com/btrianurdin',
    text: '@btrianurdin',
    icon: <SiTwitter className="mr-0.5" />,
  },
  linkedin: {
    link: 'https://www.linkedin.com/in/btrianurdin',
    text: 'btrianurdin',
    icon: <SiLinkedin className="mr-0.5" />,
  },
  email: {
    link: 'mailto:bagustrianurdin@outlook.com',
    text: 'Email',
    icon: <MdEmail className="mr-0.5 text-lg" />,
  },
  telegram: {
    link: 't.me/bgstrianurdin',
    text: '@bgstrianurdin',
    icon: <SiTelegram className="mr-0.5" />,
  },
};

export default socialMedia;
