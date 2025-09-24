import Features from "../components/Features";
import Footer from "../components/Footer";
import ListContainer from "../components/ListContainer";
import Navbar from "../components/Navbar";

function ListingPage({
  user,
  cart,
  showMenu,
  setShowMenu,
  categories,
  brands,
  features,
  data,
  title,
}) {
  return (
    <div>
      <Navbar
        user={user}
        cart={cart}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        categories={categories}
        brands={brands}
      />
      <ListContainer data={data} title={title} />
      <Features features={features} />
      <Footer />
    </div>
  );
}

export default ListingPage;
