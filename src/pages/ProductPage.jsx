import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import BuyProduct from "../components/BuyProduct";
import Features from "../components/Features";
import Footer from "../components/Footer";
import SimilarProducts from "../components/SimilarProducts";

function ProductPage({
  features,
  showMenu,
  setShowMenu,
  categories,
  productData,
  brands,
}) {
  const { id } = useParams();

  const currentProduct = productData.find(
    (product) => product.id === parseInt(id)
  );

  return (
    <div>
      <Navbar
        categories={categories}
        brands={brands}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <BuyProduct
        features={features}
        currentProduct={currentProduct}
        brands={brands}
        productData={productData}
      />
      <SimilarProducts
        categories={categories}
        currentProduct={currentProduct}
      />
      <Features features={features} />
      <Footer />
    </div>
  );
}

export default ProductPage;
