import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
// import { restaurantsList } from "../../utils/mockData";
import Shimmar from "./Shimmar";
import useOnlineStatus from "../../utils/useOnlineStatus";
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
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Look's like you are offline.please check your internet connection...
      </h1>
    );
  }
  return listOfRestaurents.length === 0 ? (
    <Shimmar />
  ) : (
    <div className="body">
      <div className="flex m-4">
        <div className="search">
          <input
            type="text"
            className="m-1 p-1 border border-solid border-black"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            className="px-2 py-1 ml-1 bg-green-200 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          className="px-2 py-1  m-1 rounded-lg bg-green-200"
          onClick={handleClick}
        >
          Top-Rated
        </button>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {listOfRestaurents.map((res) => (
          <RestaurentCard key={res.info.id} res1={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
