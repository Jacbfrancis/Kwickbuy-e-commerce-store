import Checkout from "../components/Checkout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../components/Features";

function ShippingAddressPage({
  user,
  cart,
  showMenu,
  setShowMenu,
  categories,
  brands,
  features,
}) {
  return (
    <div>
      <Navbar
        user={user}
        cart={cart}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        categories={categories}
        brands={brands}
      />

      <Checkout features={features} cart={cart} />

      <Footer />
    </div>
  );
}

export default ShippingAddressPage;
