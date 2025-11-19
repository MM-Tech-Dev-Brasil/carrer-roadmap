import React from "react";
import heroImage from "../assets/1.png";
import hardImage from "../assets/7.png";
import softImage from "../assets/2.png";
import englishImage from "../assets/3.png";
import projectsImage from "../assets/4.png";
import experienceImage from "../assets/5.png";
import tipsImage from "../assets/6.png";
import SectionCard, { SectionConfig } from "../components/sectionCard.component";

const JuniorDetails: React.FC = () => {
  const cardBase = "flex flex-col w-full md:aspect-square";
  const sections: SectionConfig[] = [
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
      backgroundClass: "bg-white",
      titleClass: "text-sky-800",
      listClass: "text-slate-800",
      borderClass: "border-b md:border-b-0 md:border-r border-slate-200",
      circleClass: "absolute right-[-3rem] top-6 w-72 h-72 rounded-full border-4 border-emerald-200/60",
      imageSrc: hardImage,
      imageClass:
        "absolute right-[-3rem] top-1/2 -translate-y-1/2 w-[36rem] lg:w-[48rem] opacity-40 lg:opacity-60 pointer-events-none select-none",
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
      backgroundClass: "bg-[#3ab8f2] text-white",
      titleClass: "text-white",
      listClass: "text-white",
      borderClass: "border-b border-slate-200",
      circleClass: "absolute left-[-4rem] bottom-6 w-64 h-64 rounded-full border-4 border-emerald-200/50",
      imageSrc: softImage,
      imageClass:
        "absolute right-[-3rem] top-1/2 -translate-y-[60%] w-[28rem] lg:w-[36rem] opacity-40 lg:opacity-60 pointer-events-none select-none",
    },
    {
      title: "ENGLISH LEVEL",
      items: [
        "Read technical documentation.",
        "Understand common technical vocabulary.",
        "Write basic communication (emails, chats, tickets).",
      ],
      backgroundClass: "bg-[#00b55d] text-white",
      titleClass: "text-white",
      listClass: "text-white",
      borderClass: "border-b md:border-b-0 md:border-r border-slate-200",
      circleClass: "absolute left-[-4rem] top-6 w-60 h-60 rounded-full border-4 border-white/40",
      imageSrc: englishImage,
      imageClass:
        "absolute right-[-3rem] top-1/2 -translate-y-1/2 w-[36rem] lg:w-[48rem] opacity-40 lg:opacity-60 pointer-events-none select-none",
    },
    {
      title: "PROJECTS TO DELIVER",
      items: [
        "API built in Nest.js with Swagger docs.",
        "Frontend in React + TypeScript consuming that API.",
        "Projects independent, documented, and versioned.",
      ],
      backgroundClass: "bg-[#2567d4] text-white",
      titleClass: "text-white",
      listClass: "text-white",
      borderClass: "",
      circleClass: "absolute left-[-4rem] bottom-6 w-64 h-64 rounded-full border-4 border-white/40",
      imageSrc: projectsImage,
      imageClass:
        "absolute right-[-3rem] top-1/2 -translate-y-1/2 w-[36rem] lg:w-[48rem] opacity-40 lg:opacity-60 pointer-events-none select-none",
    },
    {
      title: "EXPERIENCE TIME",
      items: [
        "6 months → 1 year as Junior I.",
        "Or equivalent experience elsewhere.",
      ],
      backgroundClass: "bg-[#bec4d9] text-slate-900",
      titleClass: "text-slate-900",
      listClass: "text-slate-900",
      borderClass: "border-t md:border-t-0 md:border-r border-slate-200",
      circleClass: "absolute right-[-4rem] bottom-6 w-64 h-64 rounded-full border-4 border-indigo-200/60",
      imageSrc: experienceImage,
      imageClass:
        "absolute right-[-3rem] top-1/2 -translate-y-1/2 w-[36rem] lg:w-[48rem] opacity-40 lg:opacity-60 pointer-events-none select-none",
    },
    {
      title: "TIPS TO GET THERE",
      items: [
        "Understand how JS/TS work under the hood.",
        "Learn and apply code patterns.",
        "Share learnings with the team.",
        "Read documentation and articles weekly.",
      ],
      backgroundClass: "bg-white text-slate-800",
      titleClass: "text-sky-900",
      listClass: "text-slate-800",
      borderClass: "border-t border-slate-200",
      circleClass: "absolute left-[-3rem] top-6 w-60 h-60 rounded-full border-4 border-emerald-200/50",
      imageSrc: tipsImage,
      imageClass:
        "absolute right-[-3rem] top-1/2 -translate-y-1/2 w-[36rem] lg:w-[48rem] opacity-40 lg:opacity-60 pointer-events-none select-none",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#1f6bb5]">
      <div className="h-full w-full bg-white overflow-hidden">

        <div className="relative px-12 py-14 lg:px-24 lg:py-16 overflow-hidden bg-[#2567d4] w-full flex items-center min-h-[560px]">
          <div className="absolute -left-16 -top-24 w-80 h-80 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute left-24 top-10 w-32 h-32 rounded-full bg-emerald-300/30 blur-xl" />
          <div className="absolute right-[-4rem] top-16 w-96 h-96 rounded-full bg-indigo-800/20 blur-3xl" />
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 relative z-10 w-full">
            <div className="max-w-xl">
              <div className="flex flex-wrap items-baseline gap-3">
                <p className="text-3xl lg:text-4xl text-sky-100 font-light">How to become a</p>
                <h1 className="text-7xl lg:text-8xl font-black text-emerald-300 drop-shadow-sm">Junior II</h1>
              </div>
              <p className="mt-3 text-3xl lg:text-4xl text-sky-100 font-semibold">Tech Dev Brasil</p>
            </div>
            <div className="w-full flex justify-center lg:justify-end">
              <img
                src={heroImage}
                alt="Illustration for Junior II"
                className="w-[40rem] sm:w-[56rem] lg:w-[68rem] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 text-lg lg:text-xl">
          {sections.map((section) => (
            <SectionCard
              key={section.title}
              config={section}
              cardBase={cardBase}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JuniorDetails;
