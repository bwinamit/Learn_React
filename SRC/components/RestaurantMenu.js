import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const restaurantName =
    resInfo?.cards?.find((c) => c?.card?.card?.info?.name)?.card?.card?.info?.name || "Restaurant";

  const itemCards =
    resInfo?.cards
      ?.find((c) => c?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length > 0)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">{restaurantName} Menu</h1>

      <ul className="space-y-6">
        {itemCards.map((item) => (
          <li
            key={item.card.info.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4"
          >
            <div className="menu-item">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">{item.card.info.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{item.card.info.description || "No description available."}</p>
              <p className="text-green-600 font-medium text-base">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
