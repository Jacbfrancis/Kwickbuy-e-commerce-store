import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShoppingCart from "../components/ShoppingCart";

function ShoppingCartPage({
  cart,
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
      <ShoppingCart features={features} cart={cart} />

      <Footer />
    </div>
  );
}

export default ShoppingCartPage;
