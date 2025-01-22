import Team from "../Team";
import { useRef } from "react";
import { motion } from "motion/react";

export default function Teams() {
  //* On scroll animation
  const scrollRef = useRef(null);

  return (
    <section
      id="Teams"
      className="flex flex-col items-center w-full h-screen bg-gray-100 dark:bg-gray-950"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
        className="flex-col items-center"
      >
        <h1 className="text-4xl font-russo mt-20 md:mt-36 dark:text-white">
          OUR TEAMS
        </h1>
        <div
          className="flex flex-col items-center md:flex-row md:justify-center md:items-start mt-10  w-full 
        min-h-screen h-fit md:h-screen"
        >
          <Team title="LEAGUE OF LEGENDS" img="lol.jpg" link="#Lol" />
          <Team title="VALORANT TEAM" img="valo.jpeg" link="#Valo" />
          <Team title="CS 2 TEAM" img="cs2.jpeg" link="#Cs2" />
        </div>
      </motion.div>
    </section>
  );
}
