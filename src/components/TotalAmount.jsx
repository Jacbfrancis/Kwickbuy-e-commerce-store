import { Link } from "react-router-dom";

function TotalAmount({ cart, features, error, handleCheckout, Subtotal }) {
  return (
    <div className="bg-[#fff] w-full p-6 mt-8 border-[#6cc6e74b] border-1 rounded-xl">
      <ul className="text-[0.9rem] flex flex-col justify-center items-center">
        <li className="font-light my-1 flex justify-between items-center w-full">
          <p>Sub total</p>
          <span className="font-medium">${Subtotal}</span>
        </li>
        <li className="font-light my-1 flex justify-between items-center w-full">
          <p>Tax</p>
          <span className="font-medium">$0.00</span>
        </li>
        <li className="font-light my-1 flex justify-between items-center w-full">
          <p>Shipping</p>
          <span className="font-medium">${cart.length < 1 ? 0 : 29.36}</span>
        </li>
        <li className="font-light my-1 flex justify-between items-center w-full">
          <p>Discount on product</p>
          <span className="font-medium">- $0.00</span>
        </li>
        <hr className="w-full my-2 border-1 border-[#6969692a]" />
        <li className="font-light my-1 flex justify-between items-center w-full">
          <p className="text-[#1456ac]">Total</p>
          <span className="font-medium">
            ${(Subtotal + (cart.length < 1 ? 0 : 29.36)).toLocaleString()}
          </span>
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
      {error && <p className="text-red-500 text-center my-4">{error}</p>}
      <button
        className="bg-[#1456ac] text-[#fff] w-full rounded-lg py-3 my-4 cursor-pointer"
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </button>

      <Link to="/">
        <h3 className="text-[#1456ac] text-center py-2">
          Continue Shopping <span>&#x27F6;</span>
        </h3>
      </Link>
    </div>
  );
}

export default TotalAmount;
