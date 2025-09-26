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
  features,
  data,
  title,
  setSearch,
  search,
}) {
  return (
    <div>
      <Navbar
        user={user}
        cart={cart}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        categories={categories}
        setSearch={setSearch}
        search={search}
      />
      <ListContainer data={data} title={title} />
      <Features features={features} />
      <Footer />
    </div>
  );
}

export default ListingPage;
