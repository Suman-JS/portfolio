"use client";
import useSectionInView from "@/hooks/use-section-inview";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-10 max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in
        <span className="font-medium ml-1">Information Technology</span>, I
        decided to pursue my passion for programming. I enrolled in a couse and
        learned
        <span className="font-medium ml-1">front-end web development</span>.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I
        <span className="hoverAnimation font-bold dark:text-white ml-1 mr-1">
          love
        </span>
        the feeling of finally figuring out a solution to a problem. My core
        stack includes
        <span className="font-medium ml-1">NEXT.js, React, TailwindCSS</span>. I
        am also familiar with TypeScript, Prisma, Docker, Git, UI5. I am always
        looking to learn new technologies. I am currently looking for a
        <span className="font-medium ml-1">full-time position</span> as a
        Front-end developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies. I also enjoy
        <span className="font-medium ml-1">learning new things</span>.
      </p>
    </motion.section>
  );
}
