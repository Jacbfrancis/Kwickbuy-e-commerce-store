import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "./font-awesome";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

import CarouselButton from "./CarouselButton";

import bannerImage1 from "../assets/images/banner1.webp";
import bannerImage2 from "../assets/images/banner2.jpg";
import bannerImage3 from "../assets/images/banner3.jpg";

function Header() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const headerImages = [bannerImage1, bannerImage2, bannerImage3];
  const [currentImage, setCurrentImage] = useState(0);

  function handleMouseOut() {
    setIsMouseOver(false);
  }
  function handleMouseOver() {
    setIsMouseOver(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" py-3 px-4 md:px-20 md:my-0 md:flex justify-between items-start">
      <div className="bg-[#fff] hidden py-5 px-8 w-[20%] rounded md:inline-block">
        <ul className="flex text-[0.95rem] flex-col gap-5">
          <li>
            <img
              className="w-6 inline-block mr-2"
              src="/men_fashion.webp"
              alt="men-fashion"
            />
            Men's Fashion
          </li>
          <li>
            <img
              className="w-6 inline-block mr-2"
              src="/women_fashion.webp"
              alt="women-fashion"
            />
            Women's Fashion
          </li>
          <li>
            <img
              className="w-6 inline-block mr-2"
              src="/kid_fashion.webp"
              alt="kid-fashion"
            />
            Kid's Fashion
          </li>
          <li>
            <img
              className="w-6 inline-block mr-2"
              src="/health_beauty.webp"
              alt="health_beauty"
            />
            Health & Beauty
          </li>
          <li>
            <img
              className="w-6 inline-block mr-2"
              src="/pet_supplies.webp"
              alt="pet-supplies"
            />
            Pet Supplies
          </li>
          <li>
            <img
              className="w-6 inline-block mr-2"
              src="/home_kitchen.webp"
              alt="home-kitchen"
            />
            Home & Kitchen
          </li>
          <li>
            <img
              className="w-6 inline-block mr-2"
              src="/baby_toys.webp"
              alt="baby-toys"
            />
            Baby & Toys
          </li>
          <li>
            <img
              className="w-6 inline-block mr-2"
              src="/sports_leisure.webp"
              alt="sports-leisure"
            />
            Sports & Leisure
          </li>
          <li>
            <img
              className="w-6 inline-block mr-2"
              src="/phones.webp"
              alt="phone-accessories"
            />
            Phones & Gadgets
          </li>
        </ul>
      </div>
      <div
        className="w-full md:w-[79.5%]"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {headerImages.map((_, index) => (
          <motion.img
            className={index === currentImage ? "" : "hidden"}
            initial={{ x: 400, opacity: 1 }}
            animate={index === currentImage ? { x: 0 } : { x: 400 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              type: "tween",
            }}
            key={index}
            src={headerImages[index]}
            alt={`banner-image-${index}`}
          />
        ))}
        <CarouselButton
          isMouseOver={isMouseOver}
          setCurrentImage={setCurrentImage}
        />
      </div>
    </div>
  );
}

export default Header;
