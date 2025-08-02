import React from "react";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { Experience as ExperienceType } from "../types";

export const Experience: React.FC = () => {
  const experiences: ExperienceType[] = [
    {
      id: "1",
      title: "Web Developer Intern",
      company: "Turtle Solution Ltd.",
      duration: "Feb 2025 - Jun 2025",
      current: true,
      description: [
        "Developed responsive web applications using Next.js and React.js",
        "Implemented modern UI components with Tailwind CSS and Bootstrap",
        "Built RESTful APIs using Express.js and Node.js",
        "Collaborated with senior developers on production-level projects",
        "Optimized application performance and implemented best practices",
      ],
    },
    {
      id: "2",
      title: "Student Counselor & Finance Officer",
      company: "Washington Immigration",
      duration: "Jun 2022 - Jul 2024",
      description: [
        "Provided comprehensive guidance to students for international education opportunities",
        "Managed financial operations and maintained accurate records",
        "Developed streamlined processes that improved client satisfaction by 30%",
        "Handled visa applications and documentation for over 200+ students",
        "Maintained strong relationships with educational institutions globally",
      ],
    },
    {
      id: "3",
      title: "Graphic Designer",
      company: "Koln Fashion BD Ltd.",
      duration: "2021",
      description: [
        "Created compelling visual designs for fashion marketing campaigns",
        "Designed product catalogs and promotional materials",
        "Collaborated with marketing team to develop brand identity elements",
        "Utilized Adobe Creative Suite for professional design work",
        "Maintained brand consistency across all design materials",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey through various roles has shaped my skills in
            development, leadership, and creative problem-solving.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg hidden md:block"></div>

                  <div className="md:ml-20">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
                            <MapPin className="w-4 h-4 mr-2" />
                            {exp.company}
                            {exp.current && (
                              <span className="ml-3 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-2" />
                            {exp.duration}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-3">
                        {exp.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start text-gray-600 dark:text-gray-400"
                          >
                            <ChevronRight className="w-4 h-4 mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
