interface HardSkill {
  name: string;
  description: string;
  icon: string;
  link: string;
  years: number;
}

const hardSkills: HardSkill[] = [
  {
    name: "TypeScript",
    description: "Strongly typed JavaScript for scalable applications.",
    icon: "mdi:language-typescript",
    link: "https://www.typescriptlang.org/",
    years: 6
  },
  {
    name: "JavaScript",
    description: "The language of the web, for both frontend and backend.",
    icon: "mdi:language-javascript",
    link: "https://developer.mozilla.org/docs/Web/JavaScript",
    years: 5
  },
  {
    name: "Python",
    description: "Versatile scripting language for automation, data, and web.",
    icon: "mdi:language-python",
    link: "https://www.python.org/",
    years: 5
  },
  {
    name: "Golang",
    description: "Compiled language for fast, reliable backend services.",
    icon: "simple-icons:go",
    link: "https://go.dev/",
    years: 4
  },
  {
    name: "PostgreSQL",
    description: "Advanced open-source relational database.",
    icon: "mdi:database",
    link: "https://www.postgresql.org/",
    years: 4
  },
  {
    name: "Vue",
    description: "Progressive JavaScript framework for building UIs.",
    icon: "simple-icons:vuedotjs",
    link: "https://vuejs.org/",
    years: 4
  },
  {
    name: "React",
    description: "Component-based UI library for building interactive interfaces.",
    icon: "mdi:react",
    link: "https://react.dev/",
    years: 2
  },
  {
    name: "Svelte",
    description: "A radical new approach to building user interfaces.",
    icon: "simple-icons:svelte",
    link: "https://svelte.dev/",
    years: 1
  },
];

export default hardSkills;