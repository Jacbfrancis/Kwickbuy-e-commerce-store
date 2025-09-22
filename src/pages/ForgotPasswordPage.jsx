import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ForgotPassword from "./auth/ForgotPassword";
import Login from "./auth/Login";

function ForgotPasswordPage({
  user,
  cart,
  brands,
  categories,
  showMenu,
  setShowMenu,
  features,
}) {
  return (
    <div>
      <Navbar
        user={user}
        cart={cart}
        brands={brands}
        categories={categories}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
      />
      <ForgotPassword />
      <Features features={features} />
      <Footer />
    </div>
  );
}

export default ForgotPasswordPage;
