import { FontAwesomeIcon } from "./font-awesome";

function ViewProduct({
  setIsViewProductOpen,
  currentProduct,
  setCurrentProduct,
}) {
  return (
    <div
      className="bg-[#121212bf] hidden xl:block h-[100vh] w-[100%] absolute z-70"
      onClick={() => {
        setIsViewProductOpen(false);
        setCurrentProduct(null);
      }}
    >
      <div
        className="bg-[#fff] text-[1.45rem] w-[85%] py-4 rounded-xl mx-auto mt-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hidden justify-between items-center border-b-1 border-[#69696941] py-2 xl:flex">
          <h1 className="pl-8">{currentProduct.title}</h1>
          <FontAwesomeIcon
            className="pr-8"
            icon="fa-solid fa-xmark"
            onClick={() => {
              setIsViewProductOpen(false);
              setCurrentProduct(null);
            }}
          />
        </div>

        <div className="flex justify-between items-center p-8">
          <div className="w-[42%] border-1 rounded-md border-[#6cc6e73f]">
            <img
              className="w-[80%] h-[23rem]  m-auto"
              src={currentProduct.thumbnail}
              alt={`${currentProduct.title}_image`}
            />
          </div>

          <div className="w-[57%] h-[23rem] border-1 rounded-md border-[#6cc6e73f] p-4">
            <h2>{currentProduct.title}</h2>
            <p className="text-[#1456ac] font-bold mt-3">
              ${currentProduct.price.toLocaleString()}
            </p>
            <div className="font-semibold flex justify-start items-center my-6.5">
              <h3 className="text-[1.2rem] mr-3">Quantity: </h3>
              <div className="text-[#3976c5] border-1 border-[#3976c5] w-[7rem] rounded-md flex justify-center items-center">
                <button className="px-2 cursor-pointer">-</button>
                <input
                  className="text-[#000] focus:outline-0 text-center font-light text-[0.95rem] border-0 px-0 py-1.5 w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  type="number"
                  placeholder="1"
                  defaultValue={1}
                />
                <button className="px-2 cursor-pointer">+</button>
              </div>
            </div>
            <h3 className="text-[1.2rem] font-semibold">
              Total price :
              <span className="text-[#1456ac] text-[1rem] ml-3">
                ${currentProduct.price.toLocaleString()}
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
          {currentProduct.images.map((productImage, index) => (
            <span key={index} className="bg-neutral-100 block rounded-lg">
              <img
                className="w-[4rem]"
                src={productImage}
                alt={`${currentProduct}_image`}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
