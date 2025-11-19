import type { ElementType } from "react"
import type { StepBubbleProps } from "../types"

const colorMap: Record<string, { bg: string; border: string; text: string; hoverBg: string; hoverText: string }> = {
  "pink-500": { bg: "bg-pink-500", border: "border-pink-500", text: "text-pink-500", hoverBg: "hover:bg-pink-500", hoverText: "hover:text-white" },
  "blue-500": { bg: "bg-blue-500", border: "border-blue-500", text: "text-blue-500", hoverBg: "hover:bg-blue-500", hoverText: "hover:text-white" },
  "orange-500": { bg: "bg-orange-500", border: "border-orange-500", text: "text-orange-500", hoverBg: "hover:bg-orange-500", hoverText: "hover:text-white" },
  "purple-500": { bg: "bg-purple-500", border: "border-purple-500", text: "text-purple-500", hoverBg: "hover:bg-purple-500", hoverText: "hover:text-white" },
  "red-500": { bg: "bg-red-500", border: "border-red-500", text: "text-red-500", hoverBg: "hover:bg-red-500", hoverText: "hover:text-white" },
  "green-500": { bg: "bg-green-500", border: "border-green-500", text: "text-green-500", hoverBg: "hover:bg-green-500", hoverText: "hover:text-white" },
}
export default function StepBubble({ step, align }: StepBubbleProps) {
  const colors = colorMap[step.color] || colorMap["green-500"]
  const detailHref = step.detailUrl ?? "/details"
  const clickable = Boolean(step.detailUrl)
  const Wrapper: ElementType = clickable ? "a" : "div"
  const wrapperProps = clickable ? { href: detailHref } : {}
  return (
    <>
      <Wrapper
        {...wrapperProps}
        className={`group block ${clickable ? "cursor-pointer" : ""}`}
        aria-label={clickable ? `View details for ${step.level}` : undefined}
      >
        <div className={`relative flex items-center mb-16 gap-6 sm:gap-10 ${align === "left" ? "flex-row" : "flex-row-reverse"}`}>
          <div className="flex-shrink-0">
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center font-extrabold text-3xl sm:text-4xl text-white ring-4 ring-white shadow-lg ${colors.bg} ${clickable ? "transition-transform duration-200 group-hover:scale-105" : ""}`}
              aria-label={`Step ${step.level}`}
            >
              {step.id}
            </div>
          </div>
          <div className={`flex-1 max-w-xl ${align === "left" ? "text-right" : "text-left"}`}>
            <p className={`font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight text-outline-white ${clickable ? "group-hover:underline" : ""}`}>{step.level}</p>
            <p className="mt-3 text-lg sm:text-xl text-gray-700 leading-relaxed text-outline-white">{step.description}</p>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
