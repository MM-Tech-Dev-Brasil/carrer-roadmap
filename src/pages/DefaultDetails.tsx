const DefaultDetails = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="bg-cyan-400 text-center py-12 shadow-md">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900">Career Planning</h1>
        <h2 className="text-xl sm:text-2xl font-semibold italic text-gray-800 mt-3">
          Growth checkpoints and what to expect at each stage
        </h2>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 font-semibold">
            Intern → CTO
          </div>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Each step on the roadmap builds on the last: learn fundamentals, gain delivery confidence, lead features,
            then lead people and strategy. Use this page as a quick reminder of the journey.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">How to use this roadmap</h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 leading-relaxed">
            <li>Focus on the skills in your current level before jumping ahead.</li>
            <li>Deliver small wins consistently and track them so you can tell the story later.</li>
            <li>Seek feedback early and often—mentors accelerate every stage.</li>
            <li>Teach what you know; it cements understanding and shows leadership.</li>
            <li>Align your work with business impact as you grow toward senior and lead roles.</li>
          </ul>
        </section>

        <div className="text-center">
          <a
            href="/"
            className="text-cyan-600 font-bold tracking-tight hover:text-cyan-500 transition-colors"
          >
            ← Back to the roadmap
          </a>
        </div>
      </main>
    </div>
  );
};

export default DefaultDetails;
