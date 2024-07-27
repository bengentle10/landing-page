import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  knust,
  tme,
  mathworks,
  ckodon,
  soil,
  gemini,
  tripguide,
  threejs,
  headstarter,
  matlab,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Electronics Engineer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "MATLAB Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Matlab",
    icon: matlab,
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
    name: "Node JS",
    icon: nodejs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MATLAB Freelancer",
    company_name: "Independent Consultant",
    icon: mathworks,
    iconBg: "#383E56",
    date: "Nov 2021 - Present",
    points: [
      "Designing and developing control system and power system simulation models using Simulink.",
      "Researching and developing algorithms for various applications.",
      "Collaborating with clients to understand their needs and provide tailored solutions.",
      "Projects include an Automatic Car Parking Management System, a Tumor Growth Validation Model, and others.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "CkodonTech",
    icon: ckodon,
    iconBg: "#E6DEDD",
    date: "June 2022 - Jan 2023",
    points: [
      "Creating and maintaining user-friendly college navigation website with Next.js.",
      "Working with UI/UX designers, developers and project managers to make website scalable.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Remotely participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "KNUST Education Engineering Project (KEEP) Research Lab",
    icon: knust,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Developing a responive and user-friendly circuit simulation software with Vue.",
      "Implementing a hand drawn circuit recognition feature into website.",
      "Providing weekly report and feedback concering progress.",
      "Collaborating with other Engineers to make website robust and functional.",
    ],
  },
  {
    title: "Robotics Instructor",
    company_name: "Transfer Multisort Elektronik (TME) Education",
    icon: tme,
    iconBg: "#383E56",
    date: "Jan 2024- Present",
    points: [
      "Coaching and training junior and high school students in Arduino programming and Robotics.",
      "Creating tailored curriculum for independent learning and easy teaching.",
    ],
  },
  {
    title: "Software Engineer Fellow",
    company_name: "headstarter",
    icon: headstarter,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Building 5 AI projects in 5 weeks through mentorship sessions by CEOs and Founders.",
      "Working on a final project aiming for 100 sign-ups, 1000 accounts, or $1000 revenue.",
      "Taking part in weekly virtual interview sessions.",
      "Will be presenting project to an Engineer.",
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
    name: "Soil Resistance Monitoring System",
    description:
      "An experimental 'mini' project built to explore and harness the power of sensor-based IOT systems. The two main parameters that determine soil resistivity, soil moisture content and soil temperature, were used to estimate the soil resistance, a crucial factor for electrical safety (home grounding) and even agriculture (improved irrigation efficiency - up to 50% water savings - and crop yield increases of 10-30%)",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Proteus",
        color: "green-text-gradient",
      },
      {
        name: "Fusion 360",
        color: "pink-text-gradient",
      },
    ],
    image: soil,
    source_code_link: "https://github.com/bengentle10/remote-soil-resistance-monitoring.git",
  },
  {
    name: "Gemini Clone",
    description:
      "A clone of the Google Gemini platform, this project explores the integration of AI APIs into a web application, dynamically rendering text on the screen with typing effects and animations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini API",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: gemini,
    source_code_link: "https://github.com/bengentle10/Gemini-Clone.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
