import type { ElementType } from "react"
import type { StepBubbleProps } from "../types"
import StepDot from "./stepDot.component"

export default function StepBubble({ step, reverse = false }: StepBubbleProps) {
  const detailHref = step.detailUrl ?? "/details"
  const clickable = Boolean(step.detailUrl)
  const Wrapper: ElementType = clickable ? "a" : "div"
  const wrapperProps = clickable ? { href: detailHref } : {}
  const isReverse = Boolean(reverse)
  const dotDirection = isReverse ? "right" : "left"
  return (
    <Wrapper
      {...wrapperProps}
      className={`group block ${clickable ? "cursor-pointer" : ""}`}
      aria-label={clickable ? `View details for ${step.level}` : undefined}
    >
      <div className={`relative flex items-center mb-16 gap-36 ${isReverse ? "flex-row-reverse" : "flex-row"}`}>
        <div className="flex-1 max-w-xl text-left">
          <p className={`font-extrabold text-2xl text-gray-900 tracking-tight text-outline-white ${clickable ? "group-hover:underline" : ""}`}>{step.level}</p>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed text-outline-white">{step.description}</p>
        </div>
        <div className="flex-shrink-0">
          <StepDot
            id={step.id}
            color={step.color}
            clickable={clickable}
            ariaLabel={`Step ${step.level}`}
            direction={dotDirection}
          />
        </div>
      </div>
    </Wrapper>
  )
}
