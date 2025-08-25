import { FontAwesomeIcon } from "../components/font-awesome";

function FilterMenu({ categories, brands, setIsFilterMenuOpen }) {
  return (
    <div className="bg-[#fff] font-medium text-[0.9rem] w-[80%] h-full px-8 py-6 fixed top-2 right-0 z-50 text-left overflow-scroll [scrollbar-width:none] xl:hidden">
      <div className="text-right mb-4 text-[#6969699f]">
        <FontAwesomeIcon
          icon="fa-solid fa-xmark"
          onClick={() => setIsFilterMenuOpen(false)}
        />
      </div>
      <h3>Filter By</h3> <hr className="text-[#69696941] mt-3" />
      <form className="my-4 w-full">
        <label>Product Type</label>
        <select className="font-light pl-4 border-[0.1rem] border-[#69696941] rounded py-3 px-1 w-full my-3 focus:outline-1 focus:border-[#6cc6e786]">
          <option>All</option>
          <option>Pysical Product</option>
          <option>Digital Product</option>
        </select>

        <label>Sort By</label>
        <select className="font-light pl-4 border-[0.1rem] border-[#69696941] rounded py-3 px-1 w-full my-3 focus:outline-1 focus:border-[#6cc6e786]">
          <option>Default</option>
          <option>Price (Low to High)</option>
          <option>Price (High to Low)</option>
          <option>Alphabetical (A to Z)</option>
          <option>Alphabetical (Z to A)</option>
        </select>

        <h3>Price</h3>
        <div className="flex justify-between items-center my-2 font-light">
          <span className="block">
            <label>Min</label>
            <input
              className="font-light block pl-4 border-[0.1rem] border-[#69696941] rounded py-2 w-[80%] focus:outline-1 focus:border-[#6cc6e786]"
              placeholder="0"
              type="number"
            />
          </span>

          <span className="block">
            <label>Max</label>
            <input
              className="font-light block pl-4 border-[0.1rem] border-[#69696941] rounded py-2 w-[80%] focus:outline-1 focus:border-[#6cc6e786]"
              placeholder="4000"
              type="number"
            />
          </span>
        </div>
        <input className="w-full h-2" type="range" />
      </form>
      <h3>Categories</h3>
      <div className="font-light my-4">
        <ul>
          {categories.slice(0, 3).map((category) => (
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
                <p className="bg-[#69696941] rounded-4xl px-2 py-1">
                  {brand.products}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterMenu;
