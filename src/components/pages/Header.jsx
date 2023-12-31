import react from "react";
import logo from "../../assets/logo.png";
import { BiPhoneCall } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import Login from "./Login";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

const Header = ({ setIsShowCart, cart }) => {
  const { user } = useContext(AuthContext);

  console.log(cart);

  return (
    <div className="container mx-auto flex items-center justify-between bg-gray-400 ">
      <img src={logo} alt="logo" className="w-16 h-16 py-0.4 text-white px-0" />
      <div className="flex item-center">
        <div className="flex mt-2 mr-2">
          <div className="my-2 px-1">
            <BiPhoneCall className="text-[30px] mr-2" />
          </div>

          <div className="px-1 ">
            {user.email ? (
              <div className="font-bold text-gray-600">{user.email}</div>
            ) : (
              <Link to="/login" className="bg-black text-white p-2 rounded-md">
                Login
              </Link>
            )}
          </div>

          <div className="relative" onClick={() => setIsShowCart(true)}>
            <GiShoppingCart className="text-[30px]" />
            {cart.length > 0 && (
              <span className="bg-blue-700 text-white w-5 h-5 rounded-full absolute -top-4 left-2 text-center leading-2">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
