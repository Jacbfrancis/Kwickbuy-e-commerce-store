import { useEffect, useReducer, useState } from "react";
import "./App.css";
import useGetProducts from "./components/useGetProducts";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductPage from "./pages/ProductPage";
import LoadingSpinner from "./components/LoadingAnimation";
import useScrollToTop from "./components/useScrollToTop";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import { getItem, setItem } from "./components/LocalStorage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import useAuthStatus from "./hooks/useAuthStatus";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import ShippingAddressPage from "./pages/ShippingAddressPage";

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

const features = [
  {
    image: "/express-delivery.png",
    description: "Lightning Fast Delivery",
  },
  { image: "/credit-card.png", description: "Safe Payment" },
  { image: "/box.png", description: "7 Days Return Policy" },
  { image: "/original.png", description: "100% Authentic Products" },
];

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = cart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (existingItem) {
        return cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantityState:
                  item.quantityState + action.payload.quantityState,
              }
            : item
        );
      } else {
        return [...cart, action.payload];
      }
    }

    case "BUY_NOW":
      return [action.payload];

    case "UPDATE_CART":
      return cart
        .map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantityState: action.payload.quantityState }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantityState > 0);

    default:
      return cart;
  }
}

function App() {
  useScrollToTop();
  const { user, loadingAuth } = useAuthStatus();
  const [productData, error, loading] = useGetProducts();
  const [showMenu, setShowMenu] = useState(false);
  const [isViewProductOpen, setIsViewProductOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const [cart, dispatchCart] = useReducer(cartReducer, [], () => {
    const item = getItem("cart");
    return item ? item : [];
  });

  console.log(cart);

  useEffect(() => {
    setItem("cart", cart);
  }, [cart]);

  if (error) {
    return error.message;
  }

  if (loading || loadingAuth) {
    return (
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  // Get Brand and BrandCount
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

  const brands = getBrands.map((brand) => {
    if (brand.name === "undefined") {
      return { ...brand, name: "Kwickbuy" };
    }
    return brand;
  });

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
      "womens-shoes",
    ].includes(product.category)
  );

  // filter for health&beauty
  const healthAndBeauty = productData.filter((product) =>
    ["beauty", "fragrances", "skin-care"].includes(product.category)
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

  const categories = [
    {
      title: "Men's Fashion",
      icon: "/men_fashion.webp",
      link: "/mens-fashion",
      product: mensFashion,
      group: ["mens-shirts", "mens-shoes", "mens-watches", "sunglasses"],
    },
    {
      title: "Women's Fashion",
      icon: "/women_fashion.webp",
      link: "/womens-fashion",
      product: womensFashion,
      group: [
        "tops",
        "womens-watches",
        "womens-dresses",
        "womens-bags",
        "womens-jewellery",
        "womens-watches",
        "womens-shoes",
      ],
    },
    {
      title: "Health & Beauty",
      icon: "/health_beauty.webp",
      link: "/health-beauty",
      product: healthAndBeauty,
      group: ["beauty", "fragrances", "skin-care"],
    },
    {
      title: "Home Decoration",
      icon: "/baby_toys.webp",
      link: "/home-decoration",
      product: homeDecoration,
      group: ["furniture", "home-decoration"],
    },
    {
      title: "Food & Groceries",
      icon: "/pet_supplies.webp",
      link: "/food_groceries",
      product: foodAndGroceries,
      group: "groceries",
    },
    {
      title: "Kitchen Equipment",
      icon: "/home_kitchen.webp",
      link: "/kitchen-equipment",
      product: kitchenEquipment,
      group: "kitchen-accessories",
    },
    {
      title: "Automobiles",
      icon: "/kid_fashion.webp",
      link: "/automobiles",
      product: automobiles,
      group: ["motorcycle", "vehicle"],
    },
    {
      title: "Sports & Leisure",
      icon: "/sports_leisure.webp",
      link: "/sports-leisure",
      product: sportsAndLeisure,
      group: "sports-accessories",
    },
    {
      title: "Phones & Gadgets",
      icon: "/phones.webp",
      link: "/phones-gadgets",
      product: phonesAndGadgets,
      group: ["tablets", "smartphones", "mobile-accessories", "laptops"],
    },
  ];

  return (
    <div className="bg-[#fbfbfc]">
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              user={user}
              cart={cart}
              dispatchCart={dispatchCart}
              features={features}
              productData={productData}
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              currentProduct={currentProduct}
              setShowMenu={setShowMenu}
              flashSales={flashSales}
              featuredProducts={featuredProducts}
              isViewProductOpen={isViewProductOpen}
              setIsViewProductOpen={setIsViewProductOpen}
              setCurrentProduct={setCurrentProduct}
            />
          }
        />

        <Route
          path="/signup"
          element={
            <SignupPage
              cart={cart}
              brands={brands}
              categories={categories}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              features={features}
            />
          }
        />

        <Route
          path="/login"
          element={
            <LoginPage
              user={user}
              cart={cart}
              brands={brands}
              ccategories={categories}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              features={features}
            />
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <ProfilePage
                user={user}
                cart={cart}
                brands={brands}
                categories={categories}
                setShowMenu={setShowMenu}
                showMenu={showMenu}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/flashdeals"
          element={
            <ProductListingPage
              user={user}
              cart={cart}
              dispatchCart={dispatchCart}
              features={features}
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              products={flashSales}
              title={"FLash Deals"}
              currentProduct={currentProduct}
              setCurrentProduct={setCurrentProduct}
              isViewProductOpen={isViewProductOpen}
              setIsViewProductOpen={setIsViewProductOpen}
            />
          }
        />
        <Route
          path="/featured-products"
          element={
            <ProductListingPage
              user={user}
              cart={cart}
              dispatchCart={dispatchCart}
              features={features}
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              products={featuredProducts}
              title={"Featured Products"}
              currentProduct={currentProduct}
              setCurrentProduct={setCurrentProduct}
              isViewProductOpen={isViewProductOpen}
              setIsViewProductOpen={setIsViewProductOpen}
            />
          }
        />

        {categories.map((category) => (
          <Route
            path={category.link}
            element={
              <ProductListingPage
                user={user}
                cart={cart}
                dispatchCart={dispatchCart}
                features={features}
                categories={categories}
                brands={brands}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                products={category.product}
                title={category.title}
                currentProduct={currentProduct}
                isViewProductOpen={isViewProductOpen}
                setIsViewProductOpen={setIsViewProductOpen}
                setCurrentProduct={setCurrentProduct}
              />
            }
          />
        ))}

        <Route
          path="/product/:id"
          element={
            <ProductPage
              user={user}
              cart={cart}
              dispatchCart={dispatchCart}
              features={features}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              categories={categories}
              productData={productData}
              brands={brands}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <ShoppingCartPage
              user={user}
              cart={cart}
              dispatchCart={dispatchCart}
              categories={categories}
              brands={brands}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              features={features}
            />
          }
        />

        <Route
          path="/checkout-details"
          element={
            <ProtectedRoute user={user}>
              <ShippingAddressPage
                user={user}
                cart={cart}
                categories={categories}
                brands={brands}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                features={features}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
