import createndcfapp from "@/public/create-ndcf-app.png";
import edusync from "@/public/edusync.png";
import webconnectImg from "@/public/webconnect.png";
import React from "react";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Qualification",
    hash: "#qualification",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const qualificationData = [
  {
    title: "B.Tech in Information Technology",
    location: "Dhulagarh, West Bengal, India",
    description:
      "I completed my B.Tech in Information Technology from Seacom Engineering College. Additionally, I have acquired skills in TypeScript, React, Next.js, and TailwindCSS.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "Diploma in Computer Science and Technology",
    location: "Katwa, West Bengal, India",
    description:
      "I completed my diploma in Computer Science & Technology from Bengal Institute of Technology. Additionally, I have learned C, C++, Java, Python, HTML, CSS, and JavaScript.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "create-ndcf-app (In-progress)",
    description:
      "An open-source CLI application for generating Next.js boilerplate applications, supporting TypeScript/JavaScript, TailwindCSS, Docker configuration, Cloud Foundry configuration, Shadcn/UI, and more.",
    tags: ["Node.js", "TypeScript"],
    imageUrl: createndcfapp,
  },
  {
    title: "WebConnect",
    description:
      "I worked as a full-stack developer on this project. Users can chat with each other as well as call them and able to make video calls.",
    tags: [
      "React",
      "Next.js",
      "MySQL",
      "Tailwind",
      "Prisma",
      "Socket.io",
      "Clerk",
      "shadcn/ui",
    ],
    imageUrl: webconnectImg,
  },
  {
    title: "EduSync",
    description:
      "A LMS web application where educators can sell their courses and students can enroll in the courses.",
    tags: [
      "React",
      "Next.js",
      "MySQL",
      "TailwindCSS",
      "Prisma",
      "Stripe",
      "Clerk",
      "shadcn/ui",
      "Recharts",
    ],
    imageUrl: edusync,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "NEXT.js",
  "Git",
  "Github Actions",
  "TailwindCSS",
  "Prisma",
  "Redux",
  "Framer Motion",
  "UI5",
  "Docker",
  "Cloud Foundry",
  "Agile",
] as const;
