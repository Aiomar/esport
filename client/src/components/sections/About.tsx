import { useRef } from "react";
import { motion } from "motion/react";

export default function About() {
  //* On scroll animation
  const scrollRef = useRef(null);

  return (
    <section
      id="About"
      className="flex flex-col items-center w-full h-fit bg-gray-100 dark:bg-gray-950"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
        className="mt-36 flex-col items-center"
      >
        <h1 className="ml-24 text-gray-950 dark:text-white text-5xl  font-russo mt-2">
          PINK DRAGONS
        </h1>
        <p className="flex justify-between  dark:text-white w-6/12 ml-24 mt-5 text-2xl">
          is a competitive E-Sports team built on teamwork, strategy, and
          passion for the game. We aim to climb the ranks and leave a mark in
          the esports community. Whether it's smashing through the competition
          or pulling off epic comebacks, we're here to play hard and have fun.
          Our Goal To rise through the ranks and compete at the highest level.
          You can adjust details based on the personality and aspirations of
          your team!
        </p>
        <img src="logo.svg" alt="" className="mt-11 z-30 w-60 h-60 md:ml-20" />
      </motion.div>
    </section>
  );
}
