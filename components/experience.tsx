"use client";

import React, { useEffect, useState } from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";
import useSectionInView from "@/hooks/use-section-inview";
import { experiencesData } from "@/lib/data";

export default function Experience() {
	const [isTimelineVisible, setIsTimelineVisible] = useState(false);

	useEffect(() => {
		const handleVisibility = () => {
			const section = document.getElementById("experience");
			if (section) {
				const rect = section.getBoundingClientRect();
				const threshold = 0.175 * rect.height;
				setIsTimelineVisible(rect.top < window.innerHeight - threshold);
			}
		};

		window.addEventListener("scroll", handleVisibility);
		handleVisibility();

		return () => {
			window.removeEventListener("scroll", handleVisibility);
		};
	}, []);
	const { ref } = useSectionInView("Experience", 0.5);
	return (
		<section
			id="experience"
			ref={ref}
			className="scroll-mt-28 mb-28">
			<SectionHeading>My Experience</SectionHeading>
			<VerticalTimeline
				lineColor=""
				animate={isTimelineVisible}>
				{experiencesData.map((item, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							visible={true}
							contentStyle={{
								background: "#f3f4f6",
								color: "black",
								boxShadow: "none",
								border: "1px solid rgba(0, 0, 0, 0.05)",
								textAlign: "left",
								padding: "1.3rem 2rem",
							}}
							contentArrowStyle={{
								borderRight: "0.4rem solid #9ca3af",
							}}
							date={item.date}
							dateClassName="text-gray-700 font-semibold dark:text-gray-300"
							intersectionObserverProps={{ threshold: 0.5 }}
							icon={item.icon}
							iconStyle={{
								background: "white",
								color: "black",
								fontSize: "1.5rem",
							}}>
							<h3 className=" font-semibold capitalize">{item.title}</h3>
							<p className=" font-normal !mt-8">{item.location}</p>
							<p className="!mt-1 font-normal text-gray-700">
								{item.description}
							</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
