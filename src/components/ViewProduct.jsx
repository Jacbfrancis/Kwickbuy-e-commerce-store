import { FontAwesomeIcon } from "./font-awesome";

function ViewProduct({ setIsViewProductOpen }) {
  return (
    <div className="bg-[#121212bf] h-[100vh] w-[100%] absolute z-70">
      <div className="bg-[#fff] text-[1.35rem] w-[80%] py-4 rounded-xl mx-auto mt-30">
        <div className="hidden justify-between items-center border-b-1 border-[#69696941] py-2 xl:flex">
          <h1 className="pl-8">Apple MacBook Pro 14 Inch Space Grey</h1>
          <FontAwesomeIcon
            className="pr-8"
            icon="fa-solid fa-xmark"
            onClick={() => setIsViewProductOpen(false)}
          />
        </div>

        <div className="flex justify-between items-center p-8">
          <div className="w-[42%] border-1 rounded-md border-[#6cc6e73f]">
            <img
              className="w-[80%] h-[21rem]  m-auto"
              src="https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp"
              alt="product_image"
            />
          </div>

          <div className="w-[57%] h-[21rem] border-1 rounded-md border-[#6cc6e73f] p-4">
            <h2>Apple MacBook Pro 14 Inch Space Grey</h2>
            <p className="text-[#1456ac] font-bold mt-3">$1,999.00</p>
            <div className="font-semibold flex justify-start items-center my-6.5">
              <h3 className="text-[1.2rem] mr-3">Quantity: </h3>
              <div className="text-[#3976c5] border-1 border-[#3976c5] w-[7rem] rounded-md flex justify-center items-center">
                <button className="px-2 cursor-pointer">-</button>
                <input
                  className="text-[#000] focus:outline-0 text-center font-light text-[0.95rem] border-0 px-0 py-1.5 w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  type="number"
                  placeholder="1"
                />
                <button className="px-2 cursor-pointer">+</button>
              </div>
            </div>
            <h3 className="text-[1.2rem] font-semibold">
              Total price :
              <span className="text-[#1456ac] text-[1rem] ml-3">
                {"$1,999.00"}
              </span>
            </h3>
            <span className="flex justify-start items-center gap-3 mt-6.5">
              <button className="bg-[#ef8333] text-[#fff] text-[0.9rem] rounded font-light px-6 py-3 cursor-pointer hover:bg-[#f26e09]">
                Buy Now
              </button>
              <button className="bg-[#1456ac] text-[#fff] text-[0.9rem] rounded font-light px-6 py-3 cursor-pointer hover:bg-[#08428e]">
                Add to Cart
              </button>
            </span>
          </div>
        </div>
        <div className="flex justify-start items-center w-[30%] px-8 gap-4 mb-5">
          <span className="bg-neutral-100 block rounded-lg">
            <img
              src="https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp"
              alt=""
            />
          </span>
          <span className="bg-neutral-100 block rounded-lg">
            <img
              src="https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/2.webp"
              alt=""
            />
          </span>
          <span className="bg-neutral-100 block rounded-lg">
            <img
              src="https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/3.webp"
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
