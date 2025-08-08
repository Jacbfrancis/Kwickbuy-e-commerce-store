import React from "react";

function LoadingSpinner() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-600"
          role="status"
        >
          <span className="bg-[#1456ac] w-full h-full p-1 rounded-[100%]"></span>
        </div>
      </div>
      <h2 className="text-[#1456ac] text-center font-semibold text-[1.2rem] py-2">
        Loading...
      </h2>
    </>
  );
}

export default LoadingSpinner;
