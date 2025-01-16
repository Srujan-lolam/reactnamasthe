import React from "react";
import Shimmar from "./Shimmar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const RestaurentMenu = () => {
  const resId = useParams();
  useEffect(() => {
    fetchMenu();
    console.log("useeffect inseide resmenu");
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.057437&lng=78.9381729&restaurantId=1003414&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json);
  };
  const [resInfo, setResInfo] = useState(null);
  console.log(resInfo);
  var Menu =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card?.itemCards;
  return resInfo === null || resId === null ? (
    <Shimmar />
  ) : (
    <div>
      <ul>
        {Menu.map((res) => {
          return <li>{res.card.info.name}</li>;
        })}
      </ul>
    </div>
  );
};
export default RestaurentMenu;
