import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Payment from "../components/Payment";

function PaymentPage({
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

      <Payment features={features} cart={cart} />

      <Footer />
    </div>
  );
}

export default PaymentPage;
