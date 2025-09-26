import { useNavigate } from "react-router-dom";

function Order() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-[#fff] text-center w-[90%] mx-auto my-8 rounded-xl shadow-sm px-5 py-5 xl:w-[80%] xl:rounded-xl">
        <div className="">
          <span className="w-[20%] mx-auto my-4 block xl:w-[6%]">
            <img src="/check.png" alt="checkmark" />
          </span>
          <h2 className="text-[1.2rem] font-bold my-3">
            Order Placed Successfully
          </h2>
          <p className="text-[0.85rem] font-extralight">
            Your payment has been successfully processed and your order -{" "}
            {190103} {""}
            Has been placed.
          </p>

          <button
            className="bg-[#1456ac] text-[#fff] rounded-lg py-3 px-8 mt-5 mb-3 cursor-pointer"
            onClick={() => {
              navigate("/");
              localStorage.removeItem("guest");
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
