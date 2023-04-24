import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const navigator = useNavigate();
  const location = useLocation();
  return (
    <div className="bg-slate-200">
      <div className="w-[90%] h-14 m-auto flex flex-row items-center justify-between sm:w-[100%] sm:px-2 md:w-[100%] md:px-5 lg:w-[90%] xl:w-[80%]">
        <div className="logo flex flex-row items-center w-[70%] gap-5">
          <Link to={"/"} className="font-bolder text-lg md:text-2xl ">
            Cart Store
          </Link>
          <div className="list flex flex-row ">
            <li
              className={`list-1 list-none text-base mx-2 hover:cursor-pointer hover:font-bolder `}
            >
              <Link
                className={`${
                  location.pathname === "/" ? "font-semibold" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li
              className={`list-1 list-none text-base mx-2 hover:cursor-pointer hover:font-bolder `}
            >
              <Link
                className={`${
                  location.pathname === "/favorites" ? "font-semibold" : ""
                }`}
                to="/favorites"
              >
                Favorites
              </Link>
            </li>
          </div>
        </div>
        <div
          className="add-to-cart hover:cursor-pointer relative"
          onClick={() => {
            navigator("/cart");
          }}
        >
          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
