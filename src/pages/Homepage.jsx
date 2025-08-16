import { useState } from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FlashDeal from "../components/FlashDeal";
import FeaturedProducts from "../components/FeaturedProducts";
import ItemGrid from "../components/ItemGrid";
import Banner from "../components/Banner";
import CategoryContainer from "../components/CategoryContainer";
import LoadingSpinner from "../components/LoadingAnimation";

const categories = [
  {
    title: "Men's Fashion",
    icon: "/men_fashion.webp",
  },
  {
    title: "Women's Fashion",
    icon: "/women_fashion.webp",
  },
  {
    title: "Kid's Fashion",
    icon: "/kid_fashion.webp",
  },
  {
    title: "Health & Beauty",
    icon: "/health_beauty.webp",
  },
  {
    title: "Pet Supplies",
    icon: "/pet_supplies.webp",
  },
  {
    title: "Home & Kitchen",
    icon: "/home_kitchen.webp",
  },
  {
    title: "Baby & Toys",
    icon: "/baby_toys.webp",
  },
  {
    title: "Sports & Leisure",
    icon: "/sports_leisure.webp",
  },
  {
    title: "Phones & Gadgets",
    icon: "/phones.webp",
  },
];

function Homepage({ productData, error, loading }) {
  const [showMenu, setShowMenu] = useState(false);

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

  console.log(productData);

  return (
    <div>
      <Navbar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        categories={categories}
      />
      <Header showMenu={showMenu} categories={categories} />
      <FlashDeal productData={productData} />
      <FeaturedProducts productData={productData} />
      <ItemGrid categories={categories} />
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
      <Banner banner={"/kitchen_banner.jpg"} />
      <CategoryContainer
        title={"Home & Kitchen"}
        filterFunc={productData.filter((product) =>
          ["kitchen-accessories", "home-decoration"].includes(product.category)
        )}
      />
    </div>
  );
}

export default Homepage;
