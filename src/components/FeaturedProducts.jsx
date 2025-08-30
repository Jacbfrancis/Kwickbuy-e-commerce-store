import { useState } from "react";
import { Link } from "react-router-dom";
import useHover from "./useHover";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, easeIn } from "framer-motion";
import { FontAwesomeIcon } from "./font-awesome";
import CarouselButton from "./CarouselButton";

function FeaturedProducts({ featuredProducts }) {
  const [isMouseOver, handleMouseOut, handleMouseOver] = useHover();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const featuredDeals = featuredProducts.slice(6, 15);
  const length = featuredDeals.length;

  let visibleCards = [];

  for (let i = 0; i < length; i++) {
    const cardIndex = (currentIndex + i) % length;
    visibleCards.push(featuredDeals[cardIndex]);
  }

  return (
    <div className="xl:px-20 my-6">
      <div className="bg-[#fff] rounded-xl shadow-sm pb-8 xl:px-5">
        <h2 className="text-[#1456ac] text-center font-bold text-[1.3rem] pb-4 pt-8">
          Featured products
        </h2>
        <Link to="/featured-products">
          <p className="text-[#1456ac] hidden text-right pr-6 pb-5 font-semibold xl:block">
            View All
          </p>
        </Link>

        <div className="overflow-scroll [scrollbar-width:none]">
          <div
            className="flex justify-start items-center select-none"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {visibleCards.map((product, index) => (
              <div
                key={product.id}
                className="border-y-1 rounded-2xl border-[#6cc6e786] shadow-sm shadow-[#6cc6e7ae] snap-center mx-3 h-[22rem] xl:border-0 xl:shadow-none"
                onMouseOver={() => setHoveredIndex(index)}
                onMouseOut={() => setHoveredIndex(null)}
              >
                <motion.span
                  className="block border-b-1 rounded-2xl border-[#6cc6e786] xl:border-1 relative"
                  initial={{ backgroundColor: "#fff" }}
                  animate={
                    hoveredIndex === index
                      ? { backgroundColor: "#4a81ca5d" }
                      : { backgroundColor: "#fff" }
                  }
                  transition={{ type: "tween" }}
                >
                  <motion.div
                    className="bg-white text-[#3976c5] rounded-full text-[1rem] w-fit p-2 absolute top-30 left-25 xl:top-20 xl:left-20 z-20 invisible xl:visible"
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
                    className="w-full"
                    initial={{ scale: 1 }}
                    animate={
                      hoveredIndex === index ? { scale: 1.15 } : { scale: 1 }
                    }
                    transition={{ type: "tween" }}
                    src={product.thumbnail}
                    alt={`product ${index}`}
                  />
                </motion.span>
                <span className="text-center text-[1rem] font-semibold block mt-3 mb-6 mx-auto w-[15rem] whitespace-normal xl:w-[12.5rem]">
                  <motion.p whileHover={{ color: "#1456ac" }}>
                    {product.title}
                  </motion.p>
                  <p className="my-2">${product.price.toLocaleString()}</p>
                </span>
              </div>
            ))}

            <AnimatePresence>
              {isMouseOver && (
                <div className="absolute w-full top-[55rem] px-2 md:hidden xl:top-[75rem] xl:w-[90%] xl:block">
                  <CarouselButton
                    setCurrentIndex={setCurrentIndex}
                    length={length}
                  />
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <Link to="/featured-products">
          <p className="text-[#1456ac] text-center mt-4 font-semibold xl:hidden">
            View All
          </p>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProducts;
