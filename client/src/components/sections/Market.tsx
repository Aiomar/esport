import Product from "../Product";
import { useRef } from "react";
import { motion } from "motion/react";
interface marketProps {
  updateShow: () => void;
}

export default function Market({ updateShow }: marketProps) {
  //* On scroll animation
  const scrollRef = useRef(null);

  return (
    <section
      id="Market"
      className="flex flex-col items-center w-full min-h-screen h-auto pb-32 bg-gray-100 dark:bg-gray-950"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
      >
        <h1 className="text-4xl font-russo mt-32 md:mt-36 text-center dark:text-white">
          MARKET PLACE
        </h1>
        <div className="flex flex-col md:flex-row mt-10 h-fit">
          <div className="md:grid md:grid-cols-3 h-fit">
            <Product
              title={"PRODUCT ESPORT"}
              image={"/tshirt.png"}
              price={"90 TND"}
              updateShow={updateShow}
            />
            <Product
              title={"PRODUCT ESPORT"}
              image={"/tshirt.png"}
              price={"90 TND"}
              updateShow={updateShow}
            />{" "}
            <Product
              title={"PRODUCT ESPORT"}
              image={"/tshirt.png"}
              price={"90 TND"}
              updateShow={updateShow}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
