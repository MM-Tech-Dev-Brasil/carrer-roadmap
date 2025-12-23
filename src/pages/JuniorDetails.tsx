import heroImage from "../assets/header.png";
import hardImage from "../assets/7.png";
import softImage from "../assets/soft skills.png";
import englishImage from "../assets/3.png";
import projectsImage from "../assets/4.png";
import experienceImage from "../assets/5.png";
import tipsImage from "../assets/6.png";
import SectionCard, { type SectionConfig } from "../components/sectionCard.component";

const cardBaseClass = "flex flex-col w-full md:aspect-square";

const heroContent = {
  subtitle: "How to become a",
  highlight: "Junior II",
  tagline: "Tech Dev Brasil",
};

const sectionConfigs: SectionConfig[] = [
  {
    title: "HARD SKILLS",
    items: [
      "Proficient in JavaScript and TypeScript.",
      "Build reusable, functional components in React.",
      "Create REST APIs using Node.js (Express, Fastify, or Nest.js).",
      "Architect and structure APIs in NestJS.",
      "Use Git/GitHub (branching, pull requests, code reviews).",
      "CRUD + queries with PostgreSQL and MongoDB.",
      "Consume APIs and handle errors on the frontend.",
    ],
    titleClass: "text-blue-500",
    listClass: "text-blue-500",
    borderClass: "border-b md:border-b-0 md:border-r border-slate-200",
    imageSrc: hardImage,
    imageClass: "top-0 right-0 h-96 w-96 lg:h-[30rem] lg:w-[30rem] object-contain",
  },
  {
    title: "SOFT SKILLS",
    items: [
      "Clear communication in technical discussions.",
      "Accountability and ownership mindset.",
      "Openness to feedback and quick improvement.",
      "Time management and organization.",
      "Active participation in team rituals.",
      "Collaborative, team-first mindset.",
    ],
    borderClass: "border-b border-slate-200",
    imageSrc: softImage,
    imageClass: "bottom-0 right-0 h-full w-full object-cover",
  },
  {
    title: "ENGLISH LEVEL",
    items: [
      "Read technical documentation.",
      "Understand common technical vocabulary.",
      "Write basic communication (emails, chats, tickets).",
    ],
    backgroundClass: "bg-green-500",
    titleClass: "text-black",
    listClass: "text-black",
    borderClass: "border-b md:border-b-0 md:border-r border-slate-200",
    imageSrc: englishImage,
    imageClass: "top-0 right-0 h-full w-1/2 object-contain",
    contentClass: "w-1/2",
  },
  {
    title: "PROJECTS TO DELIVER",
    items: [
      "API built in Nest.js with Swagger docs.",
      "Frontend in React + TypeScript consuming that API.",
      "Projects independent, documented, and versioned.",
    ],
    backgroundClass: "bg-blue-500",
    titleClass: "text-white",
    listClass: "text-white",
    imageSrc: projectsImage,
    imageClass: "top-0 right-0 h-full w-1/2 object-contain",
    contentClass: "w-1/2",
  },
  {
    title: "EXPERIENCE TIME",
    items: [
      "6 months → 1 year as Junior I.",
      "Or equivalent experience elsewhere.",
    ],
    titleClass: "text-blue-500",
    backgroundClass: "bg-[#bec4d9]",
    listClass: "text-blue-500",
    borderClass: "border-t md:border-t-0 md:border-r border-slate-200",
    imageSrc: experienceImage,
    imageClass: "top-0 left-10 h-full w-1/2 object-contain",
    contentClass: "ml-auto w-1/2",
    itemsWrapperClass: "justify-center mt-0",
  },
  {
    title: "TIPS TO GET THERE",
    items: [
      "Understand how JS/TS work under the hood.",
      "Learn and apply code patterns.",
      "Share learnings with the team.",
      "Read documentation and articles weekly.",
    ],
    titleClass: "text-blue-500",
    listClass: "text-blue-500",
    borderClass: "border-t border-slate-200",
    imageSrc: tipsImage,
    imageClass: "top-0 left-0 h-full w-1/2 object-contain",
    contentClass: "ml-auto w-1/2 pl-10",
    itemsWrapperClass: "justify-center mt-0",
  },
];

const JuniorDetails = () => (
  <main className="min-h-screen w-full">
    <HeroSection backgroundImage={heroImage} content={heroContent} />
    <SectionsGrid sections={sectionConfigs} />
  </main>
);

type HeroSectionProps = {
  backgroundImage: string;
  content: {
    subtitle: string;
    highlight: string;
    tagline: string;
  };
};

const HeroSection = ({ backgroundImage, content }: HeroSectionProps) => (
  <section className="relative px-12 py-14 lg:px-24 lg:py-16 overflow-hidden w-full flex items-center min-h-[560px]">
    <img
      src={backgroundImage}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 relative z-10 w-full text-white drop-shadow">
      <div className="max-w-xl">
        <div className="flex flex-wrap items-baseline gap-3">
          <p className="text-3xl lg:text-4xl font-bold">{content.subtitle}</p>
          <h1 className="text-7xl lg:text-8xl font-black text-emerald-200">{content.highlight}</h1>
        </div>
        <p className="mt-3 text-3xl lg:text-4xl font-bold">{content.tagline}</p>
      </div>
    </div>
  </section>
);

const SectionsGrid = ({ sections }: { sections: SectionConfig[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 text-lg lg:text-xl">
    {sections.map((section) => (
      <SectionCard key={section.title} config={section} cardBaseClass={cardBaseClass} />
    ))}
  </div>
);

export default JuniorDetails;
