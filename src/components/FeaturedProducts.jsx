import { useState } from "react";
import useHover from "./useHover";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, easeIn } from "framer-motion";
import LoadingSpinner from "./LoadingAnimation";
import CarouselButton from "./CarouselButton";

function FeaturedProducts({ productData, error, loading }) {
  const [isMouseOver, handleMouseOut, handleMouseOver] = useHover();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (error) {
    <div>Error: {error.message}</div>;
  }

  if (loading) {
    <LoadingSpinner />;
  }
  const categories = [...new Set(productData?.map((item) => item.category))];
  const featuredProducts = categories.map((category) =>
    productData.find((product) => product.category === category)
  );

  const featuredDeals = featuredProducts.splice(6, 13);
  const length = featuredDeals.length;

  let visibleCards = [];

  for (let i = 0; i < length; i++) {
    const cardIndex = (currentIndex + i) % length;
    visibleCards.push(featuredDeals[cardIndex]);
  }

  return (
    <div className="xl:px-20 my-6">
      <div className="bg-[#fff] rounded-xl shadow-sm pb-8">
        <h2 className="text-[#1456ac] text-center font-bold text-[1.3rem] pb-4 pt-8">
          Featured products
        </h2>
        <p className="text-[#1456ac] hidden text-right pr-6 pb-5 font-semibold xl:block">
          View All
        </p>

        <div className="overflow-hidden">
          <div
            className="flex justify-center items-center"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {visibleCards.map((product, index) => (
              <div
                key={product.id}
                className="border-y-1 rounded-2xl border-[#6cc6e786] shadow-sm shadow-[#6cc6e7ae] mx-3 h-[22rem] xl:border-0 xl:shadow-none"
              >
                <motion.span
                  className="block border-b-1 rounded-2xl border-[#6cc6e786] xl:border-1"
                  whileHover={{ borderWidth: 0, scale: 1.15 }}
                  transition={{ type: "tween" }}
                >
                  <img
                    className="w-full"
                    src={product.thumbnail}
                    alt={`product ${index}`}
                  />
                </motion.span>
                <span className="text-center text-[1rem] font-semibold block mt-3 mb-6 mx-auto w-[15rem] whitespace-normal xl:w-[12.5rem]">
                  <p>{product.title}</p>
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

        <p className="text-[#1456ac] text-center mt-4 font-semibold xl:hidden">
          View All
        </p>
      </div>
    </div>
  );
}

export default FeaturedProducts;
