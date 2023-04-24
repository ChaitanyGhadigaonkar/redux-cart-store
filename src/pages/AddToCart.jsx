import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";
import CartCard from "../components/CartCard";
import EmptyCart from "../assets/EmptyCart.gif";
import WestIcon from "@mui/icons-material/West";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  // dispatch(addItem([]));
  const navigator = useNavigate();
  const HandleGoto = () => {
    navigator("/");
  };
  return (
    <>
      {cart.length === 0 ? (
        <div className="w-[100%] h-[80vh] flex flex-col items-center justify-center">
          <h1 className="font-semibold text-xl">Your Cart is Empty!!</h1>
          <img className="w-64" src={EmptyCart} />
          <button
            className="flex items-center justify-center gap-1 text-lg rounded-lg border-[1px] hover:cursor-pointer px-2 py-2 bg-[#b5dbdc] hover:shadow-md"
            onClick={HandleGoto}
          >
            <WestIcon /> Home Page
          </button>
        </div>
      ) : (
        <div>
          <div className="head text-center text-2xl font-bold my-2">
            Your Cart
          </div>

          <div className="items my-2">
            <div className="item-head grid grid-cols-[1fr_1fr_1fr_1fr] place-items-center my-1 md:grid-cols-[2fr_1fr_1fr_1fr] ">
              <h3 className="font-semibold ">Item</h3>
              <h3 className="font-semibold ">Price</h3>
              <h3 className="font-semibold ">Quantity</h3>
              <h3 className="font-semibold ">Total</h3>
            </div>
            <hr />
            <div className="item-container">
              {cart.map((product) => {
                return <CartCard key={product.id} product={product} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddToCart;
