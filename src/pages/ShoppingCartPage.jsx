import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShoppingCart from "../components/ShoppingCart";

function ShoppingCartPage({ categories, brands, showMenu, setShowMenu }) {
  return (
    <div>
      <Navbar
        categories={categories}
        brands={brands}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <ShoppingCart />

      <Footer />
    </div>
  );
}

export default ShoppingCartPage;
