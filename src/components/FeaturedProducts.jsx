import { useState } from "react";
import useHover from "./useHover";
import { AnimatePresence } from "framer-motion";
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

  return (
    <div className="xl:px-20 mt-6">
      <div className="bg-[#fff] rounded-xl shadow-sm pb-8">
        <h2 className="text-[#1456ac] text-center font-bold text-[1.3rem] py-4">
          Featured products
        </h2>
        <p className="text-[#1456ac] hidden text-right pr-6 font-semibold xl:block">
          View All
        </p>
        <div
          className="overflow-hidden flex justify-center items-center"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {featuredDeals.map((product, index) => (
            <div
              key={product.id}
              className="border-y-1 rounded-2xl border-[#6cc6e786] shadow-sm shadow-[#6cc6e7ae] mx-2 h-[19rem]"
            >
              <span className="block border-b-1 rounded-2xl border-[#6cc6e786]">
                <img
                  className="w-full"
                  src={product.thumbnail}
                  alt={`product ${index}`}
                />
              </span>
              <span className="text-center text-[1rem] font-semibold block mt-3 mb-6 mx-auto w-[12.5rem] whitespace-normal">
                <p>{product.title}</p>
                <p className="my-2">{product.price}</p>
              </span>
            </div>
          ))}

          <AnimatePresence>
            {isMouseOver && (
              <div className="absolute w-full top-[55rem] px-2 md:hidden xl:top-[75rem] xl:w-[90%] xl:block">
                <CarouselButton setCurrentIndex={setCurrentIndex} length={12} />
              </div>
            )}
          </AnimatePresence>
        </div>
        <p className="text-[#1456ac] text-center mt-4 font-semibold xl:hidden">
          View All
        </p>
      </div>
    </div>
  );
}

export default FeaturedProducts;
