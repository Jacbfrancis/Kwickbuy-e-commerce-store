import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShoppingCart from "../components/ShoppingCart";

function ShoppingCartPage({
  categories,
  brands,
  showMenu,
  setShowMenu,
  features,
}) {
  return (
    <div>
      <Navbar
        categories={categories}
        brands={brands}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <ShoppingCart features={features} />

      <Footer />
    </div>
  );
}

export default ShoppingCartPage;
