import React, { useState, useEffect } from "react";
import ProductCart from "./ProductCard";
import Spinner from "./Spinner";


const Products = ({ loading, setLoading }) => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setLoading(false);
      setProducts(data);
      setFilteredData(data)
    };
    fetchData();
  }, []);
  const applyFilter=(category)=>{
        if(category !== 'All'){
          const newArray = products.filter((item)=>{
            return item.category === category
          })
          setFilteredData(newArray)
        }else{
          setFilteredData(products)
        }
  }
  return (
    <div>
      <h1 className="text-2xl font-bolder text-center my-4">
        Welcome to Cart Store
      </h1>
      <div className="filters flex text-center justify-center items-center py-4 flex-wrap ">
        <button className="border-[1px] mx-2 rounded-lg px-2 py-2 hover:bg-slate-400 hover:text-white my-2" onClick={()=>applyFilter("All")}>All</button>
        <button className="border-[1px] mx-2 rounded-lg px-2 py-2 hover:bg-slate-400 hover:text-white my-2" onClick={()=>applyFilter("men's clothing")}>Men's Clothing</button>
        <button className="border-[1px] mx-2 rounded-lg px-2 py-2 hover:bg-slate-400 hover:text-white my-2" onClick={()=>applyFilter("women's clothing")}>Women's Clothing</button>
        <button className="border-[1px] mx-2 rounded-lg px-2 py-2 hover:bg-slate-400 hover:text-white my-2" onClick={()=>applyFilter("jewelery")}>Jewelry</button>
        <button className="border-[1px] mx-2 rounded-lg px-2 py-2 hover:bg-slate-400 hover:text-white my-2" onClick={()=>applyFilter("electronics")}>Electronics</button>
      </div>
      <Spinner loading={loading}/>
      <div className="products-container grid  place-items-center gap-x-5 grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {filteredData.map((product) => {
          return <ProductCart key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
