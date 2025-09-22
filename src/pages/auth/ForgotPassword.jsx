import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import toast, { Toaster } from "react-hot-toast";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleResetPassword(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent successfully!");
      setEmail("");
    } catch (error) {
      console.error(error);
      toast.error("Error sending password reset email");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="text-center xl:px-20">
      <Toaster />

      <div className="bg-[#fff] w-[92%] m-auto rounded-xl px-6 py-8 my-6 border-1 border-[#5dcaf133]">
        <h2 className="text-[1.4rem] font-semibold mb-4">Forgot Password</h2>
        <form>
          <div className="text-left mx-auto my-2 xl:my-1 xl:w-[40%]">
            <label className="text-[0.9rem]">
              Email
              <span className="text-red-400 text-[1.2rem]">*</span>
            </label>
            <input
              className="text-gray-600 w-full mt-1 px-3 py-2 border-1 border-[#4f4e4e58] block rounded-md"
              type="text"
              placeholder="Enter Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <button
            className="bg-[#1456ac] text-[#fff] my-3 w-full p-3 rounded-lg cursor-pointer xl:w-[20%]"
            disabled={loading}
            onClick={handleResetPassword}
          >
            {loading ? "Loading..." : "Reset Password"}
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

export default ForgotPassword;
