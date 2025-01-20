import { IMAGE } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
const RestaurentCard = (props) => {
  const navigate = useNavigate();
  const { res1 } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, id } =
    res1.info;
  return (
    <div
      className="m-1 p-4 w-[230px] bg-gray-100 hover:bg-gray-200 rounded-lg"
      onClick={() => {
        navigate(`./restaurent/:${id}`);
      }}
    >
      <div className="image-pic">
        <img className=" rounded-lg" src={IMAGE + cloudinaryImageId} />
      </div>
      <h3 className="font-bold py-2">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export const RestaurentPromoted = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-slate-500 absolute text-white  rounded-lg m-2 p-2">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
