import { useState } from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FlashDeal from "../components/FlashDeal";
import FeaturedProducts from "../components/FeaturedProducts";

function Homepage({ productData, error, loading }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Header showMenu={showMenu} />
      <FlashDeal productData={productData} error={error} loading={loading} />
      <FeaturedProducts
        productData={productData}
        error={error}
        loading={loading}
      />
    </div>
  );
}

export default Homepage;
