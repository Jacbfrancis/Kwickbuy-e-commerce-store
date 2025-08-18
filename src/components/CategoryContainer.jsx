import { AnimatePresence } from "framer-motion";
import CarouselButton from "./CarouselButton";
import useHover from "./useHover";
import { useState } from "react";

function CategoryContainer({ title, filterFunc }) {
  const [isMouseOver, handleMouseOut, handleMouseOver] = useHover();
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedIndexes = [2, 3, 12, 10, 5, 6];
  const items = filterFunc;
  const selectedItems = selectedIndexes.map((index) => items[index]);

  return (
    <div className="xl:mx-20">
      <div className="bg-[#fff] shadow-sm rounded-xl">
        <span className="text-[#1456ac] font-medium flex justify-between items-center px-6 pt-6 xl:px-12">
          <h2 className="text-black text-[1.5rem]">{title}</h2>
          <p>View All</p>
        </span>
        <div>
          <ul className="relative text-center grid grid-cols-2 xl:grid-cols-6 gap-2 my-4 px-4 pb-8 xl:px-8 xl:pb-4">
            {selectedItems.map((item, index) => (
              <li
                key={item.id}
                className={`rounded-2xl border-2 border-[#5dcaf133] my-1 p-2 xl:shadow-none xl:border-0 ${
                  index > 3 ? "hidden xl:inline-block" : "inline-block"
                }`}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <div className="rounded-xl">
                  <img
                    className="py-[1rem] "
                    src={item.thumbnail}
                    alt={`${item.title}_image`}
                  />
                </div>

                <span className="font-semibold text-[0.8rem] block pb-8 pt-4">
                  <h2>{item.title}</h2>
                  <p>${item.price}</p>
                </span>
              </li>
            ))}
            <AnimatePresence>
              {isMouseOver && (
                <div className="absolute w-full px-2 hidden xl:top-[8rem] xl:w-[100%] xl:block">
                  <CarouselButton />
                </div>
              )}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CategoryContainer;
