function MoreFromStore() {
  return (
    <div className="w-[90%] m-auto xl:w-full">
      <h2 className="font-bold mb-4">More from the store</h2>
      <ul className="text-[0.9rem] font-semibold">
        <li className="bg-[#fff] rounded-lg border-1 border-[#6cc6e73f] px-2 flex justify-start items-center gap-6 py-4 my-2">
          <span className=" w-[33%] p-2 block ">
            <img
              src="https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/thumbnail.webp"
              alt=""
            />
          </span>
          <span className="w-[65%] block">
            <p className="mb-1.5">Lenovo Yoga 920</p>
            <p>$1,099.99</p>
          </span>
        </li>

        <li className="bg-[#fff] rounded-lg border-1 border-[#6cc6e73f] px-2 flex justify-start items-center gap-6 py-4 my-2">
          <span className=" w-[33%] p-2 block">
            <img
              src="https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp"
              alt=""
            />
          </span>
          <span className="w-[65%] block">
            <p className="mb-1.5">Apple Airpods</p>
            <p>$1,099.99</p>
          </span>
        </li>

        <li className="bg-[#fff] rounded-lg border-1 border-[#6cc6e73f] px-2 flex justify-start items-center gap-6 py-4 my-2">
          <span className=" w-[33%] p-2 block ">
            <img
              src="https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/thumbnail.webp"
              alt=""
            />
          </span>
          <span className="w-[65%] block">
            <p className="mb-1.5">Apple Watch Series 4 Gold</p>
            <p>$1,099.99</p>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default MoreFromStore;
