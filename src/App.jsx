import Hompage from "./pages/Homepage";
import "./App.css";
import useGetProducts from "./components/useGetProducts";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FlashDealsPage from "./pages/FlashDealsPage";

function App() {
  const [productData, error, loading] = useGetProducts();

  return (
    <div className="bg-[#fbfbfc]">
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              productData={productData}
              error={error}
              loading={loading}
            />
          }
        />
        <Route path="/flashdeals" element={<FlashDealsPage />} />
      </Routes>
    </div>
  );
}

export default App;
