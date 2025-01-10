import RestaurentCard from "./RestaurentCard";
import { useState } from "react";
import { restaurantsList } from "../../utils/mockData";
const Body = () => {
  const handleClick = () => {
    const filteredListOfRestaurents = listOfRestaurents.filter(
      (x) => x.rating >= 4.5
    );
    setListOfRestaurents(filteredListOfRestaurents);
  };
  const [listOfRestaurents, setListOfRestaurents] = useState(restaurantsList);
  // const [listOfRestaurents, setListOfRestaurents] = useState([
  //   {
  //     id: 1,
  //     name: "Pizza Palace",
  //     rating: 3.5,
  //     menu: [
  //       { name: "Margherita Pizza", price: 12.99 },
  //       { name: "Pepperoni Pizza", price: 14.99 },
  //       { name: "Spaghetti Bolognese", price: 16.99 },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Dominos",
  //     rating: 5,
  //     menu: [
  //       { name: "Margherita Pizza", price: 12.99 },
  //       { name: "Pepperoni Pizza", price: 14.99 },
  //       { name: "Spaghetti Bolognese", price: 16.99 },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "KFC",
  //     rating: 4,
  //     menu: [
  //       { name: "Margherita Pizza", price: 12.99 },
  //       { name: "Pepperoni Pizza", price: 14.99 },
  //       { name: "Spaghetti Bolognese", price: 16.99 },
  //     ],
  //   },
  // ]);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleClick}>
          Top-Rated
        </button>
      </div>
      <div className="restaurent-container">
        {listOfRestaurents &&
          listOfRestaurents.map((res) => (
            <RestaurentCard key={res.id} res1={res} />
          ))}
      </div>
    </div>
  );
};
export default Body;
