interface Props {
  title: string;
  items: Array<string | number>;
}
export default function CapabilitiesItem({ title, items }: Props): JSX.Element {
  return (
    <div className="">
      <h3 className="text-lg">{title}</h3>
      <p className="text-lg font-light my-3">
        {
        items.map((item, i) => (
          `${item} ${i === (items.length - 1) ? '' : '-'} `
        ))
      }
      </p>
    </div>
  );
}
