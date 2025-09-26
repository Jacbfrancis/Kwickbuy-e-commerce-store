import About from "../components/About";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutPage({
  user,
  cart,
  categories,
  showMenu,
  setShowMenu,
  features,
  setSearch,
  search,
}) {
  return (
    <div>
      <Navbar
        user={user}
        cart={cart}
        categories={categories}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        setSearch={setSearch}
        search={search}
      />

      <About />

      <Features features={features} />
      <Footer />
    </div>
  );
}

export default AboutPage;
