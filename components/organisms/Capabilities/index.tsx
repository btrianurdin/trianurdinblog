import CapabilitiesData from '../../../data/capabilitiesData';
import Section from '../../molecules/Section';
import CapabilitiesItem from './CapabilitiesItem';

export default function Capabilities(): JSX.Element {
  return (
    <Section title="Capabilities" className="mt-20">
      <div className="grid md:grid-cols-2 gap-5">
        {
          CapabilitiesData.map((capability) => (
            <CapabilitiesItem
              key={capability.title}
              title={capability.title}
              items={capability.items}
            />
          ))
        }
      </div>
    </Section>
  );
}
