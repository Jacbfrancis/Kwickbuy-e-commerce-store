import { FontAwesomeIcon } from "../components/font-awesome";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function FlashDealsPage() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col justify-center items-center xl:flex-row">
        <span>
          <h3>Flash Deals</h3>
          <p>{"5"} items found</p>
        </span>
        <div className="h-[3rem] w-full mx-15 justify-center items-center xl:flex">
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
      </div>

      {/* <div className="my-8 mx-4 lg:mx-20 relative">
        <img
          className="rounded hidden m-auto xl:block"
          src="/public/flasdeals_banner.jpg"
        />

        <div className="w-full flex justify-between items-center px-10 absolute top-20">
          <div className="text-[#fff] text-[2rem]">
            <h2 className="font-extrabold">LIMITED TIME DEALS</h2>
            <p className="font-medium my-2 tracking-wider [word-spacing:1.5px]">
              While stock lasts! Grab Yours Now!
            </p>
          </div>
          <div className="bg-[#1456ac] w-[30%] p-4">
            <CountdownTimer />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default FlashDealsPage;
