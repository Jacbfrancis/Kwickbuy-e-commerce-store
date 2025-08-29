import { useState } from "react";
import { FontAwesomeIcon } from "./font-awesome";
// eslint-disable-next-line no-unused-vars
import { easeInOut, motion } from "framer-motion";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";

function ProductListing({
  categories,
  brands,
  products,
  setIsFilterMenuOpen,
  isFilterMenuOpen,
  title,
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const [minimumPrice, setMinimumPrice] = useState(0);
  const [maximumPrice, setMaximumPrice] = useState(40000);
  const [sortSetting, setSortSetting] = useState("");

  //Sort Accordingly
  let sortedProducts = [...products];
  if (sortSetting === "Alphabetical (A to Z)") {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortSetting === "Alphabetical (Z to A)") {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortSetting === "Price (Low to High)") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortSetting === "Price (High to Low)") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else {
    sortedProducts;
  }
  products = sortedProducts;

  // filter by price
  products = products.filter(
    (product) => product.price > minimumPrice && product.price < maximumPrice
  );

  // page pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <div className="bg-[#fff] flex flex-col justify-between items-start px-6 py-4 my-6 xl:flex-row xl:mx-20 xl:items-center">
        <span className="xl:w-[30%]">
          <h3 className="font-bold">{title}</h3>
          <p className="font-normal">{products.length} items found</p>
        </span>
        <Filter
          setIsFilterMenuOpen={setIsFilterMenuOpen}
          setSortSetting={setSortSetting}
        />
      </div>

      {isFilterMenuOpen && (
        <motion.div
          className="bg-[#3736365e] w-[100vw] h-[100vh] fixed top-0 z-50 xl:hidden"
          initial={{ x: 120 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2, ease: easeInOut }}
          onClick={() => setIsFilterMenuOpen(false)}
        >
          <div
            className="bg-[#fff] font-medium text-[0.9rem] w-[80%] h-full px-8 py-6 fixed top-0 right-0 z-50 text-left overflow-scroll [scrollbar-width:none] xl:hidden"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <span className="block py-5">
              <div className="bg-[#fff] text-[#6969699f] px-8 fixed top-10 right-0">
                <FontAwesomeIcon
                  icon="fa-solid fa-xmark"
                  onClick={() => setIsFilterMenuOpen(false)}
                />
              </div>
            </span>
            <h3>Filter By</h3> <hr className="text-[#69696941] mt-3" />
            <form className="my-4 w-full">
              <label>Product Type</label>
              <select className="font-light pl-4 border-[0.1rem] border-[#69696941] rounded py-3 px-1 w-full my-3 focus:outline-1 focus:border-[#6cc6e786]">
                <option>All</option>
                <option>Physical Product</option>
                {/* <option>Digital Product</option> */}
              </select>

              <label>Sort By</label>
              <select
                className="font-light pl-4 border-[0.1rem] border-[#69696941] rounded py-3 px-1 w-full my-3 focus:outline-1 focus:border-[#6cc6e786]"
                onChange={(e) => {
                  setSortSetting(e.target.value);
                }}
              >
                <option value={""}>Default</option>
                <option value={"Price (Low to High)"}>
                  Price (Low to High)
                </option>
                <option value={"Price (High to Low)"}>
                  Price (High to Low)
                </option>
                <option value={"Alphabetical (A to Z)"}>
                  Alphabetical (A to Z)
                </option>
                <option value={"Alphabetical (Z to A)"}>
                  Alphabetical (Z to A)
                </option>
              </select>

              <h3>Price</h3>
              <div className="flex justify-between items-center my-2 font-light">
                <span className="block">
                  <label>Min</label>
                  <input
                    className="font-light block pl-4 border-[0.1rem] border-[#69696941] rounded py-2 w-[80%] focus:outline-1 focus:border-[#6cc6e786]"
                    placeholder="0"
                    type="number"
                    onChange={(e) => setMinimumPrice(Number(e.target.value))}
                  />
                </span>

                <span className="block">
                  <label>Max</label>
                  <input
                    className="font-light block pl-4 border-[0.1rem] border-[#69696941] rounded py-2 w-[80%] focus:outline-1 focus:border-[#6cc6e786]"
                    placeholder="4000"
                    type="number"
                    value={maximumPrice}
                    onChange={(e) => setMaximumPrice(Number(e.target.value))}
                  />
                </span>
              </div>
              <input
                className="w-full h-2"
                type="range"
                min={0}
                max={40000}
                onChange={(e) => setMaximumPrice(e.target.value)}
              />
            </form>
            <h3>Categories</h3>
            <div className="font-light my-4">
              <ul>
                {categories.map((category) => (
                  <li key={category.title} className="my-2">
                    <span>
                      <img
                        className="w-7 inline-block mr-4"
                        src={category.icon}
                        alt={category.title}
                      />
                    </span>
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Brands</h3>
              <ul className="font-light">
                {brands.slice(0, 4).map((brand) => (
                  <li key={brand.name} className="my-2">
                    <div className="flex justify-between items-center">
                      <p>{brand.name}</p>
                      <p className="text-[#1456ac]">{`( ${brand.products} )`}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      <div className="flex justify-start items-start xl:px-20">
        <div className="bg-[#fff] hidden font-medium text-[0.9rem] h-full w-[23%] mr-3 px-8 py-6 text-left overflow-scroll [scrollbar-width:none] xl:block">
          <h3>Filter By</h3> <hr className="text-[#69696941] mt-3" />
          <form className="my-4 w-full">
            <label>Product Type</label>
            <select className="font-light pl-4 border-[0.1rem] border-[#69696941] rounded py-3 px-1 w-full my-3 focus:outline-1 focus:border-[#6cc6e786]">
              <option value="All">All</option>
              <option value="Physical Products">Physical Products</option>
              {/* <option>Digital Product</option> */}
            </select>

            <h3>Price</h3>
            <div className="flex justify-between items-center my-2 font-light">
              <span className="block">
                <label>Min</label>
                <input
                  className="font-light block pl-4 border-[0.1rem] border-[#69696941] rounded py-2 w-[80%] focus:outline-1 focus:border-[#6cc6e786]"
                  placeholder="0"
                  onInput={(e) => setMinimumPrice(e.target.value)}
                  type="number"
                />
              </span>

              <span className="block">
                <label>Max</label>
                <input
                  className="font-light block pl-4 border-[0.1rem] border-[#69696941] rounded py-2 w-[80%] focus:outline-1 focus:border-[#6cc6e786]"
                  placeholder="5000"
                  type="number"
                  value={maximumPrice}
                  onInput={(e) => setMaximumPrice(e.target.value)}
                />
              </span>
            </div>
            <input
              className="w-full h-2"
              type="range"
              min={0}
              max={40000}
              onChange={(e) => setMaximumPrice(e.target.value)}
            />
          </form>
          <h3>Categories</h3>
          <div className="font-light my-4">
            <ul>
              {categories.map((category) => (
                <li key={category.title} className="my-4">
                  <span>
                    <img
                      className="w-8 inline-block mr-4"
                      src={category.icon}
                      alt={category.title}
                    />
                  </span>
                  {category.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3>Brands</h3>
            <ul className="font-light mt-2">
              {brands.map((brand) => (
                <li key={brand.name} className="my-1">
                  <div className="flex justify-between items-center">
                    <p>{brand.name}</p>
                    <p className="text-[#1456ac] my-1">{`(${brand.products})`}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="xl:ml-3 xl:w-[75%]">
          <ul className="text-center px-3 grid justify-center place-items-center grid-cols-2 gap-4 xl:grid-cols-4 xl:px-0">
            {currentProducts.map((product, index) => (
              <li
                key={product.id}
                className=" bg-[#fff] rounded-2xl my-1 p-3 shadow-lg border-2 border-[#5dcaf133]"
                onMouseOver={() => setHoveredIndex(index)}
                onMouseOut={() => setHoveredIndex(null)}
              >
                <div className="rounded-xl relative">
                  <motion.span
                    className="block border-b-1 rounded-xl border-[#6cc6e786] xl:border-b-1 relative"
                    initial={{ backgroundColor: "#fff" }}
                    animate={
                      hoveredIndex === index
                        ? { backgroundColor: "#4a81ca5d" }
                        : { backgroundColor: "#fff" }
                    }
                    transition={{ type: "tween" }}
                  >
                    <motion.div
                      className="bg-white text-[#3976c5] rounded-full text-[1rem] w-fit p-2 absolute top-20 left-15  xl:left-17 z-20 invisible xl:visible hidden"
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
                      className="rounded-xl"
                      initial={{ scale: 1 }}
                      animate={
                        hoveredIndex === index ? { scale: 1.15 } : { scale: 1 }
                      }
                      src={product.thumbnail}
                      alt={`${product.title}_image`}
                    />
                  </motion.span>
                </div>

                <span className="font-semibold text-[0.9rem] py-6 block w-[9rem] h-[7rem] m-auto">
                  <motion.h2 whileHover={{ color: "#1456ac" }}>
                    {product.title}
                  </motion.h2>
                  <p>${product.price.toLocaleString()}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Pagination
        totalProducts={products.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default ProductListing;
