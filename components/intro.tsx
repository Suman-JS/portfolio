"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import useSectionInView from "@/hooks/use-section-inview";
import { useActiveSectionContext } from "@/hooks/use-active-section-context";
import "@/app/hover.css";

export default function Intro() {
	const { ref } = useSectionInView("Home", 0.5);
	const { setActiveSection, setTimeOfLastClicked } = useActiveSectionContext();
	return (
		<section
			ref={ref}
			className=" mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
			id="home">
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: "tween", duration: 0.2 }}>
						<Image
							src="/profile.jpg"
							alt="Suman potrait"
							width={192}
							height={192}
							quality={95}
							priority
							className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
						/>
					</motion.div>

					<motion.span
						className="text-4xl absolute bottom-0 right-0"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}>
						👋
					</motion.span>
				</div>
			</div>

			<motion.h1
				className="mb-10 mt-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}>
				<span className="font-bold">Hi, I&apos;m Suman.</span> I&apos;m a{" "}
				<span className="font-bold">full-stack developer</span>. I enjoy
				building <span className="italic">Websites & apps</span>. My focus is{" "}
				<a className="hoverAnimation font-semibold dark:text-white">
					React (Next.js)
				</a>
				.
			</motion.h1>

			<motion.div
				className="flex flex-col items-center justify-center gap-3 font-medium px-4 text-lg sm:flex-row"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}>
				<Link
					href="#contact"
					onClick={() => {
						setActiveSection("Contact");
						setTimeOfLastClicked(Date.now());
					}}
					className="bg-gray-900 group text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
					Contact me here{" "}
					<BsArrowRight className=" opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
				</Link>

				<a
					className="bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition group cursor-pointer borderBlack dark:bg-white/10 dark:text-white/90"
					href="/CV.pdf"
					download>
					Download CV{" "}
					<HiDownload className="opacity-60 group-hover:translate-y-1 transition-all" />{" "}
				</a>

				<a
					className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-110 transition group cursor-pointer borderBlack  hover:text-gray-950 dark:bg-white/10 dark:text-white/90"
					rel="noopener noreferrer"
					target="_blank"
					href="https://www.linkedin.com/in/suman-mondal-a364b2196/">
					<BsLinkedin />
				</a>
				<a
					className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-110 transition group cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/90"
					rel="noopener noreferrer"
					target="_blank"
					href="https://github.com/suman-rocky/">
					<BsGithub />
				</a>
			</motion.div>
		</section>
	);
}
