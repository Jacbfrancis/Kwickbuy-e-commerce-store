import { useState } from "react";
import ProductListing from "../components/ProductListing";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import ViewProduct from "../components/ViewProduct";

function ProductListingPage({
  categories,
  brands,
  showMenu,
  setShowMenu,
  products,
  title,
}) {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isViewProductOpen, setIsViewProductOpen] = useState(false);

  return (
    <div>
      {isViewProductOpen && (
        <ViewProduct setIsViewProductOpen={setIsViewProductOpen} />
      )}

      <Navbar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        categories={categories}
        brands={brands}
      />

      <ProductListing
        products={products}
        categories={categories}
        brands={brands}
        setIsFilterMenuOpen={setIsFilterMenuOpen}
        isFilterMenuOpen={isFilterMenuOpen}
        title={title}
        setIsViewProductOpen={setIsViewProductOpen}
      />

      <Features />
      <Footer />
    </div>
  );
}

export default ProductListingPage;
