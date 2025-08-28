import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "./font-awesome";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import CarouselButton from "./CarouselButton";
import useHover from "./useHover";
import useImageSwiper from "./useImageSwiper";
import bannerImage1 from "../assets/images/banner1.webp";
import bannerImage2 from "../assets/images/banner2.jpg";
import bannerImage3 from "../assets/images/banner3.jpg";

const headerImages = [bannerImage1, bannerImage2, bannerImage3];

function Header({ showMenu, categories }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = headerImages.length;
  const [isMouseOver, handleMouseOut, handleMouseOver] = useHover();

  // custom hook for slider on swipe
  const [handler] = useImageSwiper(setCurrentIndex, length);

  // Auto slide header banner and stop when showMenu is true
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     !showMenu &&
  //       !isMouseOver &&
  //       setCurrentIndex((prevImage) => (prevImage + 1) % length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [currentIndex, showMenu, length, isMouseOver]);

  return (
    <div>
      <div className=" py-2.5 px-4 xl:px-20 xl:my-0 xl:flex justify-between items-start">
        <div className="bg-[#fff] hidden py-5 px-8 w-[20%] rounded xl:inline-block z-5">
          <ul className="flex text-[0.95rem] flex-col">
            {categories.map((category) => (
              <li
                key={category.title}
                className="hover:bg-[#eff7ff] py-[0.56rem]"
              >
                <img
                  className="w-6 inline-block mr-2"
                  src={category.icon}
                  alt={`${category.title}icon`}
                />
                {category.title}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="w-full xl:w-[79.5%] h-fit rounded select-none"
          {...handler}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <AnimatePresence mode="wait" scroll={false}>
            {headerImages.map(
              (_, index) =>
                index === currentIndex && (
                  <motion.img
                    initial={{ x: 350 }}
                    animate={index === currentIndex ? { x: 0 } : { x: 350 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{
                      duration: 0.38,
                      ease: "easeInOut",
                      type: "tween",
                    }}
                    key={index}
                    layoutId="header-image"
                    src={headerImages[index]}
                    alt={`banner-image-${index}`}
                  />
                )
            )}
          </AnimatePresence>
          {/* animation to show button only when hovered */}
          <AnimatePresence className="relative">
            {isMouseOver && (
              <div className="absolute w-[90%] top-[10rem] md:w-[97%] xl:w-[70%] md:top-[20rem]">
                <CarouselButton
                  setCurrentIndex={setCurrentIndex}
                  length={length}
                />
              </div>
            )}
          </AnimatePresence>
          <div className="relative bottom-[2rem] w-fit mx-auto md:bottom-[3rem]">
            {Array(length)
              .fill()
              .map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={`${
                    index === currentIndex ? "fa-solid" : " fa-regular"
                  } fa-circle`}
                  className={`${
                    index === currentIndex
                      ? "text-[#1456ac]"
                      : "text-[#1456ac5c]"
                  } text-[0.6rem] mr-1 xl:mr-2 xl:text-[0.8rem]`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
