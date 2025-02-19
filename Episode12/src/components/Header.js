import { LOGO } from "../../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginButton, setLoginButton] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  //useSelector is a hook that is used for subscribing to the app store
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between shadow-lg mb-2 bg-emerald-200">
      <div className="logo-container">
        <img className="w-32" src={LOGO} />
      </div>
      <div className="flex">
        <ul className="flex p-4 m-4 items-center">
          <li className="p-2">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2">
            <Link to="./about">About</Link>
          </li>
          <li className="p-2">
            <Link to="./contact">Contact Us</Link>
          </li>
          <li className="p-2">
            <Link to="./grocery">Grocery</Link>
          </li>

          <li className="p-2 font-bold text-xl">
            <Link to="./cart">Cart - {cartItems.length}</Link>
          </li>
          <button
            className="p-2"
            onClick={() => {
              loginButton === "login"
                ? setLoginButton("logout}")
                : setLoginButton("login");
            }}
          >
            {loginButton}
          </button>
          <p>{loggedInUser}</p>
        </ul>
      </div>
    </div>
  );
};

export default Header;
