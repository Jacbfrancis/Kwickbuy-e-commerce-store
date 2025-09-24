import { useEffect, useState } from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Order from "../components/Order";
import { useNavigate } from "react-router-dom";
import { getItem } from "../components/LocalStorage";

function OrderCompletePage({
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
  const [authorized, setAuthorized] = useState(() => {
    return getItem("checkoutPayment");
  });

  useEffect(() => {
    if (!authorized) {
      navigate("/checkout-payment");
    } else {
      setAuthorized(true);
      localStorage.removeItem("checkoutPayment");
      localStorage.removeItem("checkoutAddress");
    }
  }, [navigate, authorized]);

  if (!authorized) return null;

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
      <Order />
      <Features features={features} />
      <Footer />
    </div>
  );
}

export default OrderCompletePage;
