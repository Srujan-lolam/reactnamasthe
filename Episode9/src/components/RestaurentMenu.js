import React from "react";
import Shimmar from "./Shimmar";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../../utils/useRestaurentMenu";
const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu();
  const Menu =
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
