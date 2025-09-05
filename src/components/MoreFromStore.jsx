function MoreFromStore() {
  return (
    <div className="w-[90%] m-auto">
      <h2 className="font-bold my-4">More from the store</h2>
      <ul className="bg-[#fff] rounded-lg border-1 border-[#6cc6e73f] px-2">
        <li className="flex justify-start items-center gap-6 py-4">
          <span className=" w-[30%] block">
            <img
              src="https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/thumbnail.webp"
              alt=""
            />
          </span>
          <span className="w-[90%] block">
            <p className="mb-1.5">Lenovo Yoga 920</p>
            <p>$1,099.99</p>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default MoreFromStore;
