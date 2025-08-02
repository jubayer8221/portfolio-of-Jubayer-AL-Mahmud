export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string[];
  current?: boolean;
}

export interface education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
}

export interface Skill {
  name: string;
  category: "language" | "framework" | "styling" | "tool";
  proficiency: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
