// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MoreFromStore({ productBrands, setCurrentImageIndex }) {
  const navigate = useNavigate();

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-[90%] m-auto xl:w-full">
      <h2 className="font-bold mb-4">More from this store</h2>
      <ul className="text-[0.9rem] font-semibold">
        {productBrands.slice(0, 3).map((product, index) => (
          <li
            key={product.id}
            className="bg-[#fff] rounded-lg border-1 border-[#6cc6e73f] px-2 flex justify-start items-center gap-6 py-4 my-2"
            onMouseOver={() => setHoveredIndex(index)}
            onMouseOut={() => setHoveredIndex(null)}
            onClick={() => {
              navigate(`/product/${product.id}`);
              setCurrentImageIndex(0);
            }}
          >
            <span className="w-[33%] p-2 block">
              <motion.img
                index={{ scale: 1 }}
                animate={hoveredIndex === index ? { scale: 1.2 } : { scale: 1 }}
                src={product.thumbnail}
                alt={`${product.title}_image`}
              />
            </span>
            <span className="w-[65%] block">
              <motion.p whileHover={{ color: "#1456ac" }} className="mb-1.5">
                {product.title}
              </motion.p>
              <p>{`$${product.price}`}</p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoreFromStore;
