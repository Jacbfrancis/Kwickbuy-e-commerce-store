import { useState } from "react";
import Address from "./Address";
import TotalAmount from "./TotalAmount";

function Checkout({ cart, features }) {
  const [showBillingForm, setShowBillingForm] = useState(true);

  return (
    <div className="flex flex-col justify-between items-start xl:px-20 xl:flex-row">
      <div className="xl:w-[66%]">
        <h2 className="text-[1.2rem] font-medium p-6">Shipping Address</h2>
        <Address />
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
        {!showBillingForm && <Address title={"Billing Address"} />}
      </div>

      <div className="w-full xl:w-[32%] xl:mt-20">
        <TotalAmount cart={cart} features={features} />
      </div>
    </div>
  );
}

export default Checkout;
