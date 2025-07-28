import { FontAwesomeIcon } from "./font-awesome";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function CarouselButton({ isMouseOver, setCurrentImage }) {
  return (
    isMouseOver && (
      <span className="relative bottom-20 right-0 md:bottom-60">
        <div className="flex justify-between items-center mx-3">
          <motion.button
            className="bg-[#1456ac] text-[#fff] rounded-full p-1"
            initial={{ opacity: 0, x: "5vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, type: "tween" }}
            onClick={() => {
              setCurrentImage((prevImage) => (prevImage + 1) % 3);
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          </motion.button>

          <motion.button
            className="bg-[#1456ac] text-[#fff] rounded-full p-1"
            initial={{ opacity: 0, x: "-5vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, type: "tween" }}
            onClick={() => {
              setCurrentImage((prevImage) => (prevImage + 1) % 3);
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </motion.button>
        </div>
      </span>
    )
  );
}

export default CarouselButton;
