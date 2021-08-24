import Image from 'next/image';
import CompetenciesIcons from '../../components/CompetenciesIcons';
import PageHeader from '../../components/PageHeader';
import PagePart from '../../components/PagePart';
import Seo from '../../components/Seo';
import socialMedia from '../../data/social-media';

export default function About(): JSX.Element {
  const imgLoader = () => 'https://res.cloudinary.com/trianurdin/image/upload/v1629799601/blogassets/IMG_20210425_WA_0035_1_be31f75249.jpg';
  return (
    <>
      <Seo
        meta={{
          title: 'Short About Me',
          description: 'Hello, I am Bagus Trianurdin. In my life, I want to be an Astronaut (but now I am a Programmer, hehe). I am a Web Developer and Web Tech lover.',
          pathname: '/about',
        }}
      />
      <div className="container mx-auto sm:w-3/4 md:w-3/5 lg:w-2/4 text-primary">
        <PageHeader title="Short About Me" link="about" />
        <div className="p-2 mt-6 mb-14">
          <div className="my-3 flex flex-col justify-center items-center md:inline-block">
            <div className="relative mb-5 md:my-0 rounded-md md:float-left md:mr-8 md:mb-8" style={{ height: '213px' }}>
              <Image
                src="image.jpg"
                loader={imgLoader}
                alt="My Photo"
                className="rounded-md z-10"
                layout="intrinsic"
                height="213"
                width="170"
              />
              <div className="border-pink-600 border-4 border-opacity-50 border-dashed absolute top-3 left-3 rounded-md" style={{ width: '170px', height: '213px' }} />
            </div>
            <div className="w-full my-5 md:my-0">
              <p>
                Hi, I am Bagus Trianurdin. My friends and my family call me Bagus.
                I am a Web Developer and Web Tech lover.
              </p>
              <p className="mt-3">
                I love to learn and enthusiastic about new things related to technology, startup,
                business, and social things. I am able to work in a team and able to work under
                pressure.  Skilled in front-end and back-end development, communication, and
                database.
              </p>
              <p className="mt-3">
                I enjoy building web apps using Typescript, NodeJs, PHP, React, and other. I love
                coding, coffee, and I love myself 😁
              </p>
            </div>
            <PagePart title="Competencies">
              <CompetenciesIcons />
            </PagePart>
            <PagePart title="Contact">
              <ul className="my-6 flex w-full flex-wrap justify-center">
                {
                  Object.keys(socialMedia).map((key: string) => (
                    <li key={key} className="mx-5 mb-6">
                      <a href={(socialMedia as any)[key].link} className="link-to flex items-center">
                        {
                          (socialMedia as any)[key].icon
                        }
                        {
                          (socialMedia as any)[key].text
                        }
                      </a>
                    </li>
                  ))
                }
              </ul>
            </PagePart>
          </div>
        </div>
      </div>
    </>
  );
}
