import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="text-center xl:px-20">
      <div className="bg-[#fff] w-[92%] m-auto rounded-xl px-6 py-8 my-6 border-1 border-[#5dcaf133]">
        <div className="w-full flex justify-center items-center my-5">
          <img src="/user-vector.svg" alt="user_icon" />
        </div>
        <h2 className="text-[1.4rem] font-semibold">Sign in</h2>
        <form>
          <div className="text-left grid grid-cols-1 lg:grid-cols-2 lg:w-[70%] m-auto lg:gap-4">
            <div className="my-2 xl:my-1">
              <label className="text-[0.9rem]">
                Email
                <span className="text-red-400 text-[1.2rem]">*</span>
              </label>
              <input
                className="text-gray-600 w-full mt-1 px-3 py-2 border-1 border-[#4f4e4e58] block rounded-md"
                type="text"
                placeholder="Enter Email address"
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
                placeholder="Enter Password"
              />
            </div>
          </div>
          <div className="w-full mt-2 flex justify-between mx-auto items-center xl:mt-4 xl:w-[50%]">
            <span className="block">
              <input type="checkbox" />
              <p className="inline-block mx-2 text-[#1456ac]">Remeber me</p>
            </span>
            <span className="text-[#1456ac] underline block">
              Forgot password
            </span>
          </div>
          <button className="bg-[#1456ac] text-[#fff] w-full p-3 my-8 rounded-lg xl:w-[30%]">
            Sign in
          </button>
        </form>
      </div>
      <p className="text-gray-600">
        Don't have an account?
        <Link to="/signup">
          <span className="text-[#1456ac] ml-1">Sign up</span>
        </Link>
      </p>
    </div>
  );
}

export default Login;
