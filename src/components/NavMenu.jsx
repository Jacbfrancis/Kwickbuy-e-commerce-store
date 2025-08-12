// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "./font-awesome";
import { useReducer } from "react";

const initialState = {
  categoriesMenu: false,
  offersMenu: false,
  brandMenu: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_CATEGORIES":
      return {
        categoriesMenu: !state.categoriesMenu,
        offersMenu: false,
        brandMenu: false,
      };
    case "TOGGLE_OFFERS":
      return {
        offersMenu: !state.offersMenu,
        brandMenu: false,
        categoriesMenu: false,
      };
    case "TOGGLE_BRAND":
      return {
        brandMenu: !state.brandMenu,
        offersMenu: false,
        categoriesMenu: false,
      };

    default:
      return state;
  }
}
function NavMenu({ setShowMenu, categories }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <FontAwesomeIcon
        className="mb-6 pl-6"
        icon="fa-solid fa-xmark"
        onClick={() => {
          setShowMenu(false);
        }}
      />
      <ul className="flex text-[0.95rem] flex-col gap-3">
        <li className="pl-6">Home</li>
        <li
          className="pl-6"
          onClick={() => {
            dispatch({ type: "TOGGLE_CATEGORIES" });
          }}
        >
          Categories <span className="text-[0.6rem] ml-8">&#9660;</span>
        </li>
        {state.categoriesMenu && (
          <motion.div
            className="bg-[#eff7ff] w-full m-auto rounded-lg px-7 py-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05, type: "spring" }}
          >
            <ul className="flex text-[0.85rem] flex-col gap-4">
              {categories.map((category) => (
                <li>
                  <img
                    className="w-6 inline-block mr-2"
                    src={category.icon}
                    alt={`${category.title}icon`}
                  />
                  {category.title}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        <li
          className="pl-6"
          onClick={() => {
            dispatch({ type: "TOGGLE_OFFERS" });
          }}
        >
          Offers <span className="text-[0.6rem] ml-8">&#9660;</span>
        </li>
        {state.offersMenu && (
          <motion.div
            className="bg-[#eff7ff] w-full m-auto rounded-lg px-7 py-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05, type: "spring" }}
          >
            <ul className="flex text-[0.85rem] flex-col gap-4">
              <li>Featured Deals</li>
              <li>Limited Time Deals</li>
              <li>Top Sellers</li>
              <li>Latest Products</li>
            </ul>
          </motion.div>
        )}
        <li className="pl-6" onClick={() => dispatch({ type: "TOGGLE_BRAND" })}>
          Brand <span className="text-[0.6rem] ml-8">&#9660;</span>
        </li>
        {state.brandMenu && (
          <motion.div
            className="bg-[#eff7ff] w-full m-auto rounded-lg px-7 py-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05, type: "spring" }}
          >
            <ul className="flex text-[0.85rem] flex-col gap-4">
              <li className="flex justify-between items-center">placeholder</li>
              <li className="flex justify-between items-center">placeholder</li>
              <li className="flex justify-between items-center">placeholder</li>
            </ul>
          </motion.div>
        )}
        <li className="pl-6">All Vendors</li>
        <li className="pl-6">Sign in</li>
        <li className="pl-6">Sign up</li>
        <li className="pl-6">
          Vendor Zone <span className="text-[0.6rem] ml-8">&#9660;</span>
        </li>
      </ul>
    </>
  );
}

export default NavMenu;
