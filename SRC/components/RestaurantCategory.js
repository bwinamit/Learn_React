import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="bg-white shadow-sm rounded-md px-4 py-3 my-4 cursor-pointer hover:shadow-md transition-shadow">
      {/* Header Row */}
      <div className="flex justify-between items-center" onClick={handleClick}>
        <h2 className="text-base font-semibold text-gray-800">
          {data.title} ({data.itemCards.length})
        </h2>
        <span className="text-xl text-gray-500">▾</span>
      </div>

      {/* Item list section */}
      {showItems && (
        <div className="mt-4 border-t pt-4">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
