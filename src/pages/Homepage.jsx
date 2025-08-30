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

  // get an array of vendors details
  // const vendors = productData
  //   .map((vendor) => ({
  //     vendorID: vendor.vendorID,
  //     vendorName: vendor.vendorName,
  //     vendorLogo: vendor.vendorLogo,
  //   }))
  //   .filter(
  //     (vendor, index, arr) =>
  //       index ===
  //       arr.findIndex(
  //         (o) =>
  //           o.vendorID === vendor.vendorID &&
  //           o.vendorName === vendor.vendorName &&
  //           o.Logo === vendor.Logo
  //       )
  //   );

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
      />
      <CategoryContainer
        title={"Men's Fashion"}
        filterFunc={productData.filter((product) =>
          ["mens-shirts", "mens-shoes", "mens-watches"].includes(
            product.category
          )
        )}
      />
      <CategoryContainer
        title={"Women's Fashion"}
        filterFunc={productData.filter((product) =>
          ["tops", "womens-shoes", "womens-bags"].includes(product.category)
        )}
      />
      <CategoryContainer
        title={"Health & Beauty"}
        filterFunc={productData.filter((product) =>
          ["fragrances", "beauty", "skin-care"].includes(product.category)
        )}
      />
      <CategoryContainer
        title={"Home & Kitchen"}
        filterFunc={productData.filter(
          (product) => product.category === "kitchen-accessories"
        )}
      />

      <ItemGrid data={categories} title={"Categories"} />
      <Features />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Homepage;
