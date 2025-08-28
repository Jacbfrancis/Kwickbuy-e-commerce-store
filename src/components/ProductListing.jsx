import { useState } from "react";
import { FontAwesomeIcon } from "./font-awesome";
// eslint-disable-next-line no-unused-vars
import { easeInOut, motion } from "framer-motion";
import Pagination from "../components/Pagination";

function ProductListing({ categories, brands, products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const [minimumPrice, setMinimumPrice] = useState(0);
  const [maximumPrice, setMaximumPrice] = useState(40000);

  products = products.filter(
    (product) => product.price > minimumPrice && product.price < maximumPrice
  );

  // console.log([
  //   "beauty",
  //   "fragrances",
  //   "furniture",
  //   "groceries",
  //   "home-decoration",
  //   "kitchen-accessories",
  //   "laptops",
  //   "mens-shirts",
  //   "mens-shoes",
  //   "mens-watches",
  //   "mobile-accessories",
  //   "motorcycle",
  //   "skin-care",
  //   "smartphones",
  //   "sports-accessories",
  //   "sunglasses",
  //   "tablets",
  //   "tops",
  //   "vehicle",
  //   "womens-bags",
  //   "womens-dresses",
  //   "womens-jewellery",
  //   "womens-shoes",
  //   "womens-watches",
  // ]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <div className="flex justify-start items-start xl:px-20">
        <div className="bg-[#fff] hidden font-medium text-[0.9rem] h-full w-[23%] mr-3 px-8 py-6 text-left overflow-scroll [scrollbar-width:none] xl:block">
          <h3>Filter By</h3> <hr className="text-[#69696941] mt-3" />
          <form className="my-4 w-full">
            <label>Product Type</label>
            <select className="font-light pl-4 border-[0.1rem] border-[#69696941] rounded py-3 px-1 w-full my-3 focus:outline-1 focus:border-[#6cc6e786]">
              <option value="All">All</option>
              <option value="Physical Products">Pysical Products</option>
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
            {currentProducts
              .filter(
                (product) =>
                  product.price > minimumPrice && product.price < maximumPrice
              )
              .map((product) => (
                <li
                  key={product.id}
                  className=" bg-[#fff] rounded-2xl my-1 p-3 shadow-lg border-2 border-[#5dcaf133]"
                >
                  <div className="rounded-xl relative">
                    <img
                      className="rounded-xl"
                      src={product.thumbnail}
                      alt={`${product.name}_image`}
                    />
                  </div>

                  <span className="font-semibold text-[0.9rem] py-6 block w-[9rem] h-[7rem] m-auto">
                    <motion.h2 whileHover={{ color: "#1456ac" }}>
                      {product.title}
                    </motion.h2>
                    <p>${product.price.toLocaleString()}</p>
                  </span>
                </li>
              ))}
            {/* <li className=" bg-[#fff] rounded-2xl my-1 p-3 shadow-lg">
            <div className="rounded-xl relative">
              { <motion.div
                className="bg-white text-[#3976c5] rounded-full text-[1rem] w-fit p-2 absolute top-20 left-15  xl:left-17 z-20 invisible xl:visible hidden"
                initial={{ display: "none" }}
                animate={{ display: "block" }}
                transition={{
                  duration: 0.25,
                  type: "tween",
                  ease: "easeInOut",
                }}
              >
                <FontAwesomeIcon icon="fa-regular fa-eye" />
              </motion.div> }

              <img
                className="rounded-xl"
                src="https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/thumbnail.webp"
                alt="product_alt"
              />
            </div>

            <span className="font-semibold text-[0.9rem] py-6 block">
              <motion.h2 whileHover={{ color: "#1456ac" }}>
                Product name
              </motion.h2>
              <p>$100.00</p>
            </span>
          </li> */}
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
