import React from "react";
import { Download, Mail, ArrowRight, Github, Linkedin } from "lucide-react";
import { useTypingEffect } from "../hooks/useTypingEffect";

export const Hero: React.FC = () => {
  const typingText = useTypingEffect([
    "Full Stack Web Developer",
    "ML Enthusiast",
    "Open Source Contributor",
    "Problem Solver",
  ]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-4xl font-bold text-blue-600 dark:text-blue-400">
                <img
                  src="/image/jubayer.png"
                  width={128}
                  height={128}
                  loading="lazy"
                  alt="Profile Picture"
                  className="rounded-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent">
            Jubayer Al Mahmud
          </h1>

          <div className="text-2xl md:text-3xl mb-8 text-gray-700 dark:text-gray-300 h-12 flex items-center justify-center">
            <span className="mr-2">I'm a</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold min-w-[300px] text-left">
              {typingText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-xl mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I build scalable, user-friendly, and intelligent web solutions using
            modern technologies and cutting-edge techniques to create
            exceptional digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="/image/Resume_of_Jubayer_Al_Mahmud.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              View Resume
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/jubayer8221"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github className="w-6 h-6" />
            </a>
            {/* Scroll Indicator */}
            <div className=" bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/jubayer-al-mahmud-372883225/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
