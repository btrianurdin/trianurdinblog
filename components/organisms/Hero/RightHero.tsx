import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

/* eslint-disable @next/next/no-img-element */
export default function RightHero(): JSX.Element {
  const { theme } = useTheme();
  const [assetSvg, setAssetSvg] = useState('hero-right-light');

  useEffect(() => {
    setAssetSvg(theme === 'light' ? 'hero-right-light' : 'hero-right-dark');
  }, [theme]);

  return (
    <div className="hidden lg:flex justify-center lg:flex-1 h-80 relative">
      <img src={`/assets/svg/${assetSvg}.svg`} alt="hero right" />
    </div>
  );
}
