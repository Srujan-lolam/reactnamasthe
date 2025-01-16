import { IMAGE } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
const RestaurentCard = (props) => {
  const navigate = useNavigate();
  const { res1 } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, id } =
    res1.info;
  return (
    <div
      className="restaurent-card"
      onClick={() => {
        navigate(`./restaurent/:${id}`);
      }}
    >
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
