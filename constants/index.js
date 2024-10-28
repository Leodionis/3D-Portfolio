import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Web Developer",
    icon: <BackendIcon />,
  }
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "PHP",
      icon: "/assets/tech/php.png",
      link: "https://www.php.net/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    }
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    }
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "Yarn",
      icon: "/assets/tech/yarn.svg",
      link: "https://yarnpkg.com/",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
};

const experiences = [
  {
    title: "React JS Developer",
    company_name: "CodSoft",
    icon: "/assets/company/TPC.png",
    iconBg: "#E6DEDD",
    date: "10 June 2024 - 10 July 2024",
    points: [
      "Proficient in React components and state management",
      "Experienced in responsive design and CSS styling",
      "Adept at using React Router for navigation",
      "Capable of developing features for adding, updating, deleting, and managing data",
      "Familiar with integrating social sharing functionality",
    ],
  },

  {
    title: "Web Developer",
    company_name: "Luar Sekolah",
    icon: "/assets/company/VMukti.png",
    iconBg: "#E6DEDD",
    date: "04 Febuary 2024 - 04 June 2024",
    points: [
      "Creating user authentication and multiple validations with native PHP",
      "Transforming static designs into responsive web interfaces",
      "Building interactive websites using JavaScript",
      "Actively participate in weekly learning and evaluation sessions, providing input on project progress, challenges, and potential  solutions",
    ],
  },
  
  {
    title: "IT Development",
    company_name: "Prasmul - Eli CC ",
    icon: "/assets/company/TATA-Motors.png",
    iconBg: "#E6DEDD",
    date: "17 July 2023 - 16 January 2024",
    points: [
      "Collecting, cleaning, and analyzing data from various sources",
      "Creating informative data visualizations and analysis reports",
      "Identifying new business opportunities through data analysis",
      "Combining aesthetics with functionality, creating designs that communicate messages effectively while ensuring a seamless user experience",
      "Identifying potential issues and ensuring that each feature functions as intended",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Belajar Bekerja Website",
    description:
      "Belajar Bekerja is a program designed to prepare individuals to be more professionally ready. Participants work on real-world cases from the industry, utilizing their understanding of digital transformation and Artificial Intelligence (AI) technologies, with direct guidance from experienced practitioners",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/ChatBot.png",
    source_code_link: "https://github.com/Leodionis/Project-Di-PT-Teknologi-Edukasi-Indonesia/tree/main",
    deployed_link: "#",
  },
  {
    name: "E-Commerce",
    description:
      "E-commerce Platform is a web-based e-commerce application designed to provide a pleasant and user-friendly online shopping experience",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "React JS",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/e-commerce.png",
    source_code_link: "https://github.com/Leodionis/e-commerce",
    deployed_link: "https://e-commerce-one-flame.vercel.app/",
  },
  {
    name: "Instagram Clone",
    description:
      "This project is a clone of the Instagram user interface (UI) built using modern front-end technologies",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "React JS",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/AI-Girlfriend.png",
    source_code_link:
      "https://github.com/Leodionis/Instagram-UI-Clone",
    deployed_link:
      "https://instagram-ui-clone-three.vercel.app/",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Leodionis",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/leodionis/",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/leodioniss/",
  },
];

const heroTexts = [
  "React Js developer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
