import { FontAwesomeIcon } from "../components/font-awesome";

function Filter({ setIsFilterMenuOpen }) {
  return (
    <div className="flex justify-between items-center mt-5 w-full xl:justify-end xl:mt-0 xl:mx-4">
      <div className="h-[3rem] justify-between items-center flex w-[70%] xl:w-auto">
        <input
          className="size-full border-1 rounded-l-md border-solid border-gray-400 py-2 px-3 text-s leading-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#1456ac] focus:outline-none focus:ring-[#1456ac]"
          type="text"
          placeholder="Search for items"
        />
        <button className="bg-[#1456ac] w-23 h-full rounded-r-md text-center flex justify-center items-center cursor-pointer">
          <FontAwesomeIcon
            className="text-white text-2xl"
            icon="fa-solid fa-magnifying-glass"
          />
        </button>
      </div>

      <div className="hidden justify-center items-center border-[#6cc6e786] border-2 text-[0.9rem] rounded p-2 mx-8 xl:flex">
        <FontAwesomeIcon className="text-[#3131318f]" icon="fa-solid fa-list" />
        <p className="text-[#3131318f]">Sort by</p>
        <select className="pl-4 focus:outline-none focus:border-0">
          <option>Default</option>
          <option>Price (Low to High)</option>
          <option>Price (High to Low)</option>
          <option>Alphabetical (A to Z)</option>
          <option>Alphabetical (Z to A)</option>
        </select>
      </div>

      <div className=" hidden justify-center items-center border-[#6cc6e786] border-2 text-[0.9rem] rounded p-2 xl:flex">
        <FontAwesomeIcon className="text-[#3131318f]" icon="fa-solid fa-list" />
        <p className="text-[#3131318f]">Filter by</p>
        <select className="pl-4 focus:outline-none focus:border-0">
          <option>Default</option>
          <option>Best Selling</option>
          <option>Top Rated</option>
        </select>
      </div>

      <button
        className="bg-[#1456ac] w-[12%] py-2 h-full rounded text-center cursor-pointer xl:hidden"
        onClick={() => setIsFilterMenuOpen(true)}
      >
        <FontAwesomeIcon
          className="text-white text-xl"
          icon="fa-solid fa-filter"
        />
      </button>
    </div>
  );
}

export default Filter;
