import { useEffect, useState } from "react";

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-12-31T23:59:59");
    const now = new Date();
    const difference = targetDate - now;

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="flex flex-col justify-center items-center]">
      <div className=" text-[#fff] mb-2 font-bold flex justify-between items-center">
        <div className="bg-[#2f64b4] p-[5%]">{days}</div>:
        <div className="bg-[#2f64b4] p-[5%]">{hours}</div>:
        <div className="bg-[#2f64b4] p-[5%]">{minutes}</div>:
        <div className="bg-[#2f64b4] p-[5%]">{seconds}</div>
      </div>
      <div className="text-[#fff] font-light text-[0.7rem] flex justify-between items-center">
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
