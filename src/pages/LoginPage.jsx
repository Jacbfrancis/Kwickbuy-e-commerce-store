import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Login from "./auth/Login";

function LoginPage({
  user,
  cart,
  brands,
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
        brands={brands}
        categories={categories}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        setSearch={setSearch}
        search={search}
      />
      <Login />
      <Features features={features} />
      <Footer />
    </div>
  );
}

export default LoginPage;
