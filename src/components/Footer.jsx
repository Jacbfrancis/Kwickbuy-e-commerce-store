function Footer() {
  return (
    <>
      <div className="bg-[#184161] text-[#ffffffd2] px-6 pt-8 pb-20 mt-10 xl:px-20 xl:flex justify-between items-center">
        <div className="w-1/2 mb-4 m-auto xl:w-[15%] xl:m-0">
          <img src="/footer_logo.png" alt="Kwickbuy_logo" />
        </div>

        <div className="text-center mb-10 xl:w-[35%] xl:m-0">
          <h4 className="text-[0.9rem] mt-3">NEWSLETTER</h4>
          <p className="text-[0.85rem] font-light mb-5">
            Subscribe to our newsletter to get latest updates
          </p>
          <div className="flex justify-center items-center my-4">
            <input
              className="bg-[#5dcaf133] w-full p-4 rounded-l"
              placeholder="Your Email Address here"
              type="email"
            ></input>
            <button className="bg-[#fff] text-[#184161] rounded-r p-4">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex justify-start items-start xl:w-[30%]">
          <span className="w-[50%] mr-4">
            <h4 className="mb-2">Quick Links</h4>
            <ul>
              <li>Profile info</li>
              <li>Limited Deals</li>
              <li>Featured Products</li>
              <li>Categories</li>
            </ul>
          </span>

          <span className="w-[50%] ml-4">
            <h4 className="mb-2">Need Help?</h4>
            <ul>
              <li>About Us</li>
              <li>Terms and Conditions</li>
              <li>Refund Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="bg-[#1c5170] text-[#ffffffd2] py-3 font-normal text-center">
        <p>Copyright 2025 ©JacobFrancis</p>
      </div>
    </>
  );
}

export default Footer;
