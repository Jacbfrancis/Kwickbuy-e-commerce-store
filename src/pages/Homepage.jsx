import { useState } from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FlashDeal from "../components/FlashDeal";
import FeaturedProducts from "../components/FeaturedProducts";
import ItemGrid from "../components/ItemGrid";
import Banner from "../components/banner";

import gadgetsBanner from "/gadgets_banner.webp";
import CategoryContainer from "../components/CategoryContainer";

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

  return (
    <div>
      <Navbar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        categories={categories}
      />
      <Header showMenu={showMenu} categories={categories} />
      <FlashDeal productData={productData} error={error} loading={loading} />
      <FeaturedProducts
        productData={productData}
        error={error}
        loading={loading}
      />
      <ItemGrid categories={categories} />
      <Banner banner={gadgetsBanner} />
      <CategoryContainer
        productData={productData}
        error={error}
        loading={loading}
      />
    </div>
  );
}

export default Homepage;
