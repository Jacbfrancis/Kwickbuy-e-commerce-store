import { logout } from "../pages/auth/Logout";

function Profile({ user }) {
  return (
    <div className="text-center xl:px-20">
      <div className="bg-[#fff] w-[92%] m-auto rounded-xl px-6 pt-8 my-6 border-1 border-[#5dcaf133]">
        <h1 className="text-left font-semibold">Profile info</h1>
        <div className="lg:w-[50%] m-auto">
          <span className="text-center block w-[25%] m-auto mt-8 mb-3">
            <img
              className="rounded-full w-full"
              src="/user.png"
              alt="user_image"
            />
          </span>
          <h3>{user.displayName}</h3>

          <form className="text-left my-4 flex flex-col justify-center items-center xl:flex-row xl:justify-between xl:gap-8">
            <div className="w-full my-2 xl:my-1">
              <p className="text-[0.9rem]">
                Name <span className="text-red-400 text-[1.2rem]">*</span>
              </p>
              <div className="text-gray-600 w-full mt-1 px-3 py-2 border-1 border-[#4f4e4e58] block rounded-md">
                {user.displayName}
              </div>
            </div>

            <div className="w-full my-2 xl:my-1">
              <p className="text-[0.9rem]">
                Email Address
                <span className="text-red-400 text-[1.2rem]">*</span>
              </p>
              <div className="text-gray-600 w-full mt-1 px-3 py-2 border-1 border-[#4f4e4e58] block rounded-md">
                {user.email}
              </div>
            </div>
          </form>
          <span className="block text-right my-6">
            <button
              className="bg-[#1456ac] text-[#fff] py-2 px-8 rounded-lg"
              onClick={logout}
            >
              Log out
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
