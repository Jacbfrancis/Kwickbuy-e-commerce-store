import "./App.css";
import useGetProducts from "./components/useGetProducts";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import { useState } from "react";

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

  // Get Brand and Brand count
  const brandCount = productData.reduce((acc, item) => {
    const brand = item.brand;
    acc[brand] = (acc[brand] || 0) + 1;
    return acc;
  }, {});

  const brandNames = Object.keys(brandCount);

  const getBrands = brandNames.map((name) => {
    return {
      name: name,
      count: brandCount[name],
    };
  });
  const brands = getBrands.filter((brand) => brand.name !== "undefined");

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
  const petSupplies = productData.filter(
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

  const categories = [
    {
      title: "Men's Fashion",
      icon: "/men_fashion.webp",
      link: "/mens-fashion",
      product: mensFashion,
    },
    {
      title: "Women's Fashion",
      icon: "/women_fashion.webp",
      link: "/womens-fashion",
      product: womensFashion,
    },
    {
      title: "Health & Beauty",
      icon: "/health_beauty.webp",
      link: "/health-beauty",
      product: healthAndBeauty,
    },
    {
      title: "Home Decoration",
      icon: "/baby_toys.webp",
      link: "/home-decoration",
      product: homeDecoration,
    },
    {
      title: "Pet Supplies",
      icon: "/pet_supplies.webp",
      link: "/pet-supplies",
      product: petSupplies,
    },
    {
      title: "Kitchen Equipment",
      icon: "/home_kitchen.webp",
      link: "/kitchen-equipment",
      product: kitchenEquipment,
    },
    {
      title: "Automobiles",
      icon: "/kid_fashion.webp",
      link: "/automobiles",
      product: automobiles,
    },
    {
      title: "Sports & Leisure",
      icon: "/sports_leisure.webp",
      link: "/sports-leisure",
      product: sportsAndLeisure,
    },
    {
      title: "Phones & Gadgets",
      icon: "/phones.webp",
      link: "/phones-gadgets",
      product: phonesAndGadgets,
    },
  ];

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

        {categories.map((category) => (
          <Route
            path={category.link}
            element={
              <ProductPage
                categories={categories}
                brands={brands}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                products={category.product}
                title={category.title}
              />
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
