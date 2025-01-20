import React from "react";
import Shimmar from "./Shimmar";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu();
  const itemCards =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card;
  const categories =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  return resInfo === null || resId === null ? (
    <Shimmar />
  ) : (
    <div>
      <ul>
        {categories.map((res) => {
          return <RestaurentCategory />;
        })}
      </ul>
    </div>
  );
};
export default RestaurentMenu;
