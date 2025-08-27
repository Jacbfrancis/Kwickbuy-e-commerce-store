import Hompage from "./pages/Homepage";
import "./App.css";
import useGetProducts from "./components/useGetProducts";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FlashDealsPage from "./pages/FlashDealsPage";
import { useState } from "react";

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

  const flashSales = productData.filter((item) => item.discountPercentage > 19);

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
            />
          }
        />
        <Route
          path="/flashdeals"
          element={
            <FlashDealsPage
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              flashSales={flashSales}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
