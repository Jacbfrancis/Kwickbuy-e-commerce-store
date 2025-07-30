import { FontAwesomeIcon } from "./font-awesome";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

function CarouselButton({ isMouseOver, setCurrentImage, imageLength }) {
  return (
    <AnimatePresence>
      {isMouseOver && (
        <span className="relative bottom-20 right-0 md:bottom-60">
          <div className="flex justify-between items-center mx-3">
            <motion.button
              className="bg-[#1456ac] text-[#fff] rounded-full p-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3, type: "tween" }}
              onClick={() => {
                setCurrentImage((prevImage) => (prevImage + 1) % imageLength);
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
            </motion.button>

            <motion.button
              className="bg-[#1456ac] text-[#fff] rounded-full p-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, type: "tween" }}
              onClick={() => {
                setCurrentImage((prevImage) => (prevImage + 1) % imageLength);
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
            </motion.button>
          </div>
        </span>
      )}
    </AnimatePresence>
  );
}

export default CarouselButton;
