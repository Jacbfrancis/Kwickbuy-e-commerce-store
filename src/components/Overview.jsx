import MoreFromStore from "./MoreFromStore";

function Overview() {
  return (
    <div className="flex justify-center items-start mx-auto xl:w-full xl:px-20">
      <div className="bg-[#fff] text-center text-[0.85rem] rounded-lg border-1 border-[#6cc6e73f] px-7 py-8 w-full">
        <button className="bg-[#1456ac] text-[#fff] font-light block w-[7rem] m-auto py-1.5 my-4 rounded-3xl">
          Overview
        </button>
        <div className="text-[#373636ab]">
          <p>
            The MacBook Pro 14 Inch in Space Grey is a powerful and sleek
            laptop, featuring Apple's M1 Pro chip for exceptional performance
            and a stunning Retina display.
          </p>
        </div>
      </div>
      <div className="hidden w-[30%] xl:block">
        <MoreFromStore />
      </div>
    </div>
  );
}

export default Overview;
