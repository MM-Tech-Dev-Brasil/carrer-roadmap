import Header from './components/header.component'
import StepBubble from './components/stepBubble.component'
import './index.css'
import scurve from './assets/scurve.svg'
import type { CareerStep } from './types'

const careerData: CareerStep[] = [
  {
    id: 1,
    level: "INTERN",
    description: "You're just getting started — learning the ropes, asking lots of questions, and getting your hands dirty with real code. Every line you write is a win!",
    color: "pink-500",
    details: {
      skills: ['HTML', 'Basic CSS', 'JavaScript (Fundamentals)', 'Basic Git'],
      goals: ['Contribute to 5 projects', 'Complete frontend courses']
    }
  },
  {
    id: 2,
    level: "JUNIOR I & II",
    description: "You're no longer just watching — now you're building! You handle tasks, play with your stack, and learn something new every single day!",
    color: "blue-500",
    detailUrl: "/details-junior",
    details: {
      skills: ['React/Angular/Vue', 'REST APIs', 'Unit Testing', 'Basic Deployment'],
      goals: ['Lead a small feature', 'Mentor an Intern']
    }
  },
  {
    id: 3,
    level: "MID-LEVEL I & II",
    description: "You've got skills and confidence. You build cool stuff, solve problems, and help others along the way. People trust you to get things done!",
    color: "orange-500",
    details: {
      skills: ['Software Architecture', 'Solving Complex Problems', 'Performance/Optimization', 'Design Patterns'],
      goals: ['Increase code efficiency by 20%', 'Give a technical presentation']
    }
  },
  {
    id: 4,
    level: "SENIOR I & II",
    description: "You're the go-to person when things get tricky. You see the big picture, guide the team, and make everything run smoother!",
    color: "purple-500",
    details: {
      skills: ['Strategic Vision', 'Mentorship and Leadership', 'System Design', 'Cross-Department Communication'],
      goals: ['Reduce technical debt in one area', 'Design a new microservice']
    }
  },
  {
    id: 5,
    level: "TECH LEAD",
    description: "You're steering the ship! You help the team make smart choices, connect tech with the bigger picture, and keep things moving in the right direction.",
    color: "red-500",
    details: {
      skills: ['People Management', 'Roadmap Planning', 'Talent Assessment', 'Strategic Alignment'],
      goals: ['Launch a new product/service', 'Structure the engineering team']
    }
  },
  {
    id: 6,
    level: "CTO",
    description: "You're the tech visionary. You set the course, inspire the crew, and make sure you're building not just cool things, but the right things for the future!",
    color: "green-500",
    details: {
      skills: ['Executive Leadership', 'Technological Innovation', 'Budget Management', 'Engineering Culture & Vision'],
      goals: ['Define the 3-year tech strategy', 'Recruit senior engineering leaders']
    }
  },
];

const verticalAdjustments: Record<number, string> = {
  4: "-translate-y-7",
  5: "-translate-y-8",
  6: "-translate-y-9",
}

const TIMELINE_WIDTH = 1100

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-blue-50 font-sans">
      <Header />
      <main className="w-full overflow-x-auto py-10 relative">
        <div
          className="mx-auto"
          style={{ width: TIMELINE_WIDTH, minWidth: TIMELINE_WIDTH }}
        >
          <div className="relative w-full flex justify-center min-h-screen">
            <div
              className="relative w-full min-h-screen bg-no-repeat bg-top bg-contain"
              style={{ backgroundImage: `url(${scurve})` }}
            >
              <div className="relative flex flex-col w-full z-10">
                {careerData.map(step => {
                  const isEvenStep = step.id % 2 === 0
                  const spacingClass = step.id > 2 ? "mt-2" : "mt-6"
                  const verticalShiftClass = verticalAdjustments[step.id] ?? ""
                  return (
                    <div
                      key={step.id}
                      className={`flex w-full ${spacingClass} ${verticalShiftClass} justify-center`}
                    >
                      <div className={`w-full max-w-3xl ${isEvenStep ? "pl-20" : "pr-12"}`}>
                        <StepBubble step={step} reverse={isEvenStep} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
