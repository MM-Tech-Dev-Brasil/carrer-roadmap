import { useState } from "react"
import type { CareerStep, StepBubbleProps } from "../types"
import DetailModal from "./skillsandgoals.modal"

const colorMap: Record<string, { bg: string; border: string; text: string; hoverBg: string; hoverText: string }> = {
  "pink-500": { bg: "bg-pink-500", border: "border-pink-500", text: "text-pink-500", hoverBg: "hover:bg-pink-500", hoverText: "hover:text-white" },
  "blue-500": { bg: "bg-blue-500", border: "border-blue-500", text: "text-blue-500", hoverBg: "hover:bg-blue-500", hoverText: "hover:text-white" },
  "orange-500": { bg: "bg-orange-500", border: "border-orange-500", text: "text-orange-500", hoverBg: "hover:bg-orange-500", hoverText: "hover:text-white" },
  "purple-500": { bg: "bg-purple-500", border: "border-purple-500", text: "text-purple-500", hoverBg: "hover:bg-purple-500", hoverText: "hover:text-white" },
  "red-500": { bg: "bg-red-500", border: "border-red-500", text: "text-red-500", hoverBg: "hover:bg-red-500", hoverText: "hover:text-white" },
  "green-500": { bg: "bg-green-500", border: "border-green-500", text: "text-green-500", hoverBg: "hover:bg-green-500", hoverText: "hover:text-white" },
}
export default function StepBubble({ step }: StepBubbleProps) {
  const [activeStep, setActiveStep] = useState<CareerStep | null>(null)
  const colors = colorMap[step.color] || colorMap["green-500"]
  const openModal = () => setActiveStep(step)
  return (
    <>
      <div className="relative flex flex-col items-center mb-16">
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center font-extrabold text-3xl text-white ring-4 ring-white shadow-lg ${colors.bg}`}
          aria-label={`Step ${step.level}`}
        >
          {step.id}
        </div>
        <div className={`mt-8 w-full max-w-lg border-b-4 p-8 rounded-3xl shadow-lg bg-white ${colors.border}`}>
          <p className="font-bold text-3xl text-gray-800 mb-3 text-center">{step.level}</p>
          <p className="text-lg text-gray-700 leading-relaxed text-center">{step.description}</p>
          <button
            onClick={openModal}
            className={`mt-5 w-full py-3 text-base font-semibold rounded-full bg-gray-100 ${colors.text} ${colors.hoverBg} ${colors.hoverText} transition-colors duration-200`}
          >
            VIEW DETAILS
          </button>
        </div>
      </div>
      <DetailModal step={activeStep} onClose={() => setActiveStep(null)} />
    </>
  )
}
