import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  c,
  cpp,
  java,
  mysql,
  expressjs,
  nextjs,
  x,
  todo,
  tictactoe,
  sps,
  spotify,
  IoT,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Frontend UI Developer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Embedded Systems Enthusiast",
    icon: creator,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "C", icon: c },
  { name: "C++", icon: cpp },
  { name: "Java", icon: java },
  { name: "MySQL", icon: mysql },
  { name: "MongoDB", icon: mongodb },
  { name: "ExpressJS", icon: expressjs },
  { name: "ReactJS", icon: reactjs },
  { name: "NodeJS", icon: nodejs },
  { name: "NextJS", icon: nextjs },
  { name: "Tailwind CSS", icon: tailwind },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "1st Place - Techathon 2025, Won a 24-hour hackathon (team event) by building a full-stack web application.",
    name: "Alliance University",
    designation: "Bengaluru",
    company: "India",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Alliance_University_Icon.svg/1200px-Alliance_University_Icon.svg.png",
  },
  {
    testimonial:
      "2nd Place - Scam Poetry Competition, Techno Fusion 2K24: Created two AI-assisted poems on spot from given topics.",
    name: "Jain University",
    designation: "Bengaluru",
    company: "India",
    image: "https://i.pinimg.com/736x/a3/40/b7/a340b7e04e7c4b7c3040e2067779cdff.jpg",
  },
  {
    testimonial:
      "Presented paper on 'Prediction of Blood Alcohol Concentration: Drink and Drive Detection' at the 5th ICPCSN-2025.",
    name: "R P Sarathy",
    designation: "Tamil Nadu",
    company: "India",
    image: "https://dial4college.blr1.cdn.digitaloceanspaces.com/pro/2127/logo/1704964592.jpeg",
  },
];

const projects = [
  {
    name: "LockBuddy - Password Manager",
    description:
      "A simple password manager that allows users to securely save, view, and copy passwords with persistent local storage, password visibility toggle.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "yellow-text-gradient",
      },
    ],
    images: [todo],
    source_code_link: "https://github.com/Roshan-Chourasia/Tick-Task-React",
  },
  {
    name: "TickTask - Todo Application",
    description:
      "Developed a sleek and responsive todo list application with full CRUD operations and local storage support. Designed for mobile and desktop users with a minimalist UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    images: [todo],
    source_code_link: "https://github.com/Roshan-Chourasia/Tick-Task-React",
  },
  {
    name: "UI Clone Collection (Spotify & X)",
    description:
      "Created visually accurate static UI clones of Spotify and X (Twitter), a responsive layouts, modern interface structure, and clean, user-friendly page components.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    images: [spotify, x],
    source_code_link: "https://github.com/Roshan-Chourasia/Spotify_clone",
  },
  {
    name: "Mini Web Game Collection",
    description:
      "Developed two interactive browser games — Tic Tac Toe (2-player) and Rock Paper Scissors (vs computer) — with responsive design and smooth user interactions.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    images: [tictactoe, sps],
    source_code_link: "https://github.com/Roshan-Chourasia/Web-Dev-Projects",
  },
  {
    name: "Alcohol Detection in Motor Vehicles",
    description:
      "IoT-based system using MQ-3 alcohol sensor, Arduino, GSM, and GPS modules detects alcohol levels, stops the vehicle engine, and instantly sends SMS alerts with location.",
    tags: [
      {
        name: "IoT",
        color: "blue-text-gradient",
      },
      {
        name: "Embedded Systems",
        color: "green-text-gradient",
      },
      {
        name: "C/C++",
        color: "pink-text-gradient",
      },
    ],
    images: [IoT],
    source_code_link: "https://github.com/Roshan-Chourasia/Alcohol_Detection_in_Motor_Vehicle",
  },
];

export { services, technologies, experiences, testimonials, projects };
