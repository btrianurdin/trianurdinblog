import { FaReact } from 'react-icons/fa';
import {
  SiJavascript, SiMysql, SiNextDotJs, SiNodeDotJs, SiPhp, SiTypescript,
} from 'react-icons/si';
import NestjsLogo from './svg/NestjsLogo';

export default function CompetenciesIcons(): JSX.Element {
  const iconClass = 'w-16 h-16 m-6 ';

  return (
    <>
      <FaReact className={iconClass.concat('text-blue-400')} />
      <SiJavascript className={iconClass.concat('text-yellow-300')} />
      <SiTypescript className={iconClass.concat('text-blue-600')} />
      <SiPhp className={iconClass.concat('text-indigo-500')} />
      <SiNodeDotJs className={iconClass.concat('text-green-600')} />
      <SiNextDotJs className={iconClass.concat('text-gray-900')} />
      <SiMysql className={iconClass.concat('text-yellow-500')} />
      <NestjsLogo iconClass={iconClass} />
    </>
  );
}
