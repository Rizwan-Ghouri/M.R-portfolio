const gitHub = "https://github.com/Rizwan-Ghouri";
import ageCalculator from "/assets/videos/AgeCalculator.mp4";
import blogNest from "/assets/images/BlogNest.png";
import CarRental from "/assets/images/CarRental.png";
import gridenteColor from "/assets/images/GGC.png";

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
