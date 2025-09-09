function Details({ features, currrentBrand }) {
  return (
    <div className="w-full mt-4 xl:w-[25%] xl:mt-auto">
      <div className="bg-[#fff] text-[#373636ab] text-[0.8rem] font-extralight rounded-lg mb-4">
        <ul className="flex flex-col justify-center items-start gap-8 p-7">
          {features.map((feature, index) => (
            <li className="flex justify-start items-center gap-2" key={index}>
              <span className="w-[1rem] block mr-2">
                <img src={feature.image} alt={`${feature.description}_icon`} />
              </span>
              {feature.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#fff] py-8 px-6 rounded-lg mb-4">
        <div className="flex justify-center items-center">
          <span className="border-1 rounded-[100%] p-2 mr-3">
            <img
              className="w-[2rem] m-auto"
              src="/original.png"
              alt="brand_logo"
            />
          </span>
          <h2 className="ml-3">{currrentBrand?.name || "Kwickbuy"}</h2>
        </div>
        <div className="text-[#1456ac] text-[0.8rem] w-[80%] m-auto flex justify-between items-center py-6">
          <span className="text-center w-[50%] border-r-1 border-[#4949491f] block">
            <img className="w-[10%] m-auto" src="/like.png" alt="like_icon" />
            <p className="p-2">
              <span className="font-bold">{0}</span> Reviews
            </p>
          </span>

          <span className="text-center w-[50%] block">
            <img
              className="w-[10%] m-auto"
              src="/products.png"
              alt="product_icon"
            />
            <p className="p-2">
              <span className="font-bold">{currrentBrand?.count || 16}</span>{" "}
              Product(s)
            </p>
          </span>
        </div>
        <button
          className={`bg-[#1456ac] hidden text-[#fff] text-[0.9rem] rounded-md font-light w-[100%] mx-auto cursor-pointer hover:bg-[#08428e] px-6 py-3 ${
            currrentBrand?.count < 2 ? "xl:hidden" : "xl:block"
          }`}
        >
          View Product(s)
        </button>
      </div>
    </div>
  );
}

export default Details;
