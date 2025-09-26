import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShoppingCart from "../components/ShoppingCart";

function ShoppingCartPage({
  user,
  cart,
  dispatchCart,
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
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        setSearch={setSearch}
        search={search}
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
