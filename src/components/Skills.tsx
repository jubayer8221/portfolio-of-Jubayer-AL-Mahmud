import React from "react";
import { Code, Palette, Database, Globe } from "lucide-react";

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", proficiency: 90 },
        { name: "JavaScript", proficiency: 95 },
        { name: "TypeScript", proficiency: 88 },
        { name: "C", proficiency: 70 },
        { name: "HTML/CSS", proficiency: 95 },
        { name: "SQL", proficiency: 80 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      skills: [
        { name: "Next.js", proficiency: 92 },
        { name: "React.js", proficiency: 95 },
        { name: "Node.js", proficiency: 85 },
        { name: "Redux", proficiency: 88 },
        { name: "Express.js", proficiency: 80 },
        // { name: "TensorFlow", proficiency: 75 },
        { name: "Django", proficiency: 70 },
      ],
    },
    {
      title: "Styling & Design",
      icon: Palette,
      skills: [
        { name: "Tailwind CSS", proficiency: 95 },
        { name: "Bootstrap", proficiency: 90 },
        { name: "Figma", proficiency: 70 },
        { name: "Adobe Photoshop", proficiency: 85 },
        { name: "Adobe Illustrator", proficiency: 80 },
        { name: "Canva", proficiency: 90 },
      ],
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: [
        { name: "MongoDB", proficiency: 85 },
        { name: "PostgreSQL", proficiency: 80 },
        { name: "Git/GitHub", proficiency: 90 },
        // { name: 'Docker', proficiency: 70 },
        { name: "Vercel", proficiency: 85 },
        { name: "AWS", proficiency: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels across various technologies and tools.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Machine Learning",
              "Blockchain",
              "Solidity",
              "Web3.js",
              "REST APIs",
              "GraphQL",
              "Prisma",
              "Supabase",
              "Firebase",
              "Stripe",
              "Socket.io",
              "Jest",
              "Cypress",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:scale-105 transition-transform duration-200 cursor-default border border-blue-200 dark:border-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
