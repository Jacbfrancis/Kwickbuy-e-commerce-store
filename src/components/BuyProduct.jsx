import { FontAwesomeIcon } from "./font-awesome";
import Details from "./Details";
import Overview from "./Overview";
import MoreFromStore from "./MoreFromStore";
import { useState } from "react";

function BuyProduct({ features, brands, productData, currentProduct }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currrentBrand = brands.find(
    (brand) => brand.name === currentProduct.brand
  );

  const productBrands = productData.filter(
    (productBrand) => productBrand.brand === currrentBrand?.name
  );

  const currentProductImages = currentProduct.images;

  return (
    <>
      <div className="flex flex-col justify-between items-start w-[90%] mx-auto mt-5 xl:flex-row xl:w-full xl:px-20">
        <div className="w-full mb-8 xl:w-[35%]">
          <div className="bg-[#fff] mx-auto border-1 rounded-lg border-[#6cc6e73f]">
            <img
              className="w-[100%] m-auto cursor-pointer"
              src={currentProductImages[currentImageIndex]}
              alt={`${currentProduct.title}_image`}
            />
          </div>
          <div className="flex justify-start items-center w-[75%] mt-3 xl:w-[80%] cursor-pointer">
            {currentProductImages.map((productImage, index) => (
              <span
                key={index}
                className="bg-[#fff] block rounded mx-1 w-[25%]"
                onClick={() => setCurrentImageIndex(index)}
              >
                <img className="w-[90%] m-auto" src={productImage} alt="" />
              </span>
            ))}
          </div>
        </div>

        <div className="text-[1.45rem] mb-8 font-semibold xl:mt-4 xl:w-[40%]">
          <h2>{currentProduct.title}</h2>
          <p className="text-[#1456ac] font-bold mt-3">
            ${currentProduct.price.toLocaleString()}
          </p>
          <div className="font-semibold flex justify-start items-center my-4">
            <h3 className="text-[1rem] mr-3 xl:text-[1.1rem]">Quantity: </h3>
            <div className="text-[#3976c5] border-1 border-[#3976c5] w-[7rem] rounded-md flex justify-center items-center">
              <button className="px-2 cursor-pointer">-</button>
              <input
                className="bg-[#fff] text-[#000] focus:outline-0 text-center font-light text-[0.95rem] border-0 px-0 py-1.5 w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                placeholder="1"
                defaultValue={1}
              />
              <button className="px-2 cursor-pointer">+</button>
            </div>
          </div>
          <h3 className="text-[1.1rem] font-semibold hidden xl:block">
            Total price :
            <span className="text-[#1456ac] text-[1rem] ml-3 ">
              ${currentProduct.price.toLocaleString()}
            </span>
          </h3>
          <span className="flex justify-start items-center gap-3 mt-6.5">
            <button className="bg-[#ef8333] text-[#fff] text-[0.9rem] rounded font-light px-4.5 py-2.5 cursor-pointer hover:bg-[#f26e09] xl:px-6 xl:py-2.5">
              Buy Now
            </button>
            <button className="bg-[#1456ac] text-[#fff] text-[0.9rem] rounded font-light px-4.5 py-2.5 cursor-pointer hover:bg-[#08428e] xl:px-6 xl:py-2.5">
              Add to Cart
            </button>
            <button className="border-1 border-[#6cc6e761] rounded px-4 py-0 cursor-pointer">
              <FontAwesomeIcon
                className="text-[#1456ac]"
                icon="fa-regular fa-heart"
              />
              {/* <FontAwesomeIcon icon="fa-solid fa-heart" /> */}
            </button>
          </span>
        </div>

        <div className="block xl:hidden">
          <Overview
            currentProduct={currentProduct}
            productBrands={productBrands}
          />
        </div>
        <Details features={features} currrentBrand={currrentBrand} />
      </div>
      <div className="hidden xl:block">
        <Overview
          currentProduct={currentProduct}
          productBrands={productBrands}
        />
      </div>
      <div
        className={`xl:hidden ${productBrands.length > 1 ? "block" : "hidden"}`}
      >
        <MoreFromStore productBrands={productBrands} />
      </div>
    </>
  );
}

export default BuyProduct;
