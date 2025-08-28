import "./App.css";
import useGetProducts from "./components/useGetProducts";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import { useState } from "react";
import CategoryContainer from "./components/CategoryContainer";

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

const brands = [
  { name: "Featyr", products: 10 },
  { name: "Clearance", products: 34 },
  { name: "Dued Products", products: 5 },
  { name: "Flashy", products: 12 },
  { name: "Veyra", products: 6 },
  { name: "Aureon", products: 24 },
  { name: "Beyora", products: 11 },
  { name: "Lago", products: 12 },
];

function App() {
  const [productData, error, loading] = useGetProducts();
  const [showMenu, setShowMenu] = useState(false);

  // Get flashSales
  const flashSales = productData.filter((item) => item.discountPercentage > 19);

  // Get featuredProducts
  const featuredCategories = [
    ...new Set(productData?.map((item) => item.category)),
  ];
  const featuredProducts = featuredCategories.map((category) =>
    productData.find((product) => product.category === category)
  );

  return (
    <div className="bg-[#fbfbfc]">
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              productData={productData}
              error={error}
              loading={loading}
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              flashSales={flashSales}
              featuredProducts={featuredProducts}
            />
          }
        />
        <Route
          path="/flashdeals"
          element={
            <ProductPage
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              products={flashSales}
              title={"FLash Deals"}
            />
          }
        />

        <Route
          path="/featured-products"
          element={
            <ProductPage
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              products={featuredProducts}
              title={"Featured Products"}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
