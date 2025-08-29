import { useState } from "react";
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

      <ProductListing
        products={products}
        categories={categories}
        brands={brands}
        setIsFilterMenuOpen={setIsFilterMenuOpen}
        isFilterMenuOpen={isFilterMenuOpen}
        title={title}
      />

      <Features />
      <Footer />
    </div>
  );
}

export default ProductPage;
