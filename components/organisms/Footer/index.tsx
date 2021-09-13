import { FiHeart } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import VercelIcon from '../../svg/VercelIcon';

export default function Footer(): JSX.Element {
  return (
    <>
      <div className="absolute hidden md:block md:-right-10" style={{ top: '1250px' }}>
        <SiGithub className="w-32 h-32 text-black text-opacity-10" />
      </div>
      <div className="mt-20 mb-28 border-t">
        <div className="mt-9 font-light">
          <p className="flex justify-center items-center">
            Build with
            <FiHeart className="mx-1 text-pinky" />
            in
            <span className="text-pinky mx-1">Yogyakarta</span>
          </p>
          <p className="mt-3 flex justify-center items-center">
            Deploy on
            <VercelIcon className="w-6 h-6 ml-1" />
            <span className="font-medium">Vercel</span>
          </p>
        </div>
      </div>
    </>
  );
}
