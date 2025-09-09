import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function SimilarProducts({ currentProduct, categories }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navigate = useNavigate();

  const categoryProducts = categories.find((category) =>
    category.group.includes(currentProduct.category)
  );

  return (
    <div className="w-[90%] m-auto xl:px-20 xl:w-full xl:mt-2">
      <div className="bg-[#fff] rounded-lg pb-8 px-5">
        <span className="flex justify-between items-center py-6">
          <h2 className="font-semibold">Similar products</h2>
          <Link to={categoryProducts.link}>
            <p className="text-[#1456ac]">View All</p>
          </Link>
        </span>
        <ul className="text-center grid justify-center place-items-center grid-cols-2 gap-5 xl:grid-cols-6">
          {categoryProducts.product.slice(0, 12).map((product, index) => (
            <li
              onMouseOver={() => setHoveredIndex(index)}
              onMouseOut={() => setHoveredIndex(null)}
              key={product.id}
              className={`border-0.5 border-[#6f6f6f15] rounded-lg shadow-sm ${
                index > 3 ? "hidden xl:inline-block" : "inline-block"
              }`}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <span className="block">
                <motion.img
                  initial={{ scale: 1 }}
                  animate={
                    index === hoveredIndex ? { scale: 1.2 } : { scale: 1 }
                  }
                  className="w-[100%] m-auto px-3 py-5 cursor-pointer"
                  src={product.thumbnail}
                  alt={`${product.title}_image`}
                />
              </span>
              <span className="block px-6 py-2 h-[7rem]">
                <motion.p
                  whileHover={{ color: "#1456ac" }}
                  className="font-normal mb-3 cursor-pointer"
                >
                  {product.title.substring(0, 12)}...
                </motion.p>
                <p className="font-semibold">{`$${product.price}`}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SimilarProducts;
