import Header from './components/header.component'
import StepBubble from './components/stepBubble.component'
import './index.css'
import scurve from './assets/scurve.svg'; 
import type { CareerStep } from './types'

const careerData: CareerStep[] = [
  {
    id: 1,
    level: "INTERN",
    description: "You are just starting — learning the basics...",
    color: "pink-500",
    details: {
      skills: ['HTML', 'Basic CSS', 'JavaScript (Fundamentals)', 'Basic Git'],
      goals: ['Contribute to 5 projects', 'Complete frontend courses']
    }
  },
  {
    id: 2,
    level: "JUNIOR I & II",
    description: "You are no longer just observing — now you are building!",
    color: "blue-500",
    details: {
      skills: ['React/Angular/Vue', 'REST APIs', 'Unit Testing', 'Basic Deployment'],
      goals: ['Lead a small feature', 'Mentor an Intern']
    }
  },
  {
    id: 3,
    level: "MID-LEVEL I & II",
    description: "You have gained skills and confidence...",
    color: "orange-500",
    details: {
      skills: ['Software Architecture', 'Solving Complex Problems', 'Performance/Optimization', 'Design Patterns'],
      goals: ['Increase code efficiency by 20%', 'Give a technical presentation']
    }
  },
  {
    id: 4,
    level: "SENIOR I & II",
    description: "You are the go-to person when things get complicated.",
    color: "purple-500",
    details: {
      skills: ['Strategic Vision', 'Mentorship and Leadership', 'System Design', 'Cross-Department Communication'],
      goals: ['Reduce technical debt in one area', 'Design a new microservice']
    }
  },
  {
    id: 5,
    level: "TECH LEAD",
    description: "You are in charge! You help the team make smart decisions...",
    color: "red-500",
    details: {
      skills: ['People Management', 'Roadmap Planning', 'Talent Assessment', 'Strategic Alignment'],
      goals: ['Launch a new product/service', 'Structure the engineering team']
    }
  },
  {
    id: 6,
    level: "CTO",
    description: "You are the technology visionary...",
    color: "green-500",
    details: {
      skills: ['Executive Leadership', 'Technological Innovation', 'Budget Management', 'Engineering Culture & Vision'],
      goals: ['Define the 3-year tech strategy', 'Recruit senior engineering leaders']
    }
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-10 relative">
        <div className="relative w-full flex justify-center min-h-screen">
          <div
            className="relative w-full min-h-screen bg-no-repeat bg-top bg-contain"
            style={{ backgroundImage: `url(${scurve})` }}
          >
            <div className="relative flex flex-col w-full z-10">
              {careerData.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex w-full mt-14 sm:mt-24 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className="w-3/4 max-w-md">
                    <StepBubble step={step} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}