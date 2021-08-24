import SubTitle from './SubTitle';

type Props = {
  title: string,
  children: JSX.Element | string
}

export default function PagePart({ title, children }: Props): JSX.Element {
  return (
    <div className="w-full my-12">
      <SubTitle text={title} />
      <div className="flex flex-wrap justify-between">
        {children}
      </div>
    </div>
  );
}
