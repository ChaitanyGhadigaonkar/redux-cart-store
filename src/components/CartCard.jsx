import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/cartSlice";
import { toast } from "react-hot-toast";
import { addToTheTotal, removeToTheTotal } from "../store/amountSlice";
import currencyFormatter from "../utils/currencyFormatter";


const CartCard = ({ product }) => {
  
  const [QuantityValue, setQuantityValue] = useState(1);
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(product));
    dispatch(removeToTheTotal(product.price * QuantityValue))
    toast.success("removed successfully");
  };

  return (
    <div className="cart-item grid grid-cols-[2fr_1fr_1fr_1fr]  place-items-center my-5 md:grid-cols-[2fr_1fr_1fr_1fr]">
      <div className="product-card flex flex-col items-center justify-center gap-2 w-[100%] md:my-2 md:flex-row">
        <div className="left">
          <img className="w-16 h-16 mx-1" src={product.image} />
        </div>
        <div className="right flex flex-col items-center justify-center">
          <h3 className="font-semibold text-sm text-center md:text-base">
            {product.title.length >= 30
              ? product.title.slice(0, 25) + "..."
              : product.title}
          </h3>
          <p className="text-xs ">{product.category}</p>
        </div>
      </div>
      <div className="price">
        <p className="text-sm">{currencyFormatter.format(product.price)}</p>
      </div>
      <div className="quantity flex items-center justify-center gap-1">
        <RemoveIcon
          className="hover:cursor-pointer"
          onClick={() => {
            if (QuantityValue > 1) {
              setQuantityValue((prev) => prev - 1);
              dispatch(removeToTheTotal(product.price))
            }
          }}
        />
        <input
          type="text"
          className="border-black border-[1px] rounded-md w-10 px-2"
          value={QuantityValue}
          readOnly
        />
        <AddIcon
          className="hover:cursor-pointer"
          onClick={() => {
            if (QuantityValue !== 5) {
              setQuantityValue((prev) => prev + 1);
              dispatch(addToTheTotal(product.price))
            }
          }}
        />
      </div>
      <div className="item-total flex flex-col items-center justify-center gap-2 md:flex-row">
        <p>{currencyFormatter.format(product.price * QuantityValue)}</p>
        <p className="hover:cursor-pointer" onClick={handleRemoveItem}>
          <CancelIcon />
        </p>
      </div>
    </div>
  );
};

export default CartCard;
