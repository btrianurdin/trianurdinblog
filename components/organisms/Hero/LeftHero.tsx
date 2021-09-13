import Link from 'next/link';
import { BsLaptop } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import socialMedia from '../../../data/social-media';
import Anchor from '../../atoms/Anchor';

export default function LeftHero(): JSX.Element {
  return (
    <div className="lg:flex-1 lg:mt-36">
      <div className="flex items-center">
        <h2 className="text-2xl md:text-3xl font-normal mr-6">Hi, There!</h2>
        <Link href="mailto:test@email.com">
          <a className="bg-pinky focus:ring-4 focus:ring-pinky focus:ring-opacity-25 px-2.5 py-0.5 text-light-primary text-sm md:text-base font-thin rounded-md shadow-lg">
            Get in touch
          </a>
        </Link>
      </div>
      <h1 className="text-3xl md:text-4xl my-2.5">
        I&lsquo;m
        {' '}
        <span className="font-semibold">Bagus Trianurdin</span>
      </h1>
      <h3 className="font-light my-2.5 text-lg md:text-2xl">
        Fullstack Dev
        <span className="text-pinky mx-3">//</span>
        Student
        <span className="text-pinky mx-3">//</span>
        Learner
      </h3>
      <h4 className="text-base md:text-xl my-2.5 flex items-center font-light">
        <BsLaptop className="-ml-0.5 mr-2 w-5 h-5" />
        I work with Javascript, PHP, NodeJS, etc.
      </h4>
      <h4 className="text-base md:text-xl my-2.5 flex items-center font-light">
        <HiOutlineLocationMarker className="-ml-0.5 mr-2 w-5 h-5" />
        Indramayu, Jawa Barat
      </h4>
      <div className="my-5 -ml-4">
        <Anchor href="#about" text="About" />
        <Anchor href="/blogs" text="Blogs" />
        <Anchor href="/resume" text="Resume" />
        <Anchor href="/portofolio" text="Portofolio" />
      </div>
      <div className="my-5 -ml-4">
        {
          socialMedia.map((sosmed) => (
            <Anchor key={sosmed.name} href={sosmed.link} text={sosmed.text} icon={sosmed.icon} />
          ))
        }
      </div>
    </div>
  );
}
