import { PiMapPinFill } from "react-icons/pi"

const markerColors = [
  "pink-500",
  "blue-500",
  "orange-500",
  "purple-500",
  "red-500",
  "green-500",
] as const

type MarkerColor = (typeof markerColors)[number]
type Direction = "left" | "right"

export interface StepDotProps {
  id: number | string
  color?: MarkerColor
  clickable?: boolean
  ariaLabel?: string
  direction?: Direction
}

const colorClasses = Object.fromEntries(
  markerColors.map(c => [c, `text-${c}`])
) as Record<MarkerColor, string>

export default function StepDot({
  id,
  color = "green-500",
  clickable = false,
  ariaLabel,
  direction = "left",
}: StepDotProps) {

  const isRight = direction === "right"

  return (
    <div className={`relative h-36 w-36 ${isRight ? "-mr-7" : "-ml-7"}`}>
      <PiMapPinFill
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full ${colorClasses[color]} ${
          isRight ? "-rotate-90" : "rotate-90"
        }`}
        fill="currentColor"
      />

      <div
        className={`relative z-10 flex h-full w-full items-center ${
          isRight ? "justify-start pl-3" : "justify-end pr-3"
        }`}
      >
        <div
          aria-label={ariaLabel}
          className={`flex h-20 w-20 items-center justify-center rounded-full bg-white border border-slate-100 text-3xl font-black text-gray-900 ${
            clickable ? "cursor-pointer transition-transform duration-200 hover:scale-105" : ""
          }`}
        >
          {id}
        </div>
      </div>
    </div>
  )
}
