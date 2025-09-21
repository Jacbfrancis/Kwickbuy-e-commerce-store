import { useNavigate } from "react-router-dom";

function PaymentMethod({ paymentMethod, dispatchPaymentMethod }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fff] shadow-sm px-6 py-5 border-[#6cc6e73f] border-1 xl:rounded-xl">
      <div className="flex justify-between items-center pt-2 pb-12">
        <h2>Payment method</h2>

        <p className="text-[#3976c5]" onClick={() => navigate(-1)}>
          Go back
        </p>
      </div>
      <p>Select a payment method to proceed</p>
      <span className="w-[60%] px-4 py-3 my-4 border-1 border-[#69696933] rounded-lg flex justify-between items-center xl:w-[30%]">
        <input
          className="cursor-pointer"
          type="radio"
          checked={paymentMethod.cashOnDelivery}
          onChange={() => dispatchPaymentMethod({ type: "CASH_ON_DELIVERY" })}
        />
        <span className="w-[1.7rem] m-auto">
          <img src="/cash.png" alt="money_image" />
        </span>
        <p className="text-[0.8rem] font-light">Cash on Delivery</p>
      </span>

      <p>
        Pay via online{" "}
        <span className="text-[0.7rem]">(Faster & secure way to pay)</span>
      </p>

      <div className="flex flex-col my-4 justify-between items-start gap-3 xl:w-[80%] xl:flex-row">
        <span className="w-[60%] px-4 py-3 flex justify-between items-center xl:w-[25%]">
          <input
            className="cursor-pointer"
            type="radio"
            checked={paymentMethod.stripe}
            onChange={() => dispatchPaymentMethod({ type: "STRIPE" })}
          />
          <span className="w-[2rem] h-[1rem] m-auto">
            <img src="/stripe.png" alt="stripe_logo" />
          </span>
          <p className="text-[0.8rem] font-light">Stripe</p>
        </span>
        <span className="w-[60%] px-4 py-3 flex justify-between items-center xl:w-[25%]">
          <input
            className="cursor-pointer"
            type="radio"
            checked={paymentMethod.commerz}
            onChange={() => dispatchPaymentMethod({ type: "COMMERZ" })}
          />
          <span className="w-[2rem] h-[1rem] m-auto">
            <img src="/ssl_com.png" alt="stripe_logo" />
          </span>
          <p className="text-[0.8rem] font-light">Ssl commerz</p>
        </span>
      </div>
    </div>
  );
}

export default PaymentMethod;
