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
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1"
    );
    const json = await res.json();
    setListOfRestaurents(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(listOfRestaurents);
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
        {console.log(listOfRestaurents)}
        {listOfRestaurents.map((res) => (
          <RestaurentCard key={res.info.id} res1={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
