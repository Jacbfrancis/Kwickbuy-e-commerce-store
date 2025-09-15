// eslint-disable-next-line no-unused-vars
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemGrid({ data, title }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="xl:px-20 mb-8">
      <div className="bg-[#fff] shadow-sm rounded-xl ">
        <span className="text-[#1456ac] font-normal flex justify-between items-center px-4 xl:px-8 pt-8">
          <h2 className="text-[1.3rem] text-black">{title}</h2>
          <p>View All</p>
        </span>

        <div className="overflow-scroll [scrollbar-width:none] flex justify-start items-start px-11 py-5 whitespace-nowrap gap-10">
          {data.map((data, index) => (
            <Link key={data.title} to={data.link}>
              <div
                className="text-center w-[4.8rem] pb-8 xl:w-[6rem]"
                onMouseOver={() => setHoveredIndex(index)}
                onMouseOut={() => setHoveredIndex(null)}
              >
                <motion.img
                  className="rounded-full h-[4.5rem] mb-2 mx-auto snap-center border-[#fff] xl:h-[6rem]"
                  animate={
                    hoveredIndex === index
                      ? {
                          scale: 0.9,
                          borderWidth: 6,
                          borderRadius: "100%",
                          boxShadow: "0px 1px 2px 0 rgba(0,0,0,0.5)",
                        }
                      : { scale: 1, borderWidth: 0, borderRadius: 0 }
                  }
                  transition={{ ease: easeInOut, duration: 0.4 }}
                  src={data.icon}
                  alt={`${data.title}image`}
                />

                <h2 className="text-sm">{data.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemGrid;
