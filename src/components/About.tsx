import React from "react";
import { Code, Palette, Brain, Rocket } from "lucide-react";

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "Expertise in modern web technologies including React, Next.js, Node.js, and TypeScript",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description:
        "Research in fraud detection using blockchain and ML with 99-100% accuracy rates",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating beautiful, user-friendly interfaces with attention to detail and accessibility",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description:
        "Passionate about exploring new technologies and building intelligent solutions",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div className="text-8xl font-bold text-blue-600 dark:text-blue-400">
                      <img
                        src="/image/jubayer.png"
                        alt="Profile Picture"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Passionate Developer & Tech Enthusiast
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a Computer Science Engineering student at Green University
                of Bangladesh, graduating in July 2025. My journey in technology
                is driven by a passion for creating innovative solutions that
                make a real difference.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                With expertise spanning full-stack web development to machine
                learning research, I've contributed to projects ranging from
                e-commerce platforms to fraud detection systems using blockchain
                technology. I believe in writing clean, efficient code and
                creating intuitive user experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest in AI
                and blockchain, contributing to open source projects, or
                designing graphics that tell compelling stories.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
