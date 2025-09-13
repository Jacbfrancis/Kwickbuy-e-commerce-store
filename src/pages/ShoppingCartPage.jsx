import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShoppingCart from "../components/ShoppingCart";

function ShoppingCartPage({
  cart,
  dispatchCart,
  categories,
  brands,
  showMenu,
  setShowMenu,
  features,
}) {
  return (
    <div>
      <Navbar
        cart={cart}
        categories={categories}
        brands={brands}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <ShoppingCart
        features={features}
        cart={cart}
        dispatchCart={dispatchCart}
      />

      <Footer />
    </div>
  );
}

export default ShoppingCartPage;
