import PageHeader from '../../components/PageHeader';
import Seo from '../../components/Seo';

export default function About(): JSX.Element {
  return (
    <>
      <Seo
        meta={{
          title: 'Short about me',
          description: 'Hello, I am Bagus Trianurdin. In my life, I want to be an Astronaut (but now I am a Programmer, hehe)',
          pathname: '/about',
        }}
      />
    </>
  );
}
