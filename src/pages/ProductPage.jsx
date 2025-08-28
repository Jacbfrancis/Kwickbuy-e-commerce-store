import { useState } from "react";
import Filter from "../components/Filter";
import FilterMenuMobile from "../components/FilterMenuMobile";
import ProductListing from "../components/ProductListing";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Features from "../components/Features";

function ProductPage({
  categories,
  brands,
  showMenu,
  setShowMenu,
  products,
  title,
}) {
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
          <h3 className="font-bold">{title}</h3>
          <p className="font-normal">{products.length} items found</p>
        </span>
        <Filter setIsFilterMenuOpen={setIsFilterMenuOpen} />
      </div>

      <ProductListing
        products={products}
        categories={categories}
        brands={brands}
      />

      {isFilterMenuOpen && (
        <FilterMenuMobile
          categories={categories}
          brands={brands}
          setIsFilterMenuOpen={setIsFilterMenuOpen}
          products={products}
        />
      )}

      <Features />
      <Footer />
    </div>
  );
}

export default ProductPage;
