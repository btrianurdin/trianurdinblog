interface ICapabilities {
  title: string;
  items: Array<string | number>;
}

const CapabilitiesData: Array<ICapabilities> = [
  {
    title: 'Programming Language',
    items: ['Javascript', 'Typescript', 'PHP', 'SQL', 'NodeJS'],
  },
  {
    title: 'Databases',
    items: ['MySQL/MariaDB', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Libraries & Framework',
    items: ['React', 'Next', 'ExpressJS', 'NestJS', 'Bootstrap', 'Tailwind', 'Redux'],
  },
  {
    title: 'Tools',
    items: ['VSCode', 'Github', 'Git', 'NPM', 'Yarn'],
  },
];

export default CapabilitiesData;
