import React from "react";
import { ExternalLink, Github, Tag } from "lucide-react";
import { Project } from "../types";

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: "1",
      title: "Eco Bazar",
      description:
        "A modern eco-friendly grocery store platform with seamless shopping experience, product catalog, cart management, and secure checkout process.",
      image:
        "https://raymund-lapuz.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fecobazar%2Fecobazar.png&w=3840&q=75",
      technologies: [
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
      ],
      githubUrl: "https://github.com/jubayer8221/eco-bazar",
      liveUrl: "https://eco-bazar-psi.vercel.app",
      featured: true,
    },
    {
      id: "2",
      title: "Chart Craft",
      description:
        "Interactive chart visualization tool with data import, multiple chart types, customization options, and export functionality for data analysis.",
      image: "/image/project2.png",
      technologies: [
        "Next.js",
        "Redux",
        "Chart.js",
        "TypeScript",
        "TailwindCSS",
      ],
      githubUrl: "https://github.com/jubayer8221/chart-craft",
      liveUrl: "https://chart-craft.vercel.app/en/login",
      featured: true,
    },
    {
      id: "3",
      title: "Prime Haven",
      description:
        "Comprehensive house rental platform connecting property owners with tenants, featuring advanced search, booking system, and user management.",
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/jubayer8221",
      liveUrl: "https://github.com/jubayer8221/PrimeHaven",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in web development, featuring modern
            technologies and best practices.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`relative group ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
                    >
                      <Github className="w-6 h-6 text-gray-800" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-600/90 rounded-full hover:bg-blue-600 transition-colors duration-200 shadow-lg"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      Featured Project
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200 font-semibold"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
