import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Payment from "../components/Payment";
import { getItem } from "../components/LocalStorage";
import { useNavigate } from "react-router-dom";

function PaymentPage({
  user,
  cart,
  showMenu,
  setShowMenu,
  categories,
  brands,
  features,
  setSearch,
  search,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const checkoutAddress = getItem("checkoutAddress");

    if (!checkoutAddress) {
      navigate("/checkout-details");
    }
  }, [navigate]);

  return (
    <div>
      <Navbar
        user={user}
        cart={cart}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        categories={categories}
        brands={brands}
        setSearch={setSearch}
        search={search}
      />

      <Payment features={features} cart={cart} />

      <Footer />
    </div>
  );
}

export default PaymentPage;
