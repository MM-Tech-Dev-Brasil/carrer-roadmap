export interface StepDetails {
  skills: string[]
  goals: string[]
}

export type MarkerColor = "pink-500" | "blue-500" | "orange-500" | "purple-500" | "red-500" | "green-500"

export interface CareerStep {
  id: number
  level: string
  description: string
  color: MarkerColor
  details: StepDetails
  detailUrl?: string
}

export interface StepBubbleProps {
  step: CareerStep
  reverse?: boolean
}

export interface DetailModalProps {
  step: CareerStep | null
  onClose: () => void
}
