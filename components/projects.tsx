"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";

import { projectsData } from "@/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/hooks/use-active-section-context";

export default function Projects() {
	const { ref, inView } = useInView({
		threshold: 0.3,
	});
	const { setActiveSection, timeOfLastClicked } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClicked > 1000) {
			setActiveSection("Projects");
		}
	}, [inView, setActiveSection, timeOfLastClicked]);
	return (
		<section
			ref={ref}
			id="projects"
			className="scroll-mt-28">
			<SectionHeading>My Projects</SectionHeading>

			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project
							{...project}
							imageUrl={project.imageUrl.src}
						/>
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
