export default function SubTitle({ text }: { text: string }): JSX.Element {
  return (
    <div className="relative h-9">
      <h2 className="text-2xl font-semibold text-pink-600 ml-2">{text}</h2>
      <div className="absolute w-9 h-full bg-pink-600 opacity-25 top-0" />
    </div>
  );
}
