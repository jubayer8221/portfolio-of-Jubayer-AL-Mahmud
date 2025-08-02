import { useEffect } from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Thesis } from "./components/Thesis";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Jubayer Al Mahmud - Full Stack Web Developer";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Jubayer Al Mahmud - Full Stack Web Developer specializing in React, Next.js, Node.js, and Machine Learning. Building scalable, user-friendly, and intelligent web solutions."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Full Stack Web Developer specializing in React, Next.js, Node.js, and Machine Learning. Building scalable, user-friendly, and intelligent web solutions.";
      document.head.appendChild(meta);
    }

    // Add smooth scrolling to html element
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Thesis />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
