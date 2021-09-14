import { SiJavascript, SiReact } from 'react-icons/si';
import LeftHero from './LeftHero';
import RightHero from './RightHero';

export default function Hero(): JSX.Element {
  return (
    <>
      <div className="absolute hidden md:block md:-right-10 top-32" style={{ zIndex: -2 }}>
        <SiReact className="text-black opacity-10 w-32 h-32" />
      </div>
      <div className="absolute hidden md:block md:right-80 -top-10" style={{ zIndex: -2 }}>
        <SiJavascript className="text-black opacity-10 w-32 h-32" />
      </div>
      <div className="flex h-screen items-center w-full">
        <LeftHero />
        <RightHero />
      </div>
    </>
  );
}
