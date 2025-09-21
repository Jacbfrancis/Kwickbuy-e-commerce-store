import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Address from "./Address";
import TotalAmount from "./TotalAmount";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, features }) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [showBillingForm, setShowBillingForm] = useState(true);
  const [shippingAddressForm, setShippingAddressForm] = useState({
    contactName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const Subtotal = cart.reduce((acc, item) => {
    return acc + item.quantityState * item.price;
  }, 0);

  function handleCheckout() {
    setError("");

    // Handle empty input fields for shipping address form
    if (
      !shippingAddressForm.phone ||
      !shippingAddressForm.contactName ||
      !shippingAddressForm.email ||
      !shippingAddressForm.address ||
      !shippingAddressForm.city ||
      !shippingAddressForm.zipCode
    ) {
      setError("All required fields must be filled out.");
      toast.error("All required fields must be filled out.");
      return;
    }

    if (Subtotal < 1) {
      setError("you don't have any items in your cart");
      toast.error("you don't have any items in your cart");
      return;
    }

    navigate("/checkout-payment");
  }

  return (
    <div className="flex flex-col justify-between items-start xl:px-20 xl:flex-row">
      <Toaster position="top-right" reverseOrder={true} />

      <div className="xl:w-[66%]">
        <h2 className="text-[1.2rem] font-medium p-6">Shipping Address</h2>

        <Address form={shippingAddressForm} setForm={setShippingAddressForm} />

        <div className="flex justify-between items-center">
          <h2 className="text-[1.2rem] font-medium p-6">Billing Address</h2>
          <span className="flex justify-center items-center">
            <input
              type="checkbox"
              checked={showBillingForm}
              onChange={() => setShowBillingForm((prev) => !prev)}
            />
            <p className="text-[0.8rem] px-1.5">Same as shipping Address</p>
          </span>
        </div>
        {!showBillingForm && <Address />}
      </div>

      <div className="w-full xl:w-[32%] xl:mt-20">
        <TotalAmount
          cart={cart}
          setError={setError}
          handleCheckout={handleCheckout}
          error={error}
          features={features}
          Subtotal={Subtotal}
        />
      </div>
    </div>
  );
}

export default Checkout;
