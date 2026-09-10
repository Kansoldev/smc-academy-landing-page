import {
  BarChart3,
  Bitcoin,
  Database,
  Coins,
  FileImage,
  LayoutDashboard,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHead } from "./shared";

const courseLists = [
  [
    Bitcoin,
    "Blockchain & Smart Contract Development",
    "Write, test and deploy your own smart contracts on Ethereum and BSC, then ship a working dApp.",
    "12 weeks",
  ],
  [
    LayoutDashboard,
    "Frontend Development",
    "Learn to build interactive products with popular front-end tools. Gain practical skills through hands-on projects and turn your ideas into engaging web experiences.",
    "12 weeks",
  ],
  [
    Database,
    "Data Analysis",
    "Learn how to turn raw data into meaningful insights using essential data analysis tools and techniques. Build practical skills in data cleaning, visualization, interpretation, and reporting to make smarter, data-driven decisions.",
    "8 weeks",
  ],
  [
    BarChart3,
    "Blockchain Research",
    "Explore the fundamentals of blockchain technology, emerging trends, and real-world applications. Develop the research skills needed to analyze blockchain ecosystems, evaluate innovations, and uncover insights shaping the future of decentralized technology..",
    "8 weeks",
  ],
  [
    Coins,
    "Cryptocurrency Trading",
    "Learn the fundamentals of cryptocurrency trading, from market analysis and risk management to trading strategies and portfolio planning. Develop the knowledge and discipline needed to navigate crypto markets with greater confidence.",
    "8 weeks",
  ],
  [
    FileImage,
    "Graphics Design",
    "Learn how to create stunning visuals that communicate ideas effectively. Develop practical skills in design principles, branding, typography, color, and industry-standard tools through hands-on projects.",
    "8 weeks",
  ],
] as const;

function Courses() {
  return (
    <section id="courses" className="py-24 max-[600px]:py-16">
      <div className="w-full max-w-290 mx-auto px-5 md:px-8">
        <SectionHead
          title="Our Featured Courses"
          description="Explore our carefully selected courses, designed to help you build practical skills, expand your knowledge, and achieve your goals with confidence."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {courseLists.map(([Icon, t, d, w]) => (
            <Card key={t}>
              <CardContent className="p-6 flex flex-col items-start">
                <div className="flex items-center justify-center rounded-lg bg-[#eee] text-[#12141a] size-10 mb-4">
                  <Icon className="size-5 stroke-[1.7]" />
                </div>

                <h3 className="mb-2 font-semibold text-lg">{t}</h3>
                <p className="flex-1 text-sm text-[#565c68] leading-relaxed">
                  {d}
                </p>
                <div className="mt-5">
                  <span className="bg-[#f5f6f8] text-xs text-[#565c68] font-medium rounded-full px-3 py-1.5">
                    {w}
                  </span>
                </div>

                <a
                  href="https://forms.gle/Y6HZ8qndwTk1jKky9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#12141a] text-white hover:-translate-y-px hover:bg-[#1c1f28] rounded-full font-semibold text-sm px-5.5 py-3 mt-6"
                >
                  Enroll Now
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
