import React from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { education as EducationType } from "../types";

export const Education: React.FC = () => {
  const education: EducationType[] = [
    {
      id: "1",
      degree: "BSc in Computer Science Engineering",
      institution: "Green University of Bangladesh",
      duration: "2021 - 2025",
      grade: "Graduated at July 2025",
    },
    {
      id: "2",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sherpur Government College",
      duration: "2018 - 2019",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey in computer science and engineering, building
            the foundation for my technical expertise.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/20"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.duration}
                      </div>
                    </div>
                  </div>

                  {edu.grade && (
                    <div className="flex items-center bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 px-4 py-2 rounded-lg border border-green-200 dark:border-green-700">
                      <Award className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                      <span className="text-green-700 dark:text-green-300 font-medium">
                        {edu.grade}
                      </span>
                    </div>
                  )}
                </div>

                {/* Additional Info for Current Degree */}
                {index === 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                          Key Coursework
                        </h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                          <li>• Data Structures & Algorithms</li>
                          <li>• Database Management Systems</li>
                          <li>• Software Engineering</li>
                          <li>• Computer Networks</li>
                          <li>• Machine Learning</li>
                          <li>• Web Technologies</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                          Research Focus
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          Specializing in fraud detection systems using
                          blockchain technology and machine learning, with
                          emphasis on explainable AI and real-time transaction
                          monitoring.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
