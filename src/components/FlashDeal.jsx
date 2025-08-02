import CarouselButton from "./CarouselButton";
import CountdownTimer from "./CountdownTimer";
import { FontAwesomeIcon } from "./font-awesome";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import useHover from "./useHover";

function FlashDeal() {
  const [isMouseOver, handleMouseOut, handleMouseOver] = useHover();

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
          <div className="flex justify-center items-center w-full">
            <div className="bg-white rounded flex justify-center items-start w-[100%] mx-2 px-4 xl:flex-col xl:items-center xl:p-0 xl:bg-transparent xl:w-[50%]">
              <span className="w-[6rem] px-2 py-4 xl:bg-white xl:w-[100%] xl:rounded-xl xl:py-2">
                <img
                  className="border border-[#cdcdcd2b] xl:border-none"
                  src="https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/2.webp"
                  alt="product"
                />
              </span>
              <span className="w-1/2 p-4 font-medium text-[0.8rem] xl:w-[100%]">
                <p>Executive Conference Chair</p>
                <p className="font-bold mt-2">$15.00</p>
              </span>
            </div>

            <div className="bg-white rounded flex justify-center items-start w-[100%] mx-2 px-4 xl:flex-col xl:items-center xl:p-0 xl:bg-transparent xl:w-[50%]">
              <span className="w-[6rem] px-2 py-4 xl:bg-white xl:w-[100%] xl:rounded-xl xl:py-2">
                <img
                  className="border border-[#cdcdcd2b] xl:border-none"
                  src="https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/2.webp"
                  alt="product"
                />
              </span>
              <span className="w-1/2 p-4 font-medium text-[0.8rem] xl:w-[100%]">
                <p>Executive Conference Chair</p>
                <p className="font-bold mt-2">$15.00</p>
              </span>
            </div>

            <div className="bg-white rounded flex justify-center items-start w-[100%] mx-2 px-4 xl:flex-col xl:items-center xl:p-0 xl:bg-transparent xl:w-[50%]">
              <span className="w-[6rem] px-2 py-4 xl:bg-white xl:w-[100%] xl:rounded-xl xl:py-2">
                <img
                  className="border border-[#cdcdcd2b] xl:border-none"
                  src="https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/2.webp"
                  alt="product"
                />
              </span>
              <span className="w-1/2 p-4 font-medium text-[0.8rem] xl:w-[100%]">
                <p>Executive Conference Chair</p>
                <p className="font-bold mt-2">$15.00</p>
              </span>
            </div>

            <div className="bg-white rounded flex justify-center items-start w-[100%] mx-2 px-4 xl:flex-col xl:items-center xl:p-0 xl:bg-transparent xl:w-[50%]">
              <span className="w-[6rem] px-2 py-4 xl:bg-white xl:w-[100%] xl:rounded-xl xl:py-2">
                <img
                  className="border border-[#cdcdcd2b] xl:border-none"
                  src="https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/2.webp"
                  alt="product"
                />
              </span>
              <span className="w-1/2 p-4 font-medium text-[0.8rem] xl:w-[100%]">
                <p>Executive Conference Chair</p>
                <p className="font-bold mt-2">$15.00</p>
              </span>
            </div>
          </div>
          <p className="text-[#1456ac] text-center cursor-pointer xl:hidden mt-5 mb-3 font-medium">
            View All
          </p>
          <AnimatePresence className="relative">
            {isMouseOver && (
              <div className="absolute w-full top-[30rem] md:hidden xl:top-[50rem] xl:w-[60%] xl:block">
                <CarouselButton />
              </div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}

export default FlashDeal;
