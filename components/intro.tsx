"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
	return (
		<section className=" mb-28 max-w-[50rem] text-center sm:mb-0">
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

			<motion.p
				className="mb-10 mt-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}>
				<span className="font-bold">Hi, I&apos;m Suman.</span> I&apos;m a{" "}
				<span className="font-bold">full-stack developer</span>. I enjoy
				building <span className="italic">Websites & apps</span>. My focus is{" "}
				<span className="underline">React (Next.js)</span>.
			</motion.p>

			<motion.div
				className="flex flex-col items-center justify-center gap-3 font-medium px-4 text-lg sm:flex-row"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}>
				<Link
					href="#contact"
					className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full">
					Contact me here <BsArrowRight />
				</Link>

				<a
					className="bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full"
					href="">
					Download CV <HiDownload />{" "}
				</a>

				<a
					className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full"
					rel="noopener noreferrer"
					target="_blank"
					href="https://www.linkedin.com/in/suman-mondal-a364b2196/">
					<BsLinkedin />
				</a>
				<a
					className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full"
					rel="noopener noreferrer"
					target="_blank"
					href="https://github.com/suman-rocky/">
					<BsGithub />
				</a>
			</motion.div>
		</section>
	);
}
