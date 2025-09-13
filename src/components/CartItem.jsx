import { FontAwesomeIcon } from "./font-awesome";

function CartItem({ cart }) {
  console.log(cart);

  return cart.length >= 1 ? (
    cart.map((cartItem) => (
      <div
        key={cartItem.id}
        className="flex justify-start items-center mb-10 xl:mb-6"
      >
        <input type="checkbox" />
        <div className="flex justify-between items-center xl:grid xl:grid-cols-[40%_repeat(3,_1fr)] xl:gap-4 xl:ml-4">
          <div className="flex justify-start items-center w-[80%]">
            <div className="w-[22%] border-1 border-[#6cc6e73f] rounded-lg m-auto">
              <img
                className="w-full"
                src={cartItem.thumbnail}
                alt="product_img"
              />
            </div>
            <div className="text-[0.8rem] font-normal w-[61%] xl:font-semibold xl:text-[0.9rem]">
              <p>{cartItem.title}</p>
              <p className="xl:hidden">
                <span className="font-light">Unit price: </span>$
                {cartItem.price.toLocaleString()}
              </p>
              <p className="xl:hidden">
                <span className="font-light">Total: </span>$
                {cartItem.price.toLocaleString()}
              </p>
              <p className="xl:hidden">
                <span className="font-light">Shipping Cost: </span>$20.00
              </p>
            </div>
          </div>
          <div className="hidden text-center xl:block">
            <h3>${cartItem.price.toLocaleString()}</h3>
          </div>
          <div className="flex flex-col justify-center items-center xl:flex-row-reverse xl:gap-5 w-[15%] xl:w-auto">
            <button>+</button>

            <input
              className="bg-[#f3f5f9] w-full m-auto my-3 py-1.5 text-center border-1 border-[#6cc6e73f] rounded-lg focus:outline-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              value={cartItem.quantityState}
            />
            <button>
              {cartItem.quantityState > 1 ? (
                "-"
              ) : (
                <FontAwesomeIcon
                  className="text-red-500"
                  icon="fa-solid fa-trash"
                />
              )}
            </button>
          </div>
          <div className="hidden text-center xl:block">
            <h3>${cartItem.price.toLocaleString()}</h3>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="text-center p-13 w-full">
      <img
        className="m-auto"
        src="/public/empty-cart.svg"
        alt="emptycart_image"
      />
      <p className="text-[#aeaeae] tracking-wide mt-5">
        Your cart is empty! We have a great selection of items, so why not take
        a look and find something you love?
      </p>
    </div>
  );

  // <div className="flex justify-start items-center mb-10 xl:mb-6">
  //   <input type="checkbox" />
  //   <div className="flex justify-between items-center xl:grid xl:grid-cols-[40%_repeat(3,_1fr)] xl:gap-4 xl:ml-4">
  //     <div className="flex justify-start items-center w-[80%]">
  //       <div className="w-[22%] border-1 border-[#6cc6e73f] rounded-lg m-auto">
  //         <img
  //           className="w-full"
  //           src="https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp"
  //           alt="product_img"
  //         />
  //       </div>
  //       <div className="text-[0.8rem] font-normal w-[61%] xl:font-semibold xl:text-[0.9rem]">
  //         <p>Apple Watch Series 4 Gold </p>
  //         <p className="xl:hidden">
  //           <span className="font-light">Unit price: </span>$32.00
  //         </p>
  //         <p className="xl:hidden">
  //           <span className="font-light">Total: </span>$32.00
  //         </p>
  //         <p className="xl:hidden">
  //           <span className="font-light">Shipping Cost: </span>$20.00
  //         </p>
  //       </div>
  //     </div>
  //     <div className="hidden text-center xl:block">
  //       <h3>$35.00</h3>
  //     </div>
  //     <div className="flex flex-col justify-center items-center xl:flex-row xl:gap-5 w-[15%] xl:w-auto">
  //       <button>+</button>
  //       <input
  //         className="bg-[#f3f5f9] w-full m-auto my-3 py-1.5 text-center border-1 border-[#6cc6e73f] rounded-lg focus:outline-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
  //         type="number"
  //         value={quantity}
  //         onChange={(e) => setQuantity(e.target.value)}
  //       />
  //       <button>
  //         {quantity > 1 ? (
  //           "-"
  //         ) : (
  //           <FontAwesomeIcon
  //             className="text-red-500"
  //             icon="fa-solid fa-trash"
  //           />
  //         )}
  //       </button>
  //     </div>
  //     <div className="hidden text-center xl:block">
  //       <h3>$35.00</h3>
  //     </div>
  //   </div>
  // </div>
}

export default CartItem;
