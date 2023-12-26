"use client";

import React from "react";
import SectionHeading from "./section-heading";
import useSectionInView from "@/hooks/use-section-inview";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
	const { ref } = useSectionInView("Skills", 0.5);

	const fadeInAnimationVariants = {
		initial: { opacity: 0, y: 100 },
		animate: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.05 * index,
			},
		}),
	};

	return (
		<section
			ref={ref}
			id="skills"
			className="scroll-mt-28 mb-28 max-w-[53rem]">
			<SectionHeading>My Skills</SectionHeading>
			<ul className=" flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{skillsData.map((skill, index) => (
					<motion.li
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						custom={index}
						viewport={{
							once: true,
						}}
						key={index}
						className=" bg-white borderBlack rounded-xl px-5 py-3">
						<p className="text-lg font-semibold">{skill}</p>
					</motion.li>
				))}
			</ul>
		</section>
	);
}
