import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import webconnectImg from "@/public/webconnect.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
			"Shadcnui",
		],
		imageUrl: webconnectImg,
	},
	{
		title: "RealTech CRM",
		description:
			"Worked as a full-stack developer on this project. Users can manage their customer visits on the property and also manage their properties.",
		tags: ["C#", ".NET mvc", "Bootstrap", "SQL SERVER", "jQuery"],
		imageUrl: rmtdevImg,
	},
	{
		title: "LMS (Learning Management System)",
		description:
			"A web application where students can learn their courses and teachers can manage their students and courses.",
		tags: ["React", "Next.js", "SQL", "Tailwind", "Prisma"],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"Redux",
	"C#",
	"ASP.NET",
	"Express",
	"SQL",
	"Python",
	"SQL Server",
	"Framer Motion",
] as const;
