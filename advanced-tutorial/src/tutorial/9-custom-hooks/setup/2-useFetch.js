import { useState, useEffect } from "react";
// naming convention -> it must be in the form useXXXXXX
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, [url]);
  return { loading, products };
};
