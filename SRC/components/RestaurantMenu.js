import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const restaurantName =
    resInfo?.cards?.find((c) => c?.card?.card?.info?.name)?.card?.card?.info
      ?.name || "Restaurant";

  const itemCards =
    resInfo?.cards?.find(
      (c) => c?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length > 0
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ||
    [];

  // console.log(resInfo?.cards
  //   ?.find((c) => c?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length > 0)
  //   ?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const itemCategory =
    resInfo?.cards
      ?.find((c) => c?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length > 0)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) || [];

  // console.log(itemCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {restaurantName} Menu
      </h1>

      {itemCategory.map((category,index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItems={index===showIndex?true:false}
            setShowIndex={()=>{setShowIndex(index)}}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
