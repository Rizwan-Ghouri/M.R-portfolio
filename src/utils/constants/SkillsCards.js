import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
import {SiAxios, SiTailwindcss, SiFirebase } from "react-icons/si";

const skillsCards = [
  {
    id: 1,
    title: "HTML",
    level: "Advanced",
    description: "Building semantic, accessible, and SEO-friendly web structures.",
    icon: FaHtml5,
  },
  {
    id: 2,
    title: "CSS",
    level: "Advanced",
    description: "Creating modern layouts, animations, and responsive designs.",
    icon: FaCss3Alt,
  },
  {
    id: 3,
    title: "JavaScript",
    level: "Intermediate",
    description: "Implementing dynamic functionality and DOM manipulation.",
    icon: FaJs,
  },
  {
    id: 4,
    title: "React.js",
    level: "Intermediate",
    description: "Developing component-based single-page applications using hooks.",
    icon: FaReact,
  },
  {
    id: 5,
    title: "Tailwind CSS",
    level: "Intermediate",
    description: "Rapid UI development using utility-first CSS framework.",
    icon: SiTailwindcss,
  },
  {
    id: 6,
    title: "Bootstrap",
    level: "Advanced",
    description: "Building responsive layouts with pre-built components.",
    icon: FaBootstrap,
  },
  {
    id: 7,
    title: "Firebase",
    level: "Intermediate",
    description: "Authentication, Firestore database, and hosting integration.",
    icon: SiFirebase,
  },
  {
    id: 8,
    title: "Git & GitHub",
    level: "Intermediate",
    description: "Version control, collaboration, and code management.",
    icon: FaGitAlt,
  },
 {
  id: 10,
  title: "REST APIs",
  level: "Beginner",
  description: "Consuming and integrating RESTful APIs using Axios.",
  icon: SiAxios,
}
];

export default skillsCards;
