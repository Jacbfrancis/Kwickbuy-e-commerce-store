import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ForgotPassword from "./auth/ForgotPassword";
import Login from "./auth/Login";

function ForgotPasswordPage({
  user,
  cart,
  categories,
  showMenu,
  setShowMenu,
  features,
  setSearch,
  search,
}) {
  return (
    <div>
      <Navbar
        user={user}
        cart={cart}
        categories={categories}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        setSearch={setSearch}
        search={search}
      />
      <ForgotPassword />
      <Features features={features} />
      <Footer />
    </div>
  );
}

export default ForgotPasswordPage;
