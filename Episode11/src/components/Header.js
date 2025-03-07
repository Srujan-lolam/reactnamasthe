import { LOGO } from "../../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Header = () => {
  const [loginButton, setLoginButton] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log("data = ", loggedInUser);
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
          <li className="p-2">Cart</li>
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
