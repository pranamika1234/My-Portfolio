import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  mysql,
  linux,
  git,
  samaritans,
  oist,
  nextinnovation,
  cognizant,
  internshala,
  linkedin,
  hackerrank,
  karate,
  portfolioImg,
  eventImg,
  ecommerceImg,
  pglife,
  sortingvisualiser,
  aws,
  nodejs,
  mongodb,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Qualifications",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Extracurricular",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Developer",
    icon: fullstack,
  },
];

const education = [
  {
    title: "Bachelors in Science (Phy Hons.)",
    company_name: "The Assam Royal Global University, Gauhati",
    icon: "/desktop_pc/textures/royalglobaluniversity_logo.jfif",
    iconBg: "#fff",
    date: "2024-2028 (currently pursuing)",
    points: [
      "Core subjects: Mechnaics, Physics Lab-I, Electricity and Magnetism, Physics Lab-II, Ray & Wave Optics, Mathematical Physics-I, Thermal & Statistical Physics, Nuclear & Particle Physics, Physics Lab-III, Classical & Quantum Physics, Atomic & Molecular Physics, Electrodynamics, Electronics, Waves Oscillation & Sound, Solid State & Mathematical Physics-III, Theory of Relativity, Astronomy, Mathematical Physics-III.",
    ],
  },
  {
    title: "Higher Secondary",
    company_name: "Spring Dale International School (2020-2022)",
    icon: "/desktop_pc/textures/Highersecondaryschool.png",
    iconBg: "#fff",
    date: "(2020-2022)",
    points: [
      "Courses undertaken: Physics, Chemistry, Mathematics and Biology.",
    ],
  },
  {
    title: "Senior Secondary",
    company_name: "Modern English School- CBSE ( 2018-19).",
    icon: samaritans,
    iconBg: "#fff",
    date: "2018-19",
    points: [
      "Courses undertaken: Science, Social Studies, Languages and Mathematics.",
      "CGPA: 10/10",
    ],
  },
];

const technologies = [
  {
    name: "Express.js",
    icon: "/assets/expresslogo.png",
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "node.js",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "PostgreSQL",
    icon: "/assets/postgresql.png",
  },
  {
    name: "FastAPI",
    icon: "/assets/fastapi.svg",
  },
  {
    name: "RESTful API",
    icon: "/assets/restfulapi.png",
  },
  {
    name: "Vercel",
    icon: "/assets/vercel.svg",
  },
  {
    name: "AI",
    icon: "/assets/ai.avif",
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "TechNova Labs(Internship)",
    icon: cognizant,
    iconBg: "#fff",
    date: "May 2024 - June 2024",
    points: [
      "Built and deployed scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Developed a Fitness Tracker Web App with FastAPI, PostgreSQL, and PyTorch integration for AI-based workout analytics."
    ],
  },
  {
    title: "Intern",
    company_name: "WebVibe Studios",
    icon: cognizant,
    iconBg: "#fff",
    date: "Dec 2024 - Jan 2025",
    points: [
      "Creative digital agency building responsive frontends.",
      "Deployed production-ready apps via Render and Vercel with continuous integration workflows.",
    ],
  },
  {
    title: "Freelancer(Offline through network)",
    company_name: "Small Start Up",
    icon: cognizant,
    iconBg: "#fff",
    date: "March 2025 - April 2025",
    points: [
      "Developed a web application using HTML, CSS, Javascript, PHP, and Bootstrap for the client.",
      "Designed user-friendly UI/UX with responsive designs to make it easy for users to navigate through the website. ",
      "Designed various different websites with responsive designs and dynamic content. ",
    ],
  },
  {
    title: "Research Intern",
    company_name: "Under my guide Prof. Dr. Sanchita Ray",
    icon: cognizant,
    iconBg: "#1294C8",
    date: "Currently going on",
    points: [
      "The Project is about a PINN Model for physics calculations and simulations.",
      "A model designed to study the Light Scattering of particles.",
      "AI model predicts the Light Scattering patterns and nature of the particles based on input parameters.",
    ],
  },
];

const extracurricular = [
  {
    title: "Hackathon Winner",
    type: "Achievements",
    icon: "/desktop_pc/textures/IITG_logo.png",
    iconBg: "#007BB5",
    date: "28 Aug 2025",
    points: ["Achieved Winner Certificate in Generative AI Hackathon, organized by TechGyan in IIT G"],
  },
  {
    title: "Hackathon Winner",
    type: "Certification",
    icon: "/desktop_pc/textures/IITG_logo.png",
    iconBg: "#050C18",
    date: "30 Aug 2025",
    points: [
      "Achieved Winner Certificate for Agentic AI Hackathon, organized by TechGyan at IIT G",
    ],
  },
  {
    title: "Web Development-Internshala",
    type: "Certification",
    icon: "/desktop_pc/textures/IITG_logo.png",
    iconBg: "#1294C8",
    date: "29 Aug 2025",
    points: ["Achieved Certificate of Excellence for Artificial Intelligence and Machine Learning Hackathon organized by TechGyan at IIT G"],
  },
  {
    title: "Singing",
    type: "Extracurricular(Hobby)",
    icon: "/desktop_pc/textures/musiclogo.jfif",
    iconBg: "#CCCFD8",
    date: "2013-2018",
    points: [
      "Learnt Hindustani Classical Music (Visharad)",
      "Experienced in stage performances.",
    ],
  },
];

const projects = [
  {
    name: "3D Portfolio",
    description:
      "Web Portfolio in React JS which uses 3D graphics and animations to bring the content to life. The website is divided into several main sections, including an about, Education, project, connect and contact section. Each section is designed to showcase 3D's unique style and creativity, with an emphasis on interactivity and user engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
    ],
      image: portfolioImg,
    
  },
  {
    name: "Handmade Products E-Commerce Website",
    description:
      "An e-commerce website dedicated to handmade products like home decor, accessories, and gifts. The Website offers a user-friendly interface where customers can browse through various categories, view detailed product descriptions.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: ecommerceImg,
    
  },
  {
    name: "Event Management Website",
    description:
      "The Event Management Website is a platform designed to streamline the organization and management of events. It allows users to create, manage, and promote events while providing a seamless experience for attendees.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: eventImg,
    
  },
];

export {
  services,
  technologies,
  experiences,
  extracurricular,
  projects,
  education,
};
