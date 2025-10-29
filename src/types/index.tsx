export interface StepDetails {
  skills: string[]
  goals: string[]
}

export interface CareerStep {
  id: number
  level: string
  description: string
  color: string
  details: StepDetails
}

export interface StepBubbleProps {
  step: CareerStep
}

export interface DetailModalProps {
  step: CareerStep | null
  onClose: () => void
}

export interface ArrowDown {
  direction: "left" | "right" 
  length?: number 
}
