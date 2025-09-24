import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

function ProfilePage({
  user,
  cart,
  brands,
  categories,
  showMenu,
  setShowMenu,
  setSearch,
  search,
}) {
  return (
    <div>
      <Navbar
        user={user}
        cart={cart}
        brands={brands}
        categories={categories}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        setSearch={setSearch}
        search={search}
      />

      <Profile user={user} />
      <Footer />
    </div>
  );
}

export default ProfilePage;
