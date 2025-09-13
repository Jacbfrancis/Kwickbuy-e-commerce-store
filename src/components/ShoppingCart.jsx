import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function ShoppingCart({ features, cart }) {
  //console.log(cart);
  return (
    <div className="xl:px-20">
      <h2 className="text-[1.1rem] py-9 text-center font-semibold tracking-wider xl:text-left">
        Shopping Cart
      </h2>

      <div className="flex flex-col justify-between items-start xl:flex-row">
        <div className="w-full xl:w-[66%]">
          <div className="bg-[#f3f5f9] text-[0.85rem] hidden grid-cols-[40%_repeat(3,_1fr)] gap-4 px-6 py-4 mb-8 mt-2 rounded xl:grid">
            <h4>Product</h4> <h4>Unit Price</h4> <h4>Qty</h4> <h4>Total</h4>
          </div>

          <div className="bg-[#fff] shadow-sm px-6 py-4 xl:border-[#6cc6e73f] xl:border-1 xl:rounded-xl">
            {cart.length >= 1 && (
              <>
                <hr className="hidden" />

                <p className="text-center text-[0.8rem] tracking-wide font-normal my-4 xl:text-right xl:text-[0.9rem] xl:font-semibold xl:mb-4 xl:mt-1">
                  Total shipping cost: $20.00
                </p>
              </>
            )}

            <hr className="hidden border-[#6cc6e74b] mb-8 xl:block" />
            <CartItem cart={cart} />
          </div>

          <div className="bg-[#fbfbfc] px-6 py-5 xl:px-0">
            <h4 className="text-[0.95rem]">Order Note (Optional)</h4>
            <textarea className="bg-[#fff] w-full h-[5rem] border-[#6cc6e73f] border-2 rounded-lg mt-4 px-4 py-2 focus:outline-0"></textarea>
          </div>
        </div>

        <div className="bg-[#fff] w-full p-6 border-[#6cc6e74b] border-1 rounded-xl xl:w-[32%]">
          <ul className="text-[0.9rem] flex flex-col justify-center items-center">
            <li className="font-light my-1 flex justify-between items-center w-full">
              <p>Sub total</p>
              <span className="font-medium">$32.00</span>
            </li>
            <li className="font-light my-1 flex justify-between items-center w-full">
              <p>Tax</p>
              <span className="font-medium">$0.00</span>
            </li>
            <li className="font-light my-1 flex justify-between items-center w-full">
              <p>Shipping</p>
              <span className="font-medium">$10.00</span>
            </li>
            <li className="font-light my-1 flex justify-between items-center w-full">
              <p>Discount on product</p>
              <span className="font-medium">- $0.00</span>
            </li>
            <hr className="w-full my-2 border-1 border-[#6969692a]" />
            <li className="font-light my-1 flex justify-between items-center w-full">
              <p className="text-[#1456ac]">Total</p>
              <span className="font-medium">$42.00</span>
            </li>
          </ul>
          <div className="hidden w-full justify-around items-start xl:flex">
            {features.map((feature, index) => (
              <div key={index} className="w-[20%] m-auto py-4">
                <span className="w-[55%] p-2 mt-4 mb-5 border-1 border-[#6969692a] rounded-[100%] block">
                  <img src={feature.image} alt={feature.image} />
                </span>
                <p className="text-[0.7rem]">{feature.description}</p>
              </div>
            ))}
          </div>
          <button className="bg-[#1456ac] text-[#fff] w-full rounded-lg py-3 my-4">
            Proceed to Checkout
          </button>

          <Link to="/">
            <h3 className="text-[#1456ac] text-center py-2">
              Continue Shopping <span>&#x27F6;</span>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
