interface Props {
  title: string | number;
  className?: string;
  children: React.ReactNode
  elId?: string;
}

export default function Section({
  title, className, children, elId,
}: Props): JSX.Element {
  return (
    <div className={className} id={elId}>
      <h2 className="section-title" style={{ borderLeftWidth: '13px' }}>{title}</h2>
      <div className="my-10">
        {children}
      </div>
    </div>
  );
}

Section.defaultProps = {
  className: '',
  elId: '',
};
