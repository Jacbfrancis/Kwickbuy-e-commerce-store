import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Login from "./auth/Login";

function LoginPage({
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
        cart={cart}
        brands={brands}
        categories={categories}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
      />
      <Login />
      <Features features={features} />
      <Footer />
    </div>
  );
}

export default LoginPage;
