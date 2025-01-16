import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
// import { restaurantsList } from "../../utils/mockData";
import Shimmar from "./Shimmar";
const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [inputText, setInputText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.057437&lng=78.9381729&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    setListOfRestaurents(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setSearchResults(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
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
        {listOfRestaurents.map((res) => (
          <RestaurentCard key={res.info.id} res1={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
