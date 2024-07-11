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
    title: "Diploma in Computer Science and Technology",
    location: "Katwa, West Bengal, India",
    description:
      "I completed my diploma on Computer Science & Technology from Bengal Institute Of Technology. I also learned C, C++, Java, Python, HTML, CSS, JavaScript. ",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  },
  {
    title: "ASP.NET MVC Professional Training",
    location: "Kolkata, West Bengal, India",
    description:
      "I learned ASP.NET MVC from Ejob India. I also learned C#, SQL Server, Entity Framework, Stored Procedure, LINQ, Bootstrap, jQuery etc. ",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "B.Tech in Information Technology",
    location: "Dhulagarh, West Bengal, India",
    description:
      "Currently I'm persuing B.Tech in Information Technology from Seacom Engineering College. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "create-ndcf-app (In-progress)",
    description:
      "NEXT.js boilerplate application with TypeScript/JavaScript, TailwindCSS, Docker Configuration, Cloud Foundry Configuration, Shadcn/ui, and more.",
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
  "Github",
  "Github Actions",
  "TailwindCSS",
  "Prisma",
  "Redux",
  "MySQL",
  "Framer Motion",
  "UI5",
  "Docker",
  "Cloud Foundry",
  "Agile",
] as const;
