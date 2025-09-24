import { useState } from "react";
import ProductListing from "../components/ProductListing";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import ViewProduct from "../components/ViewProduct";

//import ViewProduct from "../components/ViewProduct";

function ProductListingPage({
  user,
  cart,
  dispatchCart,
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
  setCurrentProduct,
  setSearch,
  search,
}) {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  return (
    <div
      className={`${isViewProductOpen ? "overflow-y-hidden h-[100vh]" : ""}`}
    >
      {isViewProductOpen && (
        <ViewProduct
          dispatchCart={dispatchCart}
          setIsViewProductOpen={setIsViewProductOpen}
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
        />
      )}
      <Navbar
        user={user}
        cart={cart}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        categories={categories}
        brands={brands}
        setSearch={setSearch}
        search={search}
      />

      <ProductListing
        products={products}
        categories={categories}
        brands={brands}
        setIsFilterMenuOpen={setIsFilterMenuOpen}
        isFilterMenuOpen={isFilterMenuOpen}
        title={title}
        setIsViewProductOpen={setIsViewProductOpen}
        setCurrentProduct={setCurrentProduct}
        setSearch={setSearch}
        search={search}
      />

      <Features features={features} />
      <Footer />
    </div>
  );
}

export default ProductListingPage;
