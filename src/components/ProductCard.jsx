import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { toast } from "react-hot-toast";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const handleOnAddToCart = () => {
    dispatch(addItem(product));
    toast.success("Item added successfully");
  };
  return (
    <div className="cart relative flex flex-col my-2 border-sky-100 w-72 rounded-md shadow-md md:w-56">
      <div className="top flex items-center justify-center">
        <img className="w-[80%] h-40 px-2 py-2 md:w-[100%]  pt-4" src={product.image} />
      </div>
      <div className="middle px-2 py-3">
        <p className="name font-semibold py-1">
          {product.title.length > 30 ? 
            product.title.slice(0, 30) + "..."
           : 
            product.title
          }
        </p>
        <div className="description text-sm">
          {product.description.length > 131 ? (
            <p>{product.description.slice(0, 130) + "..."}</p>
          ) : (
            <p>{product.description}</p>
          )}
        </div>
        <div className="reviews flex items-center justify-between py-2">
          <p className="text-black text-base ">
            <StarIcon fontSize="small" />
            <StarIcon fontSize="small" />
            <StarIcon fontSize="small" />
            <StarIcon fontSize="small" />
            <StarHalfIcon fontSize="small" />
          </p>
          <p className="review text-sm">({product.rating.count} reviews)</p>
        </div>
        <div className="bottom flex items-center justify-between py-2">
          <div className="price">
            <p className="font-semibold ">${product.price}</p>
          </div>
          <button
            className="text-sm font-semibold bg-red-500 text-white rounded-sm px-2 py-1 hover:shadow-md"
            onClick={handleOnAddToCart}
          >
            {" "}
            <ShoppingCartIcon />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
