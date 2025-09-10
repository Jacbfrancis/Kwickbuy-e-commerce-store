import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "./font-awesome";
import NavMenu from "../components/NavMenu";
import OfferHoverMenu from "./OfferHoverMenu";
import BrandHoverMenu from "./BrandHoverMenu";
import { Link } from "react-router-dom";

const offers = [
  { name: "Featured Deals", link: "/featured-products" },
  { name: "Flash Sales", link: "/flashdeals" },
  { name: "Discontinued Products", link: "" },
  { name: "Clearance Sales", link: "" },
];

function Navbar({ setShowMenu, showMenu, categories, brands }) {
  const [isHoverOffer, setIsHoverOffer] = useState(false);
  const [isHoverBrand, setIsHoverBrand] = useState(false);

  return (
    <>
      <nav
        className="flex justify-between items-center shadow-sm top-0 p-4 bg-[#fff] w-full z-50 xl:px-20 xl:py-1 xl:sticky"
        onMouseOver={() => {
          setIsHoverOffer(false), setIsHoverBrand(false);
        }}
      >
        <div className="flex justify-center items-center">
          <Link to="/">
            <img
              className="w-45 hidden xl:inline-block cursor-pointer"
              src="/kwickbuy-desktop.png"
              alt="Kwickbuy Logo"
            />
          </Link>
          <FontAwesomeIcon
            className="text-2xl cursor-pointer xl:!hidden"
            icon="fa-solid fa-bars"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
          <Link to="/">
            <img
              className="w-11 ml-5 xl:hidden cursor-pointer"
              src="/kwickbuy-logo.png"
              alt="Kwickbuy Logo"
            />
          </Link>
        </div>
        <div className=" hidden h-[3rem] w-full mx-15 justify-center items-center xl:flex">
          <input
            className=" size-full border-1 rounded-l-lg border-solid border-gray-400 py-2 px-3 text-s leading-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#1456ac] focus:outline-none focus:ring-[#1456ac]"
            type="text"
            placeholder="Search for items"
          />
          <button className="bg-[#1456ac] w-20 h-full rounded-r-lg text-center flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon
              className="text-white text-2xl"
              icon="fa-solid fa-magnifying-glass"
            />
          </button>
        </div>
        <div className="flex justify-center items-center relative z-50">
          <FontAwesomeIcon
            className="text-lg bg-[#f3f5f9] text-[#1456ac] rounded-full w-full p-2 !hidden xl:text-xl xl:!inline-block cursor-pointer hover:text-gray-400"
            icon="fa-regular fa-heart"
          />
          <span className="text-xs text-white bg-orange-500 rounded-full w-5 h-4 text-center absolute top-0 right-[100px] hidden xl:inline-block ">
            0
          </span>
          <FontAwesomeIcon
            className="text-lg bg-[#f3f5f9] text-[#1456ac] rounded-full w-full p-2 xl:!hidden cursor-pointer hover:text-gray-400"
            icon="fa-solid fa-magnifying-glass"
          />
          <FontAwesomeIcon
            className="text-lg mx-3 bg-[#f3f5f9] text-[#1456ac] rounded-full w-full p-2 xl:text-xl cursor-pointer hover:text-gray-400"
            icon="fa-solid fa-user"
          />
          <FontAwesomeIcon
            className="text-lg bg-[#f3f5f9] text-[#1456ac] rounded-full w-full p-2 xl:text-xl cursor-pointer hover:text-gray-400"
            icon="fa-solid fa-cart-shopping"
          />
          <span className="text-xs text-white bg-orange-500 rounded-full w-5 h-4 text-center absolute top-0 right-[-10px]">
            0
          </span>
        </div>

        {/* toggle navmenu on mobile */}
        {showMenu && (
          <motion.div
            className="bg-[#fff] w-[70%] h-full px-5 py-6 fixed top-2 right-0 z-50 text-left xl:hidden"
            initial={{ y: "-100vw" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.35, type: "tween" }}
          >
            <NavMenu
              setShowMenu={setShowMenu}
              categories={categories}
              offers={offers}
            />
          </motion.div>
        )}
      </nav>

      <div className="bg-[#1456ac] text-[#fff] hidden py-2 px-20 justify-start items-center xl:flex">
        <div
          className="bg-[#fff] text-[#1456ac] font-bold rounded py-3 px-8 flex justify-center items-center cursor-pointer"
          onMouseOver={() => setIsHoverOffer(false)}
        >
          <FontAwesomeIcon icon="fa-solid fa-list" />
          <p className="mx-10">Categories</p>
          <span className="text-[0.6rem]">&#9660;</span>
        </div>
        <ul className="flex justify-between items-center">
          <Link to="/">
            <li
              className="px-5 cursor-pointer"
              onMouseOver={() => setIsHoverOffer(false)}
            >
              Home
            </li>
          </Link>
          <li
            className="px-5 cursor-pointer"
            onMouseOver={() => {
              setIsHoverOffer(true), setIsHoverBrand(false);
            }}
          >
            Offers
            <span className="text-[0.5rem] font-semibold ml-2">&#9660;</span>
            {isHoverOffer && (
              <div
                className="absolute top-32 left-100 z-50"
                onMouseOut={() => setIsHoverOffer(false)}
              >
                <OfferHoverMenu offers={offers} />
              </div>
            )}
          </li>
          <li
            className="px-5 cursor-pointer"
            onMouseOver={() => {
              setIsHoverBrand(true), setIsHoverOffer(false);
            }}
          >
            Brands
            <span className="text-[0.5rem] font-semibold ml-1">&#9660;</span>
            {isHoverBrand && (
              <div
                className="absolute top-32 left-130 z-50"
                onMouseOut={() => setIsHoverBrand(false)}
              >
                <BrandHoverMenu brands={brands} />
              </div>
            )}
          </li>
          <li
            className="px-5 cursor-pointer"
            onMouseOver={() => setIsHoverBrand(false)}
          >
            Login
          </li>
          <li
            className="px-5 cursor-pointer"
            onMouseOver={() => setIsHoverBrand(false)}
          >
            Sign up
          </li>
          <li className="px-5 cursor-pointer">About us</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
