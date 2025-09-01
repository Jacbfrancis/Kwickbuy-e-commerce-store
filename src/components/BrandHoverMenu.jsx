// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function BrandHoverMenu({ brands }) {
  return (
    <>
      <motion.div
        className="bg-[#fff] w-[15rem] text-[#434343d6] shadow-xl font-light text-[0.9rem] rounded-lg"
        initial={{ y: 15 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, type: "tween" }}
      >
        <ul>
          {brands.slice(8, 17).map((brand, index) => (
            <li
              key={index}
              className="border-b-1 border-[#43434344] flex justify-between items-center"
            >
              <span className="px-3 py-2 cursor-pointer block hover:text-[#1456ac]">
                {brand.name}
              </span>
              <span className="px-3 py-2 cursor-pointer block text-[#1456ac]">
                {`(${brand.count})`}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}

export default BrandHoverMenu;
