import type { DetailModalProps } from "../types"

export default function DetailModal({ step, onClose }: DetailModalProps) {
  if (!step) return null
  const { skills, goals } = step.details
  const cardColor = `bg-${step.color}`

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="relative w-full max-w-lg mx-auto rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-300">
        <div className={`${cardColor} p-6 text-white text-center relative`}>
          <h2 className="text-4xl font-black">{step.level}</h2>
          <p className="mt-1 text-lg opacity-90">Career Step {step.id}</p>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center text-white font-bold"
            aria-label="Close details"
          >
            ✕
          </button>
        </div>

        <div className="bg-white p-6 md:p-8 space-y-6">
          <p className="text-gray-700 border-l-4 pl-4 border-cyan-400 italic">"{step.description}"</p>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span className={`w-4 h-4 rounded-full ${step.color}`}></span>
              Key Skills
            </h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-600">
              {skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span className={`w-4 h-4 rounded-full ${step.color}`}></span>
              Development Goals
            </h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-600">
              {goals.map((goal, i) => <li key={i}>{goal}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
