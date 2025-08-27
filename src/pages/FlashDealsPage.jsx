import { useState } from "react";
import Filter from "../components/Filter";
import FilterMenuMobile from "../components/FilterMenuMobile";
import ProductListing from "../components/ProductListing";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import Features from "../components/Features";

function FlashDealsPage({
  categories,
  brands,
  showMenu,
  setShowMenu,
  flashSales,
}) {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = flashSales.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
          <p className="font-normal">{flashSales.length} items found</p>
        </span>
        <Filter setIsFilterMenuOpen={setIsFilterMenuOpen} />
      </div>

      {isFilterMenuOpen && (
        <FilterMenuMobile
          categories={categories}
          brands={brands}
          setIsFilterMenuOpen={setIsFilterMenuOpen}
        />
      )}
      <ProductListing
        currentProducts={currentProducts}
        categories={categories}
        brands={brands}
      />
      <Pagination
        totalProducts={flashSales.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <Features />
      <Footer />
    </div>
  );
}

export default FlashDealsPage;
