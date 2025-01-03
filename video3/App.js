import React from "react";
import ReactDOM from "react-dom/client";
import "/index.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://th.bing.com/th/id/OIP.ge43PwYkZw6Bb1MrUtvY0QAAAA?rs=1&pid=ImgDetMain"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurentCard = (props) => {
  return (
    <div className="restaurent-card">
      <img
        className="res-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/1920px-%22Hyderabadi_Dum_Biryani%22.jpg"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.3 stars</h4>
      <h4>{props.Time}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="searchInput">
        <h3>Search</h3>
      </div>
      <div className="restaurent-container">
        <RestaurentCard
          resName="Meghana foods"
          cuisine="Biryani, North Indian, Asian"
          Time="38 minutes"
        />
        <RestaurentCard
          resName="KFC"
          cuisine="Chicken, North Indian, American"
          Time="28 minutes"
        />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
