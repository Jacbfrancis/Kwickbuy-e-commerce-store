import { useReducer, useState } from "react";
import PaymentMethod from "./PaymentMethod";
import TotalAmount from "./TotalAmount";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setItem } from "./LocalStorage";

function reduce(paymentMethod, action) {
  switch (action.type) {
    case "CASH_ON_DELIVERY":
      return {
        cashOnDelivery: true,
        stripe: false,
        commerz: false,
      };

    case "STRIPE":
      return {
        cashOnDelivery: false,
        stripe: true,
        commerz: false,
      };

    case "COMMERZ":
      return {
        cashOnDelivery: false,
        stripe: false,
        commerz: true,
      };

    default:
      return paymentMethod;
  }
}

function Payment({ features, cart }) {
  const [paymentMethod, dispatchPaymentMethod] = useReducer(reduce, {
    cashOnDelivery: false,
    stripe: false,
    commerz: false,
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const Subtotal = cart.reduce((acc, item) => {
    return acc + item.quantityState * item.price;
  }, 0);

  function handleCheckout() {
    setError("");

    if (
      !paymentMethod.cashOnDelivery &&
      !paymentMethod.stripe &&
      !paymentMethod.commerz
    ) {
      setError("No payment Method was selected");
      toast.error("No payment Method was selected");
      return;
    }

    setItem("checkoutPayment", "true");
    navigate("/order-complete");
  }

  return (
    <div className="flex flex-col justify-between items-start xl:px-20 xl:flex-row">
      <Toaster position="top-right" reverseOrder={true} />
      <div className="w-full xl:w-[66%]">
        <h2 className="text-[1.2rem] font-medium p-6">Payment method</h2>
        <PaymentMethod
          paymentMethod={paymentMethod}
          dispatchPaymentMethod={dispatchPaymentMethod}
        />
      </div>

      <div className="w-full xl:w-[32%]">
        <TotalAmount
          cart={cart}
          features={features}
          Subtotal={Subtotal}
          error={error}
          handleCheckout={handleCheckout}
        />
      </div>
    </div>
  );
}

export default Payment;
