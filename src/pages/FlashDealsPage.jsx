import { useState } from "react";
import Filter from "../components/Filter";
import FilterMenuMobile from "../components/FilterMenuMobile";
import FilterMenuSidebar from "../components/FilterMenuSidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function FlashDealsPage({ categories, brands, showMenu, setShowMenu }) {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  return (
    <div>
      <Navbar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        categories={categories}
        brands={brands}
      />

      <div className="bg-[#fff] flex flex-col justify-between items-start px-6 py-4 my-6 xl:flex-row xl:mx-20 xl:items-center">
        <span className="xl:w-[30%]">
          <h3 className="font-bold">Flash Deals</h3>
          <p className="font-normal">{"5"} items found</p>
        </span>
        <Filter setIsFilterMenuOpen={setIsFilterMenuOpen} />
      </div>

      <FilterMenuSidebar categories={categories} brands={brands} />

      {isFilterMenuOpen && (
        <FilterMenuMobile
          categories={categories}
          brands={brands}
          setIsFilterMenuOpen={setIsFilterMenuOpen}
        />
      )}
      <div className="h-[50vh]"></div>
    </div>
  );
}

export default FlashDealsPage;
