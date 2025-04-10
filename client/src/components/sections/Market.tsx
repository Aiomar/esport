import Product from "../Product";
import { useRef } from "react";
import { motion } from "motion/react";
import { IoCartOutline } from "react-icons/io5";


export default function Market() {
  // On scroll animation
  const scrollRef = useRef(null);

  return (
    <section
      id="Market"
      className="flex flex-col items-center w-full h-auto pb-32 bg-gray-100 dark:bg-gray-950"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
      >
        <h1 className="flex items-center text-4xl font-russo mt-32 md:mt-36  dark:text-white">
        <IoCartOutline/> MARKET PLACE
        </h1>
        <div className="flex flex-col md:flex-row mt-10 h-fit">
          <div className="md:grid md:grid-cols-3 min-h-screen h-fit">
            <Product
              title={"PRODUCT ESPORT"}
              image={"https://thebanyantee.com/cdn/shop/files/Black-T-shirt.jpg?v=1721380366"}
              price={"90 TND"}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
