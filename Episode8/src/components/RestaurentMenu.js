import React from "react";
import Shimmar from "./Shimmar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const RestaurentMenu = () => {
  const resId = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=234875&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json);
  };
  const [resInfo, setResInfo] = useState([]);
  console.log(resInfo);
  return resInfo === null || resId === null ? (
    <Shimmar />
  ) : (
    <div>
      <h2>KFC</h2>
    </div>
  );
};
export default RestaurentMenu;
