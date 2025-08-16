import { useState } from "react";

import CarouselButton from "./CarouselButton";
import CountdownTimer from "./CountdownTimer";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import LoadingSpinner from "./LoadingAnimation";
import useHover from "./useHover";

function FlashDeal({ productData }) {
  const [isMouseOver, handleMouseOut, handleMouseOver] = useHover();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const flashSales = productData.filter((item) => item.discountPercentage > 15);
  const flashDeals = flashSales.splice(13, 5);
  const length = flashDeals.length;

  const visibleCards = [];
  for (let i = 0; i < length; i++) {
    const cardIndex = (currentIndex + i) % length;
    visibleCards.push(flashDeals[cardIndex]);
  }

  return (
    <div className="xl:px-20 ">
      <div className="bg-[#eff7ff] pt-4 flex flex-col justify-between items-center xl:flex-row xl:pt-0">
        <div className="text-[#1456ac] w-full py-2 px-4 flex justify-between items-center xl:py-10 xl:block xl:w-[40%] xl:mr-10">
          <span className="w-[45%] xl:w-full">
            <h2 className="text-2xl font-bold">LIMITED TIME DEALS</h2>
            <p className="font-light my-2 tracking-wider [word-spacing:1.5px]">
              While stock lasts! Grab Yours Now!
            </p>
          </span>
          <div className="bg-[#1456ac] px-3 py-5 w-[55%] xl:w-full xl:py-8 xl:px-5 rounded">
            <CountdownTimer />
          </div>
        </div>

        <section
          className="bg-[#eff7ff] overflow-hidden w-full py-2 mt-2 xl:mt-0"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <p className="text-[#1456ac] text-right cursor-pointer hidden xl:block mx-6 my-4 font-semibold">
            View All
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              className="flex justify-center items-center w-full"
              initial={{ x: 40 }}
              animate={{ x: 0 }}
              exit={{ x: -40 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                type: "tween",
              }}
            >
              {visibleCards.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl flex justify-center items-center w-full mx-2 px-4 md:h-[100%] xl:flex-col xl:items-center xl:bg-transparent xl:mx-0 xl:w-[50%]"
                  onMouseOver={() => {
                    setHoveredIndex(index);
                  }}
                  onMouseOut={() => {
                    setHoveredIndex(null);
                  }}
                >
                  <span className="w-[6rem] px-2 xl:bg-white xl:w-[100%] xl:rounded-xl xl:py-2">
                    <motion.img
                      className="border border-[#cdcdcd2b] xl:border-none"
                      initial={{ scale: 1 }}
                      animate={
                        index === hoveredIndex ? { scale: 1.3 } : { scale: 1 }
                      }
                      exit={{ scale: 1 }}
                      transition={{
                        duration: 0.3,
                        type: "tween",
                        ease: "easeInOut",
                      }}
                      src={product?.thumbnail}
                      alt="product"
                    />
                  </span>
                  {/* {index === hoveredIndex && (
                    <div className="hidden xl:inline-block xl:bg-[#0067ce30] w-[8.9rem] h-[8.8rem] absolute top-169.5 rounded-xl"></div>
                  )} */}
                  <span className=" flex flex-col justify-center w-1/2 h-[9rem] px-4 font-medium text-[0.8rem] xl:w-[100%] xl:h-[5rem] xl:mt-3">
                    <p>{product?.title}</p>
                    <p className="font-bold mt-2">
                      ${product?.price.toLocaleString()}
                    </p>
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          <p className="text-[#1456ac] text-center cursor-pointer xl:hidden mt-5 mb-3 font-medium">
            View All
          </p>
          <AnimatePresence className="relative">
            {isMouseOver && (
              <div className="absolute w-full top-[33rem] md:hidden xl:top-[50rem] xl:w-[60%] xl:block">
                <CarouselButton
                  length={length}
                  setCurrentIndex={setCurrentIndex}
                />
              </div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}

export default FlashDeal;
