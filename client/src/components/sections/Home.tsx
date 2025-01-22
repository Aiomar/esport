import { useRef } from "react";
import { motion } from "motion/react";

export default function Home() {
  //* On scroll animation
  const scrollRef = useRef(null);

  return (
    <section id="Home" className="w-full h-screen bg-gray-100 dark:bg-gray-950">
      <div ref={scrollRef} style={{ overflow: "auto"}}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef }}
          className="w-full h-screen"
        >
        
        </motion.div>
      </div>
    </section>
  );
}
