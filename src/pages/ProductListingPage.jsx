import { useState } from "react";
import ProductListing from "../components/ProductListing";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import ViewProduct from "../components/ViewProduct";

//import ViewProduct from "../components/ViewProduct";

function ProductListingPage({
  features,
  categories,
  brands,
  showMenu,
  setShowMenu,
  products,
  title,
  isViewProductOpen,
  setIsViewProductOpen,
  currentProduct,
  setCurrentProductID,
}) {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  return (
    <div
      className={`${isViewProductOpen ? "overflow-y-hidden h-[100vh]" : ""}`}
    >
      {isViewProductOpen && (
        <ViewProduct
          setIsViewProductOpen={setIsViewProductOpen}
          setCurrentProductID={setCurrentProductID}
          currentProduct={currentProduct}
        />
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
        setCurrentProductID={setCurrentProductID}
      />

      <Features features={features} />
      <Footer />
    </div>
  );
}

export default ProductListingPage;
