import { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "./font-awesome";
import NavMenu from "../components/NavMenu";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 py-4 bg-[#fff] md:px-20 md:py-1">
      <div className="flex justify-center items-center">
        <img
          className="w-45 hidden md:inline-block"
          src="/kwickbuy-desktop.png"
          alt="Kwickbuy Logo"
        />
        <FontAwesomeIcon
          className="text-2xl md:!hidden"
          icon="fa-solid fa-bars"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        <img
          className="w-11 ml-5 md:hidden"
          src="/kwickbuy-logo.png"
          alt="Kwickbuy Logo"
        />
      </div>
      <div className=" hidden h-[3rem] w-full mx-15 justify-center items-center md:flex">
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
      <div className="flex justify-center items-center relative">
        <FontAwesomeIcon
          className="text-lg bg-[#f3f5f9] text-[#1456ac] rounded-full w-full p-2 !hidden md:text-xl md:!inline-block cursor-pointer hover:text-gray-400"
          icon="fa-regular fa-heart"
        />
        <span className="text-xs text-white bg-orange-500 rounded-full w-5 h-4 text-center absolute top-0 right-[100px] hidden md:inline-block ">
          0
        </span>
        <FontAwesomeIcon
          className="text-lg bg-[#f3f5f9] text-[#1456ac] rounded-full w-full p-2 md:!hidden cursor-pointer hover:text-gray-400"
          icon="fa-solid fa-magnifying-glass"
        />
        <FontAwesomeIcon
          className="text-lg mx-3 bg-[#f3f5f9] text-[#1456ac] rounded-full w-full p-2 md:text-xl cursor-pointer hover:text-gray-400"
          icon="fa-solid fa-user"
        />
        <FontAwesomeIcon
          className="text-lg bg-[#f3f5f9] text-[#1456ac] rounded-full w-full p-2 md:text-xl cursor-pointer hover:text-gray-400"
          icon="fa-solid fa-cart-shopping"
        />
        <span className="text-xs text-white bg-orange-500 rounded-full w-5 h-4 text-center absolute top-0 right-[-10px]">
          0
        </span>
      </div>
      {showMenu && (
        <motion.div
          className="bg-[#fff] w-[70%] h-full px-5 py-6 fixed top-0 right-0 text-left md:hidden"
          initial={{ y: "-100vw" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.35, type: "tween" }}
        >
          <NavMenu setShowMenu={setShowMenu} />
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
