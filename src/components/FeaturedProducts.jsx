import useHover from "./useHover";

import LoadingSpinner from "./LoadingAnimation";
import CarouselButton from "./CarouselButton";
import { AnimatePresence } from "framer-motion";

function FeaturedProducts({ productData, error, loading }) {
  const [isMouseOver, handleMouseOut, handleMouseOver] = useHover();

  if (loading) {
    <LoadingSpinner />;
  }

  if (error) {
    <div>Error: {error.message}</div>;
  }

  //const categories = [...new Set(productData.map((item) => item.category))];

  // categories.forEach((category) => {
  //   const firstItem = productData.find((item) => item.category === category);
  //   console.log(firstItem);
  // });

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
          className="overflow-hidden"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="flex justify-center items-center overflow-hidden w-full whitespace-nowrap">
            <div className="border-y-1 rounded-2xl border-[#6cc6e786] shadow-sm shadow-[#6cc6e7ae] mx-2 w-full">
              <span className="block border-b-1 rounded-2xl border-[#6cc6e786]">
                <img
                  className="w-full m-auto px-6 py-4"
                  src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
                  alt="placeholfer alt text"
                />
              </span>
              <span className="text-center block mt-3 mb-6 px-8">
                <p className="font-semibold">Fireplace cook stove</p>
                <p className="font-medium my-2">$12,000</p>
              </span>
            </div>

            <div className="border-y-1 rounded-2xl border-[#6cc6e786] shadow-sm shadow-[#6cc6e7ae] mx-2 w-full">
              <span className="block border-b-1 rounded-2xl border-[#6cc6e786]">
                <img
                  className="w-full m-auto px-6 py-4"
                  src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
                  alt="placeholfer alt text"
                />
              </span>
              <span className="text-center block mt-3 mb-6 px-8">
                <p className="font-semibold">Fireplace cook stove</p>
                <p className="font-medium my-2">$12,000</p>
              </span>
            </div>

            <div className="border-y-1 rounded-2xl border-[#6cc6e786] shadow-sm shadow-[#6cc6e7ae] mx-2 w-full">
              <span className="block border-b-1 rounded-2xl border-[#6cc6e786]">
                <img
                  className="w-full m-auto px-6 py-4"
                  src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
                  alt="placeholfer alt text"
                />
              </span>
              <span className="text-center block mt-3 mb-6 px-8">
                <p className="font-semibold">Fireplace cook stove</p>
                <p className="font-medium my-2">$12,000</p>
              </span>
            </div>

            <div className="border-y-1 rounded-2xl border-[#6cc6e786] shadow-sm shadow-[#6cc6e7ae] mx-2 w-full">
              <span className="block border-b-1 rounded-2xl border-[#6cc6e786]">
                <img
                  className="w-full m-auto px-6 py-4"
                  src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
                  alt="placeholfer alt text"
                />
              </span>
              <span className="text-center block mt-3 mb-6 px-8">
                <p className="font-semibold">Fireplace cook stove</p>
                <p className="font-medium my-2">$12,000</p>
              </span>
            </div>

            <div className="border-y-1 rounded-2xl border-[#6cc6e786] shadow-sm shadow-[#6cc6e7ae] mx-2 w-full">
              <span className="block border-b-1 rounded-2xl border-[#6cc6e786]">
                <img
                  className="w-full m-auto px-6 py-4"
                  src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
                  alt="placeholfer alt text"
                />
              </span>
              <span className="text-center block mt-3 mb-6 px-8">
                <p className="font-semibold">Fireplace cook stove</p>
                <p className="font-medium my-2">$12,000</p>
              </span>
            </div>

            <div className="border-y-1 rounded-2xl border-[#6cc6e786] shadow-sm shadow-[#6cc6e7ae] mx-2 w-full">
              <span className="block border-b-1 rounded-2xl border-[#6cc6e786]">
                <img
                  className="w-full m-auto px-6 py-4"
                  src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
                  alt="placeholfer alt text"
                />
              </span>
              <span className="text-center block mt-3 mb-6 px-8">
                <p className="font-semibold">Fireplace cook stove</p>
                <p className="font-medium my-2">$12,000</p>
              </span>
            </div>
            <div className="border-y-1 rounded-2xl border-[#6cc6e786] shadow-sm shadow-[#6cc6e7ae] mx-2 w-full">
              <span className="block border-b-1 rounded-2xl border-[#6cc6e786]">
                <img
                  className="w-full m-auto px-6 py-4"
                  src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
                  alt="placeholfer alt text"
                />
              </span>
              <span className="text-center block mt-3 mb-6 px-8">
                <p className="font-semibold">Fireplace cook stove</p>
                <p className="font-medium my-2">$12,000</p>
              </span>
            </div>
            <div className="border-y-1 rounded-2xl border-[#6cc6e786] shadow-sm shadow-[#6cc6e7ae] mx-2 w-full">
              <span className="block border-b-1 rounded-2xl border-[#6cc6e786]">
                <img
                  className="w-full m-auto px-6 py-4"
                  src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
                  alt="placeholfer alt text"
                />
              </span>
              <span className="text-center block mt-3 mb-6 px-8">
                <p className="font-semibold">Fireplace cook stove</p>
                <p className="font-medium my-2">$12,000</p>
              </span>
            </div>
            <div className="border-y-1 rounded-2xl border-[#6cc6e786] shadow-sm shadow-[#6cc6e7ae] mx-2 w-full">
              <span className="block border-b-1 rounded-2xl border-[#6cc6e786]">
                <img
                  className="w-full m-auto px-6 py-4"
                  src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
                  alt="placeholfer alt text"
                />
              </span>
              <span className="text-center block mt-3 mb-6 px-8">
                <p className="font-semibold">Fireplace cook stove</p>
                <p className="font-medium my-2">$12,000</p>
              </span>
            </div>
            <div className="border-y-1 rounded-2xl border-[#6cc6e786] shadow-sm shadow-[#6cc6e7ae] mx-2 w-full">
              <span className="block border-b-1 rounded-2xl border-[#6cc6e786]">
                <img
                  className="w-full m-auto px-6 py-4"
                  src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
                  alt="placeholfer alt text"
                />
              </span>
              <span className="text-center block mt-3 mb-6 px-8">
                <p className="font-semibold">Fireplace cook stove</p>
                <p className="font-medium my-2">$12,000</p>
              </span>
            </div>
            <div className="border-y-1 rounded-2xl border-[#6cc6e786] shadow-sm shadow-[#6cc6e7ae] mx-2 w-full">
              <span className="block border-b-1 rounded-2xl border-[#6cc6e786]">
                <img
                  className="w-full m-auto px-6 py-4"
                  src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
                  alt="placeholfer alt text"
                />
              </span>
              <span className="text-center block mt-3 mb-6 px-8">
                <p className="font-semibold">Fireplace cook stove</p>
                <p className="font-medium my-2">$12,000</p>
              </span>
            </div>
            <div className="border-y-1 rounded-2xl border-[#6cc6e786] shadow-sm shadow-[#6cc6e7ae] mx-2 w-full">
              <span className="block border-b-1 rounded-2xl border-[#6cc6e786]">
                <img
                  className="w-full m-auto px-6 py-4"
                  src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
                  alt="placeholfer alt text"
                />
              </span>
              <span className="text-center block mt-3 mb-6 px-8">
                <p className="font-semibold">Fireplace cook stove</p>
                <p className="font-medium my-2">$12,000</p>
              </span>
            </div>

            <div className="border-y-1 rounded-2xl border-[#6cc6e786] shadow-sm shadow-[#6cc6e7ae] mx-2 w-full">
              <span className="block border-b-1 rounded-2xl border-[#6cc6e786]">
                <img
                  className="w-full m-auto px-6 py-4"
                  src="https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
                  alt="placeholfer alt text"
                />
              </span>
              <span className="text-center block mt-3 mb-6 px-8">
                <p className="font-semibold">Fireplace cook stove</p>
                <p className="font-medium my-2">$12,000</p>
              </span>
            </div>
          </div>
          <AnimatePresence>
            {isMouseOver && (
              <div className="absolute w-full top-[55rem] px-2 md:hidden xl:top-[75rem] xl:w-[90%] xl:block">
                <CarouselButton />
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
