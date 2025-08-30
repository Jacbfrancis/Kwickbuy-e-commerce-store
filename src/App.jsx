import "./App.css";
import useGetProducts from "./components/useGetProducts";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import { useState } from "react";

const categories = [
  {
    title: "Men's Fashion",
    icon: "/men_fashion.webp",
    link: "/mens-fashion",
  },
  {
    title: "Women's Fashion",
    icon: "/women_fashion.webp",
    link: "/womens-fashion",
  },
  {
    title: "Health & Beauty",
    icon: "/health_beauty.webp",
    link: "/health-beauty",
  },
  {
    title: "Home Decoration",
    icon: "/baby_toys.webp",
    link: "/home-decoration",
  },
  {
    title: "Food & Groceries",
    icon: "/home_kitchen.webp",
    link: "/food-groceries",
  },
  {
    title: "Kitchen Equipment",
    icon: "/pet_supplies.webp",
    link: "/kitchen-equipment",
  },
  {
    title: "Automobiles",
    icon: "/kid_fashion.webp",
    link: "/automobiles",
  },
  {
    title: "Sports & Leisure",
    icon: "/sports_leisure.webp",
    link: "/sports-leisure",
  },
  {
    title: "Phones & Gadgets",
    icon: "/phones.webp",
    link: "/phones-gadgets",
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

// console.log([
//   "beauty",
//   "fragrances",
//   "furniture",
//   "groceries",
//   "home-decoration",
//   "kitchen-accessories",
//   "laptops",
//   "mens-shirts",
//   "mens-shoes",
//   "mens-watches",
//   "mobile-accessories",
//   "motorcycle",
//   "skin-care",
//   "smartphones",
//   "sports-accessories",
//   "sunglasses",
//   "tablets",
//   "tops",
//   "vehicle",
//   "womens-bags",
//   "womens-dresses",
//   "womens-jewellery",
//   "womens-shoes",
//   "womens-watches",
// ]);

function App() {
  const [productData, error, loading] = useGetProducts();
  const [showMenu, setShowMenu] = useState(false);

  // filter for flashSales
  const flashSales = productData.filter((item) => item.discountPercentage > 19);

  // filter for featuredProducts
  const featuredCategories = [
    ...new Set(productData?.map((item) => item.category)),
  ];
  const featuredProducts = featuredCategories.map((category) =>
    productData.find((product) => product.category === category)
  );

  // filter for mensFashion
  const mensFashion = productData.filter((product) =>
    ["mens-shirts", "mens-shoes", "mens-watches", "sunglasses"].includes(
      product.category
    )
  );

  // filter for womensFashion
  const womensFashion = productData.filter((product) =>
    [
      "tops",
      "womens-watches",
      "womens-dresses",
      "womens-bags",
      "womens-jewellery",
      "womens-watches",
    ].includes(product.category)
  );

  // filter for health&beauty
  const healthAndBeauty = productData.filter((product) =>
    ["beauty", "fragrances", "skin-care", ""].includes(product.category)
  );

  //filter for food&groceries
  const foodAndGroceries = productData.filter(
    (product) => product.category === "groceries"
  );

  //filter for homeDecoration
  const homeDecoration = productData.filter((product) =>
    ["furniture", "home-decoration"].includes(product.category)
  );

  //filter for kitchenEquipment
  const kitchenEquipment = productData.filter(
    (product) => product.category === "kitchen-accessories"
  );

  //filter for sports&leisure
  const sportsAndLeisure = productData.filter(
    (product) => product.category === "sports-accessories"
  );

  // filter for phones&Gadgets
  const phonesAndGadgets = productData.filter((product) =>
    ["tablets", "smartphones", "mobile-accessories", "laptops"].includes(
      product.category
    )
  );

  // filter for automobiles
  const automobiles = productData.filter((product) =>
    ["motorcycle", "vehicle"].includes(product.category)
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
        <Route
          path="/mens-fashion"
          element={
            <ProductPage
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              products={mensFashion}
              title={"Men's Fashion"}
            />
          }
        />
        <Route
          path="/womens-fashion"
          element={
            <ProductPage
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              products={womensFashion}
              title={"Women's Fashion"}
            />
          }
        />
        <Route
          path="/health-beauty"
          element={
            <ProductPage
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              products={healthAndBeauty}
              title={"Health & Beauty"}
            />
          }
        />
        <Route
          path="/food-groceries"
          element={
            <ProductPage
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              products={foodAndGroceries}
              title={"Food & Groceries"}
            />
          }
        />

        <Route
          path="/home-decoration"
          element={
            <ProductPage
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              products={homeDecoration}
              title={"Home Decoration"}
            />
          }
        />

        <Route
          path="/kitchen-equipment"
          element={
            <ProductPage
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              products={kitchenEquipment}
              title={"kitchen Equipment"}
            />
          }
        />
        <Route
          path="/phones-gadgets"
          element={
            <ProductPage
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              products={phonesAndGadgets}
              title={"Phones & Gadgets"}
            />
          }
        />
        <Route
          path="/sports-leisure"
          element={
            <ProductPage
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              products={sportsAndLeisure}
              title={"Sports & Leisure"}
            />
          }
        />
        <Route
          path="/automobiles"
          element={
            <ProductPage
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              products={automobiles}
              title={"Automobiles"}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
