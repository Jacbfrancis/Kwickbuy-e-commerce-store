import { useEffect } from "react";
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
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const checkoutPayment = getItem("checkoutPayment");

    if (!checkoutPayment) {
      navigate("/checkout-payment");
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
      />
      <Order />
      <Features features={features} />
      <Footer />
    </div>
  );
}

export default OrderCompletePage;
