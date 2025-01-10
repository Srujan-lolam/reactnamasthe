import { IMAGE } from "../../utils/constants";
const RestaurentCard = (props) => {
  const { res1 } = props;
  const { name, menu, rating, reviews } = res1;
  return (
    <div className="restaurent-card">
      <img className="res-logo" src={IMAGE} />
      <h3>{name}</h3>
      <h4>{menu.map((i) => i.name).join(",")}</h4>
      <h4>{rating}</h4>
    </div>
  );
};
export default RestaurentCard;
