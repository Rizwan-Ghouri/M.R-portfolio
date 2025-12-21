const gitHub = "https://github.com/Rizwan-Ghouri";
import ageCalculator from "/assets/videos/AgeCalculator.mp4";
import tictactao from "/assets/videos/tictactao.mp4";
import ultraClone from "/assets/videos/UltraClone.mp4";
import texteditor from "/assets/videos/texteditor.mp4";
import blogNest from "/assets/images/BlogNest.png";
import CarRental from "/assets/images/CarRental.png";
import iCoder from "/assets/images/iCoder.png";
import gridenteColor from "/assets/images/GGC.png";
import calculator from "/assets/images/Calculator.png";

const ProjectsCards = [
  {
    id: 1,
    title: "Car Rental",
    description: "Car rental web app built with MERN stack and modern UI",
    video: false,
    image: CarRental,
    tech: ["React", "Tailwind","AOS Animation"],
    live: "https://car-rental-one-hazel.vercel.app/",
    github: gitHub,
  },
  {
    id: 2,
    title: "BlogNest Website",
    description: "Blog website with login, signup and post management system",
    video: false,
    image: blogNest,
    tech: ["HTML", "CSS", "JavaScript", "firebase Auth & database"],
    live: "https://blog-nest9.netlify.app/",
    github: gitHub,
  },
  {
    id: 3,
    title: "Age Calculator",
    description: "Age calculator app with clean and modern user interface",
    video: ageCalculator,
    image: false,
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://rizwan-ghouri.github.io/Age-Calculator/",
    github: gitHub,
  },
  {
    id: 4,
    title: "Text Editor App",
    description: "Online text editor with font styling and formatting tools",
    video: texteditor,
    image: false,
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://text-editor-flax-seven.vercel.app/",
    github: gitHub,
  },
  {
    id: 5,
    title: "Tic Tac Toe Game",
    description: "Classic tic tac toe game with interactive gameplay",
    video: tictactao,
    image: false,
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://rizwan-ghouri.github.io/Tic-Tac-Tao-Game-/",
    github: gitHub,
  },
  {
    id: 6,
    title: "iCoder Bootstrap Clone",
    description: "Responsive Bootstrap-based website clone",
    video: false,
    image: iCoder,
    tech: ["HTML", "CSS","Bootstrap"],
    live: "https://rizwan-ghouri.github.io/iCoderBootstrap/",
    github: gitHub,
  },
  {
    id: 7,
    title: "Ultra Clone",
    description: "Modern landing page clone",
    video: ultraClone,
    image: false,
    tech: ["React", "CSS"],
    live: "https://ultra-clone.vercel.app/",
    github: gitHub,
  },
  {
    id: 8,
    title: "Calculator",
    description: "Simple and functional calculator web application",
    video: false,
    image: calculator,
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://rizwan-ghouri.github.io/Calculator/",
    github: gitHub,
  },
  {
    id: 9,
    title: "Generated Gradient Color",
    description: "Gradient color generator with live color preview",
    video: false,
    image: gridenteColor,
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://rizwan-ghouri.github.io/Genrated-Gridiant-color/",
    github: gitHub,
  },
];

export default ProjectsCards;
