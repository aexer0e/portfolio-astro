/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 * @property {string} website - The official website for the client/company.
 */
interface WorkExperience {
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    goals: string[];
    currentJob: boolean;
    website: string;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} website - The official website for the company.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */const workExperience: WorkExperience[] = [
  {
    startDate: "2025-05-01",
    company: "Ninja Squirrel Gaming",
    location: "Houston, USA",
    goals: [
      "Lead development of small-scale and prototype projects, owning architecture, implementation, and delivery.",
      "Elevate code and release quality through stricter engineering standards, automated QA, and structured code reviews.",
      "Mentor engineers and coordinate cross-functional teams to deliver polished, production-ready features.",
      "Streamline pipelines and processes to improve iteration speed and reliability for rapid content updates."
    ],
    currentJob: true,
    website: "https://ninjasquirrelgaming.com/"
  },
  {
    startDate: "2020-12-01",
    endDate: "2025-04-30",
    company: "Gamemode One",
    location: "Halifax, Canada",
    goals: [
      "Developed internal tooling including custom compilers, CI/CD pipelines, scripting utilities, and project templates to accelerate production.",
      "Served as lead developer on multiple internal and partner projects, overseeing technical direction from prototype to launch.",
      "Collaborated directly with Microsoft’s Minecraft engineering team and partner representatives from Nickelodeon, SEGA, and Disney.",
      "Led development of high-visibility first-party content, including the Minecraft mob vote and special in-game events.",
      "Enhanced developer onboarding and release processes through reusable tooling and comprehensive documentation."
    ],
    currentJob: false,
    website: "https://gamemodeone.com/"
  },
  {
    startDate: "2022-07-01",
    endDate: "2023-01-31",
    company: "Oreville Studios",
    location: "London, UK",
    goals: [
      "Managed gameplay innovation by leading the design and implementation of new systems and prototypes.",
      "Contributed directly to projects with hands-on development to push technical and creative boundaries.",
      "Collaborated with designers, artists, and engineers to deliver engaging features and improve player experience."
    ],
    currentJob: false,
    website: "https://orevillestudios.com/"
  },
  {
    startDate: "2019-06-01",
    endDate: "2020-06-30",
    company: "Sapphire Studios",
    location: "Milford, USA",
    goals: [
      "Supported multiple client web projects with a focus on polish, usability, and stability.",
      "Implemented CI/CD pipelines and automated testing to improve build and deployment reliability.",
      "Delivered bug fixes, refactors, and refinements that improved product quality and client satisfaction."
    ],
    currentJob: false,
    website: "https://x.com/saphirestudios/"
  },
  {
    startDate: "2019-07-01",
    endDate: "2020-04-30",
    company: "BBB Studios",
    location: "London, UK",
    goals: [
      "Contributed to multiple projects while rapidly increasing technical scope and responsibility.",
      "Optimized project pipelines by streamlining asset workflows and build processes to accelerate delivery.",
      "Delivered features on schedule and strengthened team efficiency through improved processes and documentation."
    ],
    currentJob: false,
    website: "https://www.minecraft.net/en-us/marketplace/creator/bbb-studios/"
  }
];


export default workExperience;