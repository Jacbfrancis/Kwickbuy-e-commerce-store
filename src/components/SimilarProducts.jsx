function SimilarProducts({ currentProduct, productData }) {
  const categoryProducts = productData.filter(
    (categoryProduct) => categoryProduct.category === "sports-accessories"
  );

  return (
    <div className="w-[90%] m-auto xl:px-20 xl:w-full xl:mt-2">
      <div className="bg-[#fff] rounded-lg pb-8 px-5">
        <span className="flex justify-between items-center py-6">
          <h2 className="font-semibold">Similar products</h2>
          <p className="text-[#1456ac]">View All</p>
        </span>
        <ul className="text-center grid justify-center place-items-center grid-cols-2 gap-5 xl:grid-cols-6">
          {categoryProducts.slice(0, 12).map((product) => (
            <li
              key={product.id}
              className="border-0.5 border-[#6f6f6f15] rounded-lg shadow-sm"
            >
              <span className="block">
                <img
                  className="w-[100%] m-auto px-3 py-5"
                  src={product.thumbnail}
                  alt={`${product.title}_image`}
                />
              </span>
              <span className="block px-6 py-2">
                <p className="font-normal mb-3">{product.title}</p>
                <p className="font-semibold">{`$${product.price}`}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SimilarProducts;
