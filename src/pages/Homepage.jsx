import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FlashDeal from "../components/FlashDeal";
import FeaturedProducts from "../components/FeaturedProducts";
import ItemGrid from "../components/ItemGrid";
import Banner from "../components/Banner";
import CategoryContainer from "../components/CategoryContainer";
import Features from "../components/Features";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import ViewProduct from "../components/ViewProduct";

function Homepage({
  cart,
  dispatchCart,
  features,
  productData,
  categories,
  brands,
  showMenu,
  setShowMenu,
  flashSales,
  featuredProducts,
  isViewProductOpen,
  currentProduct,
  setIsViewProductOpen,
  setCurrentProduct,
}) {
  return (
    <div
      className={`${isViewProductOpen ? "overflow-y-hidden h-[100vh]" : ""}`}
    >
      {isViewProductOpen && (
        <ViewProduct
          dispatchCart={dispatchCart}
          setCurrentProduct={setCurrentProduct}
          currentProduct={currentProduct}
          setIsViewProductOpen={setIsViewProductOpen}
        />
      )}

      <Navbar
        cart={cart}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        categories={categories}
        brands={brands}
      />
      <Header showMenu={showMenu} categories={categories} />
      <FlashDeal
        flashSales={flashSales}
        productData={productData}
        setCurrentProduct={setCurrentProduct}
        setIsViewProductOpen={setIsViewProductOpen}
      />
      <FeaturedProducts
        featuredProducts={featuredProducts}
        productData={productData}
        setIsViewProductOpen={setIsViewProductOpen}
        setCurrentProduct={setCurrentProduct}
      />
      <ItemGrid data={categories} title={"Categories"} />
      <Banner banner={"/gadgets_banner.webp"} />
      <CategoryContainer
        title={"Phones & Gadgets"}
        filterFunc={productData.filter(
          (product) => product.category === "smartphones"
        )}
        link={"/phones-gadgets"}
        setCurrentProduct={setCurrentProduct}
        setIsViewProductOpen={setIsViewProductOpen}
      />
      <CategoryContainer
        title={"Men's Fashion"}
        filterFunc={productData.filter((product) =>
          ["mens-shirts", "mens-shoes", "mens-watches"].includes(
            product.category
          )
        )}
        link={"/mens-fashion"}
        setCurrentProduct={setCurrentProduct}
        setIsViewProductOpen={setIsViewProductOpen}
      />
      <CategoryContainer
        title={"Women's Fashion"}
        filterFunc={productData.filter((product) =>
          ["tops", "womens-shoes", "womens-bags"].includes(product.category)
        )}
        link={"/womens-fashion"}
        setCurrentProduct={setCurrentProduct}
        setIsViewProductOpen={setIsViewProductOpen}
      />
      <CategoryContainer
        title={"Health & Beauty"}
        filterFunc={productData.filter((product) =>
          ["fragrances", "beauty", "skin-care"].includes(product.category)
        )}
        link={"/health-beauty"}
        setCurrentProduct={setCurrentProduct}
        setIsViewProductOpen={setIsViewProductOpen}
      />
      <CategoryContainer
        title={"Home & Kitchen"}
        filterFunc={productData.filter(
          (product) => product.category === "kitchen-accessories"
        )}
        link={"/kitchen-equipment"}
        setCurrentProduct={setCurrentProduct}
        setIsViewProductOpen={setIsViewProductOpen}
      />

      <ItemGrid data={categories} title={"Categories"} />
      <Features features={features} />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Homepage;
