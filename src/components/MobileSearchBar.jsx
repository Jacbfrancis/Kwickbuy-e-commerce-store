import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "./font-awesome";

function MobileSearchBar({ setIsSearchBarOpen, search, setSearch }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#eff7ff] text-center flex justify-start items-center gap-3 fixed p-4 w-full z-80 xl:hidden">
      <FontAwesomeIcon
        onClick={() => setIsSearchBarOpen(false)}
        icon="fa-solid fa-xmark"
      />
      <input
        className="bg-[#fff] p-3 rounded-md border border-slate-300 w-[80%]"
        placeholder="Search for items"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button
        className="bg-[#1456ac] text-[#fff] font-light px-3 py-2.5 rounded-lg"
        onClick={() => search && navigate("/search")}
      >
        Search
      </button>
    </div>
  );
}

export default MobileSearchBar;
