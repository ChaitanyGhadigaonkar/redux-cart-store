import React, { useState, useEffect } from "react";
import ProductCart from "./ProductCard";

const Products = ({ loading, setLoading }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setLoading(false);
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bolder text-center my-4">
        Welcome to Cart Store
      </h1>
      <div className="products-container grid  place-items-center gap-x-5 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {products.map((product) => {
          return <ProductCart key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
