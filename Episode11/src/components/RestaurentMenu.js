import React from "react";
import Shimmar from "./Shimmar";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";
const RestaurentMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const cleanedResId = resId.replace(/^:/, "");
  const resInfo = useRestaurentMenu(cleanedResId);
  if (resInfo === null) return <Shimmar />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card.info;
  const { itemCards } =
    resInfo?.data?.cards?.[4].groupedCard?.cardGroupMap.REGULAR?.cards?.[2].card
      ?.card;
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
    <div className="text-center">
      <h1 className="font-bold mt-5 mb-3 text-4xl">{name}</h1>
      <p className="font-bold text-2xl">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => {
        return (
          <RestaurentCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={index === showIndex}
          />
        );
      })}
    </div>
  );
};
export default RestaurentMenu;
