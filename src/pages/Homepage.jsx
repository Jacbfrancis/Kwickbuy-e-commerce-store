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
    return <LoadingSpinner />;
  }

  const selectedIndexes = [2, 13, 12, 5, 3, 11];
  const smartPhones = productData.filter(
    (product) => product.category === "smartphones"
  );
  const selectedPhones = selectedIndexes.map((index) => smartPhones[index]);

  const mensFashion = productData.filter((product) =>
    ["mens-shirts", "mens-shoes", "mens-watches"].includes(product.category)
  );
  const selectedMensFashion = selectedIndexes.map(
    (index) => mensFashion[index]
  );

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
      <Banner banner={"/gadgets_banner.webp"} />
      <CategoryContainer
        categoryItems={selectedPhones}
        title={"Phones & Gadgets"}
      />
      <CategoryContainer
        categoryItems={selectedMensFashion}
        title={"Men's Fashion"}
      />
      '
    </div>
  );
}

export default Homepage;
