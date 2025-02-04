import ItemList from "./ItemList";
import { useState } from "react";
const RestaurentCategory = ({ data, setIndex, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  // const handleDropDown = () => {
  //   showItems ? setShowItems(false) : setShowItems(true);
  // }; // uncontrolled component
  const handleDropDown = () => {
    setShowIndex();
  }; // controlled component
  return (
    <div>
      <div className="bg-slate-100 shadow-lg w-8/12 mx-auto my-5 p-3">
        <div className="flex justify-between">
          <span
            className="font-medium text-lg cursor-pointer"
            onClick={handleDropDown}
          >
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* {showItems && <ItemList items={data.itemCards} />} uncontrolled component if we use this line  */}
        {setIndex && <ItemList items={data.itemCards} />}
        {/* // controlled component (showitems is passed from parent) */}
      </div>
    </div>
  );
};
export default RestaurentCategory;
