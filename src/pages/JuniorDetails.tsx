import React from "react";

const JuniorDetails: React.FC = () => {
  const cardBase = "flex flex-col w-full md:aspect-square";
  return (
    <div className="min-h-screen w-full bg-[#1f6bb5]">
      <div className="h-full w-full bg-white overflow-hidden">

        <div className="relative px-12 py-14 lg:px-24 lg:py-16 overflow-hidden bg-[#2567d4] w-full flex items-center min-h-[560px]">
          <div className="flex flex-col lg:items-start gap-10 relative z-10 w-full">
            <div className="max-w-xl">
              <p className="text-3xl lg:text-4xl text-sky-100 font-light">How to become a</p>
              <h1 className="text-7xl lg:text-8xl font-black text-emerald-300 drop-shadow-sm">Junior II</h1>
              <p className="mt-3 text-3xl lg:text-4xl text-sky-100 font-semibold">Tech Dev Brasil</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 text-lg lg:text-xl">

          <section className={`${cardBase} bg-white px-14 py-14 lg:px-24 lg:py-20 border-b md:border-b-0 md:border-r border-slate-200`}>
            <h2 className="text-5xl lg:text-6xl font-extrabold text-sky-800">
              HARD SKILLS
            </h2>

            <ul className="mt-8 space-y-5 text-2xl lg:text-3xl text-slate-800 leading-relaxed list-none">
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Proficient in JavaScript and TypeScript.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Build reusable, functional components in React.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Create REST APIs using Node.js (Express, Fastify, or Nest.js).</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Architect and structure APIs in NestJS.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Use Git/GitHub (branching, pull requests, code reviews).</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>CRUD + queries with PostgreSQL and MongoDB.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Consume APIs and handle errors on the frontend.</span></li>
            </ul>
          </section>

          <section className={`${cardBase} bg-[#3ab8f2] px-14 py-14 lg:px-24 lg:py-20 border-b border-slate-200 text-white`}>
            <h2 className="text-5xl lg:text-6xl font-extrabold">
              SOFT SKILLS
            </h2>

            <ul className="mt-8 space-y-5 text-2xl lg:text-3xl leading-relaxed list-none">
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Clear communication in technical discussions.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Accountability and ownership mindset.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Openness to feedback and quick improvement.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Time management and organization.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Active participation in team rituals.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Collaborative, team-first mindset.</span></li>
            </ul>
          </section>

          <section className={`${cardBase} bg-[#00b55d] px-14 py-14 lg:px-24 lg:py-20 text-white border-b md:border-b-0 md:border-r border-slate-200`}>
            <h2 className="text-5xl lg:text-6xl font-extrabold">
              ENGLISH LEVEL
            </h2>

            <ul className="mt-8 space-y-5 text-2xl lg:text-3xl leading-relaxed list-none">
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Read technical documentation.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Understand common technical vocabulary.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Write basic communication (emails, chats, tickets).</span></li>
            </ul>
          </section>

          <section className={`${cardBase} bg-[#2567d4] px-14 py-14 lg:px-24 lg:py-20 text-white`}>
            <h2 className="text-5xl lg:text-6xl font-extrabold">
              PROJECTS TO DELIVER
            </h2>

            <ul className="mt-8 space-y-5 text-2xl lg:text-3xl leading-relaxed list-none">
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>API built in Nest.js with Swagger docs.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Frontend in React + TypeScript consuming that API.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Projects independent, documented, and versioned.</span></li>
            </ul>
          </section>

          <section className={`${cardBase} bg-[#bec4d9] px-14 py-14 lg:px-24 lg:py-20 border-t md:border-t-0 md:border-r border-slate-200 text-slate-900`}>
            <h2 className="text-5xl lg:text-6xl font-extrabold">
              EXPERIENCE TIME
            </h2>

            <ul className="mt-8 space-y-5 text-2xl lg:text-3xl leading-relaxed list-none">
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>6 months → 1 year as Junior I.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Or equivalent experience elsewhere.</span></li>
            </ul>
          </section>

          <section className={`${cardBase} bg-white px-14 py-14 lg:px-24 lg:py-20 border-t border-slate-200`}>
            <h2 className="text-5xl lg:text-6xl font-extrabold text-sky-900">
              TIPS TO GET THERE
            </h2>

            <ul className="mt-8 space-y-5 text-2xl lg:text-3xl leading-relaxed text-slate-800 list-none">
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Understand how JS/TS work under the hood.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Learn and apply code patterns.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Share learnings with the team.</span></li>
              <li className="flex gap-3"><span className="text-3xl leading-tight">•</span><span>Read documentation and articles weekly.</span></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JuniorDetails;
