import Navbar from "../components/Navbar";
import BuyProduct from "../components/BuyProduct";
import Features from "../components/Features";
import Footer from "../components/Footer";

function ProductPage({ features, showMenu, setShowMenu, categories, brands }) {
  return (
    <div>
      <Navbar
        categories={categories}
        brands={brands}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <BuyProduct features={features} />
      <Features features={features} />
      <Footer />
    </div>
  );
}

export default ProductPage;
