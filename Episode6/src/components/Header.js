import { LOGO } from "../../utils/constants";
import { useState } from "react";
const Header = () => {
  console.log("header rendering");
  const [loginButton, setLoginButton] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginButton === "login"
                ? setLoginButton("logout")
                : setLoginButton("login");
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
