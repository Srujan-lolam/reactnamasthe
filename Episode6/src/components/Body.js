import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import { restaurantsList } from "../../utils/mockData";
import Shimmar from "./Shimmar";
const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [inputText, setInputText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    // setTimeout(() => {
    // }, 500);
    fetchData();
  }, []);

  const fetchData = () => {
    setListOfRestaurents(restaurantsList);
    setSearchResults(restaurantsList);
  };
  const handleSearch = () => {
    const searchResults = listOfRestaurents.filter((res) => {
      return res?.name.toLowerCase().includes(inputText.toLowerCase());
    });
    setSearchResults(searchResults);
  };
  const handleClick = () => {
    const filteredListOfRestaurents = listOfRestaurents.filter(
      (x) => x.rating >= 4.5
    );
    setListOfRestaurents(filteredListOfRestaurents);
  };

  return listOfRestaurents.length === 0 ? (
    <Shimmar />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchInput"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleClick}>
          Top-Rated
        </button>
      </div>
      <div className="restaurent-container">
        {searchResults.map((res) => (
          <RestaurentCard key={res.id} res1={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;

// const fetchData = () => {
//   const data = fetch("https://www.swiggy.com/restaurants");
//   data
//     .then((res) => {
//       const res1 = res.json();
//       return res1;
//     })
//     .then((res2) => {
//       console.log(res2);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
