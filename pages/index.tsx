import dynamic from 'next/dynamic';
import Seo from '../components/Seo';
import Hero from '../components/organisms/Hero';
import AboutMe from '../components/organisms/AboutMe';
import Capabilities from '../components/organisms/Capabilities';
import Footer from '../components/organisms/Footer';

const ToggleDarkMode = dynamic(() => import('../components/atoms/ToggleDarkMode'), { ssr: false });

export default function Home(): JSX.Element {
  return (
    <>
      <Seo
        meta={{
          title: 'Bagus Trianurdin\'s',
          description: 'Hello, I am Bagus Trianurdin. In my life, I want to be an Astronaut (but now I am a Programmer, hehe). I am a Web Developer and Web Tech lover.',
          pathname: '/',
        }}
      />
      <div className="container mx-auto md:w-3/4 px-3.5">
        <Hero />
        <AboutMe />
        <Capabilities />
        <Footer />
      </div>
      <ToggleDarkMode />
    </>
  );
}
