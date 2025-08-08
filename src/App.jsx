import Hompage from "./pages/Homepage";
import "./App.css";
import useGetProducts from "./components/useGetProducts";

function App() {
  const [productData, error, loading] = useGetProducts();

  return (
    <div className="bg-[#fbfbfc]">
      <Hompage productData={productData} error={error} loading={loading} />
      <div className="h-[70vh] block"></div>
    </div>
  );
}

export default App;
