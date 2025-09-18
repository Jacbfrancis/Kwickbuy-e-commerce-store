import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { handleAuthError } from "./handleAuthError";

function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSignup(e) {
    e.preventDefault();
    setError(null);

    if (!firstName || !lastName || !email || !password) {
      setError("All required fields must be filled out.");
      return;
    }

    if (!isChecked) {
      setError("Tick the box to accept the terms and conditions.");
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
        email: email,
        phoneNumber: phoneNumber,
      });

      navigate("/");
      firstName("");
      lastName("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
    } catch (error) {
      setError(handleAuthError(error));
    } finally {
      setLoading(false);
    }
  }

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
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
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
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="my-2 xl:my-1">
              <label className="text-[0.9rem]">
                Phone Number
                <span className="text-red-400 text-[1.2rem]">*</span>
              </label>
              <input
                className="text-gray-600 w-full mt-1 px-3 py-2 border-1 border-[#4f4e4e58] block rounded-md"
                type="number"
                placeholder="Enter phone number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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
            <div className="my-2 xl:mt-0">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <p className="inline-block mx-2">
                I agree to your
                <span className="text-[#1456ac] underline mx-1">
                  Terms and conditions
                </span>
              </p>
            </div>
          </div>

          {error && <p className="text-red-600 my-2">{error}</p>}
          <button
            className="bg-[#1456ac] text-[#fff] w-full p-3 my-6 rounded-lg xl:w-[30%]"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign up"}
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
