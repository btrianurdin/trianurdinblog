import Image from 'next/image';
import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

export default function About(): JSX.Element {
  const imgLoader = () => 'https://res.cloudinary.com/trianurdin/image/upload/v1628583472/strapiblog.jpg';
  return (
    <>
      <Seo
        meta={{
          title: 'Short About Me',
          description: 'Hello, I am Bagus Trianurdin. In my life, I want to be an Astronaut (but now I am a Programmer, hehe)',
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
                A Web Tech lover. Hi, I am Bagus Trianurdin. My friends and my family call me Bagus.
                I am a Web Developer
              </p>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vel facere
                quod doloremque. Mollitia libero architecto ipsam voluptatem voluptate cum
                quisquam reprehenderit error,
                rerum sequi culpa saepe? Nisi, ad assumenda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
