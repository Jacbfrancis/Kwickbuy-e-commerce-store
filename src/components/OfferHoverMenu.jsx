import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const offers = [
  { name: "Featured Deals", link: "/featured-products" },
  { name: "Flash Sales", link: "/flashdeals" },
  { name: "Discontinued Products", link: "" },
  { name: "Clearance Sales", link: "" },
];

function OfferHoverMenu() {
  return (
    <>
      <motion.div
        className="bg-[#fff] text-[#434343d6] shadow-xl font-light text-[0.9rem] rounded-lg"
        initial={{ y: 15 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, type: "tween" }}
      >
        <ul>
          {offers.map((offer) => (
            <li key={offer.name} className="border-b-1 border-[#43434344]">
              <NavLink to={offer.link}>
                <span className="px-3 py-2 cursor-pointer block hover:text-[#1456ac]">
                  {offer.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}

export default OfferHoverMenu;
