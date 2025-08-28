import { useEffect, useState } from "react";

const vendors = [
  { id: 1, name: "Novara", logo: "https://placehold.co/200x200?text=Novara" },
  { id: 2, name: "Zypher", logo: "https://placehold.co/200x200?text=Zypher" },
  { id: 3, name: "Orivia", logo: "https://placehold.co/200x200?text=Orivia" },
  { id: 4, name: "Quanta", logo: "https://placehold.co/200x200?text=Quanta" },
  { id: 5, name: "Veyra", logo: "https://placehold.co/200x200?text=Veyra" },
  { id: 6, name: "Klyra", logo: "https://placehold.co/200x200?text=Klyra" },
  { id: 7, name: "Aureon", logo: "https://placehold.co/200x200?text=Aureon" },
  { id: 8, name: "Trevix", logo: "https://placehold.co/200x200?text=Trevix" },
  { id: 9, name: "Lumora", logo: "https://placehold.co/200x200?text=Lumora" },
  { id: 10, name: "Xentra", logo: "https://placehold.co/200x200?text=Xentra" },
  { id: 11, name: "Beyora", logo: "https://placehold.co/200x200?text=Beyora" },
  { id: 12, name: "Fyntra", logo: "https://placehold.co/200x200?text=Fyntra" },
  { id: 13, name: "Orynx", logo: "https://placehold.co/200x200?text=Orynx" },
];

function useGetProducts() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          "https://dummyjson.com/products?&limit=0&select=title,price,description,images,thumbnail,discountPercentage,category"
        );
        const data = await res.json();

        // go through all products and assign a vendor to each product
        const productsWithBrands = data.products.map((products, index) => {
          const vendor = vendors[index % vendors.length];
          return {
            ...products,
            vendorID: vendor.id,
            vendorName: vendor.name,
            vendorLogo: vendor.logo,
          };
        });

        setProductData(productsWithBrands);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return [productData, error, loading];
}

export default useGetProducts;
