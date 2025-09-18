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
      />

      <Profile user={user} />
      <Footer />
    </div>
  );
}

export default ProfilePage;
