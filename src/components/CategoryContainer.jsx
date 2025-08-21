import useHover from "./useHover";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "./font-awesome";
import CarouselButton from "./CarouselButton";

function CategoryContainer({ title, filterFunc }) {
  const [isMouseOver, handleMouseOut, handleMouseOver] = useHover();
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedIndexes = [2, 3, 12, 10, 5, 6];
  const items = filterFunc;
  const selectedItems = selectedIndexes.map((index) => items[index]);
  const length = selectedItems.length;

  const visibleItems = [];
  for (let i = 0; i < length; i++) {
    const cardIndex = (currentIndex + i) % length;
    visibleItems.push(selectedItems[cardIndex]);
  }

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="xl:mx-20">
      <div className="bg-[#fff] shadow-sm rounded-xl">
        <span className="text-[#1456ac] font-medium flex justify-between items-center px-6 pt-6 xl:px-12">
          <h2 className="text-black text-[1.5rem]">{title}</h2>
          <p>View All</p>
        </span>
        <div
          className="relative"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <ul className="text-center grid grid-cols-2 xl:grid-cols-6 gap-2 my-4 px-4 pb-8 xl:px-8 xl:pb-4">
            {visibleItems.map((item, index) => (
              <li
                key={item.id}
                className={`rounded-2xl border-2 border-[#5dcaf133] my-1 p-2 xl:shadow-none xl:border-0 ${
                  index > 3 ? "hidden xl:inline-block" : "inline-block"
                }`}
                onMouseOver={() => setHoveredIndex(index)}
                onMouseOut={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="rounded-xl relative"
                  initial={{ backgroundColor: "#fff" }}
                  animate={
                    hoveredIndex === index
                      ? { backgroundColor: "#4a81ca5d" }
                      : { backgroundColor: "#fff" }
                  }
                  transition={{
                    duration: 0.3,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="bg-white text-[#3976c5] rounded-full text-[1rem] w-fit p-2 absolute top-20 left-15  xl:left-17 z-20 invisible xl:visible hidden"
                    initial={{ display: "none" }}
                    animate={
                      hoveredIndex === index
                        ? { display: "block" }
                        : { display: "none" }
                    }
                    transition={{
                      duration: 0.25,
                      type: "tween",
                      ease: "easeInOut",
                    }}
                  >
                    <FontAwesomeIcon icon="fa-regular fa-eye" />
                  </motion.div>

                  <motion.img
                    className="py-[1rem]"
                    initial={{ scale: 1 }}
                    animate={
                      hoveredIndex === index ? { scale: 1.24 } : { scale: 1 }
                    }
                    transition={{
                      duration: 0.25,
                      type: "tween",
                      ease: "easeInOut",
                    }}
                    src={item.thumbnail}
                    alt={`${item.title}_image`}
                  />
                </motion.div>

                <span className="text-black font-semibold text-[0.8rem] block pb-8 pt-4">
                  <motion.h2 whileHover={{ color: "#1456ac" }}>
                    {item.title}
                  </motion.h2>
                  <p>${item.price}</p>
                </span>
              </li>
            ))}
          </ul>
          <AnimatePresence>
            {isMouseOver && (
              <div className="absolute w-full px- z-40 hidden xl:top-[8rem] xl:w-[100%] xl:block">
                <CarouselButton
                  setCurrentIndex={setCurrentIndex}
                  length={length}
                />
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default CategoryContainer;
