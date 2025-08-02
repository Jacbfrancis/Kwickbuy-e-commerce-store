import { useState } from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FlashDeal from "../components/FlashDeal";

function Homepage() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Header showMenu={showMenu} />
      <FlashDeal />
    </div>
  );
}

export default Homepage;
