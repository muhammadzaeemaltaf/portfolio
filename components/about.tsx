"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After completing Intermediate with in
        <span className="font-medium"> Pre-Engineering</span>, I pursued my passion for web development.
        at Memon Industrial & Technical Institute, where I developed and maintained responsive, user-friendly, and visually appealing websites. {" "}
        <span className="italic">My favorite part of web development</span> is creating intuitive user experiences and optimizing website performance.
        My core stack includes {" "}
        <span className="font-medium">Next.js, React.js, Typescript, and Tailwind CSS</span>.
        I also work with HTML, CSS, JavaScript, PHP, MySQL, WordPress, Bootstrap, AJAX, Framer Motion, and GSAP.
      </p>

      <p>
        <span className="italic">I'm passionate</span>, about exploring new technologies, especially in AI.
        I am currently working towards a certification in
        <span className="font-medium"> Cloud Applied Generative AI Engineering</span>.
        Currently, I am pursuing a <span className="font-medium"> Bachelor's degree in Computer Science </span> from Virtual University <span className="font-medium"> (VU)</span>.
        I also have a keen interest in open-source projects and enjoy contributing to the tech community.
      </p>

    </motion.section>
  );
}
