import Image from 'next/image';
import Section from '../../molecules/Section';

export default function AboutMe(): JSX.Element {
  return (
    <Section title="Short About Me" className="md:mt-10" elId="about">
      <div className="aboutme-bg w-full left-0 absolute bg-no-repeat bg-cover bg-center " style={{ top: '760px', height: '420px' }} />
      <div className="flex flex-col md:flex-row">
        <div className="mx-auto mb-5">
          <Image
            src="/assets/images/profile.jpg"
            alt="My Photo"
            className="rounded-xl z-10 shadow-xl"
            layout="fixed"
            height="213"
            width="170"
          />
        </div>
        <div className="md:px-10 text-base">
          <p>
            Hi, I am Bagus Trianurdin. My friends and my family call me Bagus.
            I am a Web Developer and Web Tech lover.
          </p>
          <p className="mt-3">
            I love to learn and enthusiastic about new things related to technology, startup,
            business, and social things. I am able to work in a team and able to work under
            pressure. Skilled in front-end and back-end development, communication, and database.
          </p>
          <p className="mt-3">
            I enjoy building web apps using Typescript, NodeJs, PHP, React, and other.
            I love coding, coffee, and I love myself 😁
          </p>
        </div>
      </div>
    </Section>
  );
}
