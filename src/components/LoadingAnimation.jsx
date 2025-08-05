import React from "react";

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-600"
        role="status"
      >
        <span className="bg-[#1456ac] w-full h-full p-1 rounded-[100%]"></span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
