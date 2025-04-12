import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// ✅ Correct context import
import UserInfo from "../utils/UserInfo"; // Make sure the path is correct and file is named properly

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard);

  // ✅ Context usage for LoggedInUser and setUserName (must be inside a Provider)
 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.594566&offset=0&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      const restaurantData =
        json?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(restaurantData);
      setFilteredRestaurants(restaurantData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return (
      <h1 className="text-center mt-10 text-xl text-red-600 font-semibold">
        ⚠️ Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserInfo);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search restaurants..."
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm w-full md:w-1/3"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* ✅ Username input controlled by context */}
      <div className="flex flex-col">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm w-full md:w-1/3"
          value={loggedInUser} // ✅ This is now connected to context
          onChange={(e) => setUserName(e.target.value)} // ✅ This updates context value
        />
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`city/hyderabad/${restaurant.info.id}`}
          >
            {restaurant.info.avgRating > 4.5 ? (
              <RestaurantCardWithPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
