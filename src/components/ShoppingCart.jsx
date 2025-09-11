import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function ShoppingCart() {
  return (
    <div className="xl:px-20">
      <h2 className="text-[1.1rem] py-4 text-center font-semibold tracking-wider xl:text-left">
        Shopping Cart
      </h2>
      <div className="flex flex-col justify-center items-center xl:flex-row">
        <div className="w-full">
          {/* <div className="bg-[#f3f5f9] hidden justify-around items-center py-2 xl:flex">
            <h4>Product</h4> <h4>Unit Price</h4> <h4>Qty</h4> <h4>Total</h4>
          </div> */}
          <div className="bg-[#fff] shadow-sm px-6 py-4 xl:border-[#6cc6e73f] xl:border-1 xl:rounded-xl">
            <span>
              {/* <h4 className="hidden xl:block">Total shipping cost : $0.00 </h4> */}
            </span>
            <hr className="hidden" />
            <p className="text-center text-[0.8rem] font-normal">
              Total shipping cost: $20.00
            </p>
            <CartItem />
            <CartItem />
          </div>

          <div className="bg-[#fbfbfc] px-6 py-5">
            <h4 className="text-[0.95rem]">Order Note (Optional)</h4>
            <textarea className="bg-[#fff] w-full h-[6rem] border-[#6cc6e73f] border-2 rounded-lg mt-4 px-4 py-2 focus:outline-0"></textarea>
          </div>
        </div>

        <div className="w-full p-6 border-[#6cc6e74b] border-2 rounded-xl">
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
          <button className="bg-[#1456ac] text-[#fff] w-full rounded-lg py-3 my-4">
            Proceed to Checkout
          </button>

          <Link to="/">
            <h3 className="text-[#1456ac] text-center py-2">
              Continue Shopping
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
