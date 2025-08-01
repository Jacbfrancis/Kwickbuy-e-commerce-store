function CountdownTimer() {
  return (
    <div className="flex flex-col justify-center items-center]">
      <div className=" text-[#fff] mb-2 font-bold flex justify-center items-center">
        <div className="bg-[#2f64b4] p-[5%]">882</div>:
        <div className="bg-[#2f64b4] p-[5%]">07</div>:
        <div className="bg-[#2f64b4] p-[5%]">44</div>:
        <div className="bg-[#2f64b4] p-[5%]">10</div>
      </div>
      <div className="text-[#fff] font-light text-[0.7rem] flex justify-center items-center">
        <div className="p-[4%]">Days</div>
        <div className="p-[4%]">Hours</div>
        <div className="p-[4%]">Minutes</div>
        <div className="p-[4%]">Seconds</div>
      </div>
      <div className="bg-white w-[90%] m-auto h-1 rounded"></div>
    </div>
  );
}

export default CountdownTimer;
