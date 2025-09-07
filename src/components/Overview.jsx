import MoreFromStore from "./MoreFromStore";

function Overview({ currentProduct, productBrands }) {
  return (
    <div className="flex justify-start items-start mx-auto xl:px-20">
      <div className="bg-[#fff] text-center text-[0.85rem] rounded-lg border-1 border-[#6cc6e73f] px-7 py-8 w-full">
        <button className="bg-[#1456ac] text-[#fff] font-light block w-[7rem] m-auto py-1.5 my-4 rounded-3xl">
          Overview
        </button>
        <div className="text-[#373636ab]">
          <p>{currentProduct.description}</p>
        </div>
      </div>

      <div
        className={`hidden w-[35%] ml-4 xl:block ${
          productBrands.length > 1 ? "xl:block" : "xl:hidden"
        }`}
      >
        <MoreFromStore productBrands={productBrands} />
      </div>
    </div>
  );
}

export default Overview;
