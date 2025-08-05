import { useEffect, useState } from "react";

function useGetProducts() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          "https://dummyjson.com/products?&limit=0&select=title,price,description,brand,images,thumbnail,discountPercentage"
        );
        const data = await res.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return [productData.products, error, loading];
}

export default useGetProducts;
