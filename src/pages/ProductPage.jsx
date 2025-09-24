import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import BuyProduct from "../components/BuyProduct";
import Features from "../components/Features";
import Footer from "../components/Footer";
import SimilarProducts from "../components/SimilarProducts";
import { useState } from "react";

function ProductPage({
  user,
  cart,
  features,
  showMenu,
  setShowMenu,
  categories,
  productData,
  brands,
  dispatchCart,
  setSearch,
  search,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { id } = useParams();

  const currentProduct = productData.find(
    (product) => product.id === parseInt(id)
  );

  return (
    <div>
      <Navbar
        user={user}
        cart={cart}
        categories={categories}
        brands={brands}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        setSearch={setSearch}
        search={search}
      />
      <BuyProduct
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        features={features}
        currentProduct={currentProduct}
        brands={brands}
        productData={productData}
        dispatchCart={dispatchCart}
      />
      <SimilarProducts
        categories={categories}
        currentProduct={currentProduct}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      <Features features={features} />
      <Footer />
    </div>
  );
}

export default ProductPage;
