// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const brands = [
  { name: "Featyr", products: 10 },
  { name: "Clearance", products: 34 },
  { name: "Dued Products", products: 5 },
  { name: "Flashy", products: 12 },
  { name: "Veyra", products: 6 },
  { name: "Aureon", products: 24 },
  { name: "Beyora", products: 11 },
  { name: "Lago", products: 12 },
];

function BrandHoverMenu() {
  return (
    <>
      <motion.div
        className="bg-[#fff] w-[15rem] text-[#434343d6] shadow-xl font-light text-[0.9rem] rounded-lg"
        initial={{ y: 15 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, type: "tween" }}
      >
        <ul>
          {brands.map((brand, index) => (
            <li
              key={index}
              className="border-b-1 border-[#43434344] flex justify-between items-center"
            >
              <span className="px-3 py-2 cursor-pointer block hover:text-[#1456ac]">
                {brand.name}
              </span>
              <span className="px-3 py-2 cursor-pointer block text-[#1456ac]">
                {`(${brand.products})`}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}

export default BrandHoverMenu;
