function MoreFromStore({ productBrands }) {
  return (
    <div className="w-[90%] m-auto xl:w-full">
      <h2 className="font-bold mb-4">More from the store</h2>
      <ul className="text-[0.9rem] font-semibold">
        {productBrands.slice(0, 3).map((product) => (
          <li
            key={product.id}
            className="bg-[#fff] rounded-lg border-1 border-[#6cc6e73f] px-2 flex justify-start items-center gap-6 py-4 my-2"
          >
            <span className=" w-[33%] p-2 block">
              <img src={product.thumbnail} alt={`${product.title}_image`} />
            </span>
            <span className="w-[65%] block">
              <p className="mb-1.5">{product.title}</p>
              <p>{`$${product.price}`}</p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoreFromStore;
