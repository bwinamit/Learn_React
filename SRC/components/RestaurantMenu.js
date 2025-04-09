import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);

  
  if (!resInfo) return <Shimmer />;

  // Sometimes Swiggy API structure varies a bit, check what index holds the restaurant info
  const restaurantName =
    resInfo?.cards?.find(
      (c) => c?.card?.card?.info?.name
    )?.card?.card?.info?.name || "Restaurant";

  const itemCards =resInfo?.cards?.find(
    (c) => c?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length > 0
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{restaurantName}</h1>
      <ul className="menu-list">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            <div className="menu-item">
              <h2>{item.card.info.name}</h2>
              <p>{item.card.info.description}</p>
              <p>₹{item.card.info.price / 100}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
