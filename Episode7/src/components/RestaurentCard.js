import { IMAGE } from "../../utils/constants";
const RestaurentCard = (props) => {
  const { res1 } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    res1.info;
  return (
    <div className="restaurent-card">
      <div className="image-pic">
        <img className="res-logo" src={IMAGE + cloudinaryImageId} />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};
export default RestaurentCard;
