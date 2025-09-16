import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="text-center xl:px-20">
      <div className="bg-[#fff]  w-[92%] m-auto rounded-xl px-6 pt-8 my-6 border-1 border-[#5dcaf133]">
        <h2 className="text-[1.4rem] font-semibold">Sign up</h2>
        <form>
          <div className="text-left grid grid-cols-1 lg:grid-cols-2 lg:w-[70%] m-auto lg:gap-4">
            <div className="my-2 xl:my-1">
              <label className="text-[0.9rem]">
                First Name <span className="text-red-400 text-[1.2rem]">*</span>
              </label>
              <input
                className="text-gray-600 w-full mt-1 px-3 py-2 border-1 border-[#4f4e4e58] block rounded-md"
                type="text"
                placeholder="Ex. Johne"
              />
            </div>
            <div className="my-2 xl:my-1">
              <label className="text-[0.9rem]">
                Last Name <span className="text-red-400 text-[1.2rem]">*</span>
              </label>
              <input
                className="text-gray-600 w-full mt-1 px-3 py-2 border-1 border-[#4f4e4e58] block rounded-md"
                type="text"
                placeholder="Ex. Doe"
              />
            </div>
            <div className="my-2 xl:my-1">
              <label className="text-[0.9rem]">
                Email Address
                <span className="text-red-400 text-[1.2rem]">*</span>
              </label>
              <input
                className="text-gray-600 w-full mt-1 px-3 py-2 border-1 border-[#4f4e4e58] block rounded-md"
                type="text"
                placeholder="Enter email address"
              />
            </div>
            <div className="my-2 xl:my-1">
              <label className="text-[0.9rem]">
                Phone Number
                <span className="text-red-400 text-[1.2rem]">*</span>
              </label>
              <input
                className="text-gray-600 w-full mt-1 px-3 py-2 border-1 border-[#4f4e4e58] block rounded-md"
                type="text"
                placeholder="Enter phone number"
              />
            </div>
            <div className="my-2 xl:my-1">
              <label className="text-[0.9rem]">
                Password
                <span className="text-red-400 text-[1.2rem]">*</span>
              </label>
              <input
                className="text-gray-600 w-full mt-1 px-3 py-2 border-1 border-[#4f4e4e58] block rounded-md"
                type="text"
                placeholder="Minimum 6 charcaters"
              />
            </div>
            <div className="my-2 xl:my-1">
              <label className="text-[0.9rem]">
                Referral code <span className="text-gray-400">(optional)</span>
              </label>
              <input
                className="text-gray-600 w-full mt-1 px-3 py-2 border-1 border-[#4f4e4e58] block rounded-md"
                type="text"
                placeholder="Use referral code"
              />
            </div>
            <div className="mt-2 xl:mt-0">
              <input type="checkbox" />
              <p className="inline-block mx-2">
                I agree to your
                <span className="text-[#1456ac] underline mx-1">
                  Terms and conditions
                </span>
              </p>
            </div>
          </div>
          <button className="bg-[#1456ac] text-[#fff] w-full p-3 my-8 rounded-lg xl:w-[30%]">
            Sign up
          </button>
        </form>
      </div>
      <p className="text-gray-600">
        Already have account?
        <Link to="/login">
          <span className="text-[#1456ac] ml-1">Sign in</span>
        </Link>
      </p>
    </div>
  );
}

export default Signup;
