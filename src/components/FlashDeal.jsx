import { useEffect, useState } from "react";

import CarouselButton from "./CarouselButton";
import CountdownTimer from "./CountdownTimer";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import LoadingSpinner from "./LoadingAnimation";
import useHover from "./useHover";
import useGetProducts from "./useGetProducts";

function FlashDeal() {
  const [isMouseOver, handleMouseOut, handleMouseOver] = useHover();
  const [productData, error, loading] = useGetProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  const flashSales = productData.filter((item) => item.discountPercentage > 15);
  const flashDeals = flashSales.splice(13, 5);
  const length = Array.isArray(flashDeals) ? flashDeals.length : 0;

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
              key={currentIndex}
              className="flex justify-center items-center w-full"
              initial={{ x: 40 }}
              animate={{ x: 0 }}
              exit={{ x: -40 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
                type: "tween",
              }}
            >
              {visibleCards.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded flex justify-center items-center w-full h-[130px] mx-2 px-4 md:h-[100%] xl:flex-col xl:items-center xl:p-0 xl:bg-transparent xl:w-[50%]"
                  onMouseOver={() => {
                    setHoveredIndex(index);
                  }}
                  onMouseOut={() => {
                    setHoveredIndex(null);
                  }}
                >
                  <motion.span
                    className="w-[6rem] px-2 py-4 xl:bg-white xl:w-[100%] xl:rounded-xl xl:py-2"
                    initial={{ scale: 1 }}
                    animate={
                      index === hoveredIndex ? { scale: 1.2 } : { scale: 1 }
                    }
                    exit={{ scale: 1 }}
                    transition={{
                      duration: 0.3,
                      type: "tween",
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      className="border border-[#cdcdcd2b] xl:border-none"
                      src={item?.thumbnail}
                      alt="product"
                    />
                  </motion.span>
                  <span className="w-1/2 p-4 font-medium text-[0.8rem] xl:w-[100%]">
                    <p>{item?.title}</p>
                    <p className="font-bold mt-2">{item?.price}</p>
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
              <div className="absolute w-full top-[30rem] md:hidden xl:top-[50rem] xl:w-[60%] xl:block">
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
