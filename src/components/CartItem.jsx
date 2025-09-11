import { useState } from "react";
import { FontAwesomeIcon } from "./font-awesome";

function CartItem() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex justify-start items-center mb-10">
      <input type="checkbox" />
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center w-[80%]">
          <div className="w-[22%] border-1 border-[#6cc6e73f] rounded-lg m-auto">
            <img
              className="w-full"
              src="https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp"
              alt="product_img"
            />
          </div>
          <div className="text-[0.8rem] font-normal w-[67%]">
            <p>
              {"Apple Watch Series 4 Gold".substring(0, 20)}
              ...
            </p>
            <p>
              <span className="font-light">Unit price: </span>$32.00
            </p>
            <p>
              <span className="font-light">Total: </span>$32.00
            </p>
            <p>
              <span className="font-light">Shipping Cost: </span>$20.00
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[15%]">
          <button>+</button>
          <input
            className="bg-[#f3f5f9] w-full m-auto my-3 py-2 text-center border-1 border-[#6cc6e73f] rounded-lg focus:outline-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <button>
            {quantity > 1 ? (
              "-"
            ) : (
              <FontAwesomeIcon
                className="text-red-500"
                icon="fa-solid fa-trash"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
