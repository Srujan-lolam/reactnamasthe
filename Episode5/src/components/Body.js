import RestaurentCard from "./RestaurentCard";
let listOfRestaurents = [
  {
    id: 1,
    name: "Pizza Palace",
    rating: 3.5,
    menu: [
      { name: "Margherita Pizza", price: 12.99 },
      { name: "Pepperoni Pizza", price: 14.99 },
      { name: "Spaghetti Bolognese", price: 16.99 },
    ],
  },
  {
    id: 2,
    name: "Dominos",
    rating: 5,
    menu: [
      { name: "Margherita Pizza", price: 12.99 },
      { name: "Pepperoni Pizza", price: 14.99 },
      { name: "Spaghetti Bolognese", price: 16.99 },
    ],
  },
  {
    id: 3,
    name: "KFC",
    rating: 4,
    menu: [
      { name: "Margherita Pizza", price: 12.99 },
      { name: "Pepperoni Pizza", price: 14.99 },
      { name: "Spaghetti Bolognese", price: 16.99 },
    ],
  },
];
const handleClick = () => {
  listOfRestaurents = listOfRestaurents.filter((x) => x.rating >= 4);
  console.log(listOfRestaurents);
};
const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleClick}>
          Top-Rated
        </button>
      </div>
      <div className="restaurent-container">
        {listOfRestaurents.map((res) => (
          <RestaurentCard key={res.id} res1={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
