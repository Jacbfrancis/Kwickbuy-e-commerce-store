import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "../components/font-awesome";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    show && (
      <button
        className="fixed bottom-6 right-6 bg-[#1456ac] text-[#fff] shadow-lg rounded-full p-2"
        onClick={() => window.scrollTo({ top: 0, behaviour: "smooth" })}
      >
        <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
      </button>
    )
  );
}
