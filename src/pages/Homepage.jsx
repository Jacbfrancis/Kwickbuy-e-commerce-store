import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FlashDeal from "../components/FlashDeal";
import FeaturedProducts from "../components/FeaturedProducts";
import ItemGrid from "../components/ItemGrid";
import Banner from "../components/Banner";
import CategoryContainer from "../components/CategoryContainer";
import LoadingSpinner from "../components/LoadingAnimation";
import Features from "../components/Features";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

function Homepage({
  productData,
  error,
  loading,
  categories,
  brands,
  showMenu,
  setShowMenu,
  flashSales,
  featuredProducts,
}) {
  if (error) {
    return error.message;
  }

  if (loading) {
    return (
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      <Navbar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        categories={categories}
        brands={brands}
      />
      <Header showMenu={showMenu} categories={categories} />
      <FlashDeal flashSales={flashSales} />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <ItemGrid data={categories} title={"Categories"} />
      <Banner banner={"/gadgets_banner.webp"} />
      <CategoryContainer
        title={"Phones & Gadgets"}
        filterFunc={productData.filter(
          (product) => product.category === "smartphones"
        )}
        link={"/phones-gadgets"}
      />
      <CategoryContainer
        title={"Men's Fashion"}
        filterFunc={productData.filter((product) =>
          ["mens-shirts", "mens-shoes", "mens-watches"].includes(
            product.category
          )
        )}
        link={"/mens-fashion"}
      />
      <CategoryContainer
        title={"Women's Fashion"}
        filterFunc={productData.filter((product) =>
          ["tops", "womens-shoes", "womens-bags"].includes(product.category)
        )}
        link={"/womens-fashion"}
      />
      <CategoryContainer
        title={"Health & Beauty"}
        filterFunc={productData.filter((product) =>
          ["fragrances", "beauty", "skin-care"].includes(product.category)
        )}
        link={"/health-beauty"}
      />
      <CategoryContainer
        title={"Home & Kitchen"}
        filterFunc={productData.filter(
          (product) => product.category === "kitchen-accessories"
        )}
        link={"/kitchen-equipment"}
      />

      <ItemGrid data={categories} title={"Categories"} />
      <Features />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Homepage;
