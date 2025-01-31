import { IMAGE } from "../../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="border-gray-300 m-2 p-2 border-b-2 text-left"
          >
            {/* {console.log(item)} */}
            <div className="flex justify-between">
              <div className="w-10/12">
                <span className="font-semibold">{item.card.info.name}</span>
                <span className="font-semibold">
                  {" "}
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
                <p className="text-sm">{item.card.info.description}</p>
              </div>
              <div>
                <img
                  src={IMAGE + item.card.info.imageId}
                  className="w-16 rounded-md"
                />
                <button className="bg-black text-white rounder-lg w-10 ml-2">
                  Add+
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
