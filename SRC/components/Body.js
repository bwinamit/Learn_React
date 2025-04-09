import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    // State to store all restaurants fetched from the API
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    
    // State to store filtered restaurants (for filtering functionality)
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.594566&offset=0&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await response.json();

            // 🔥 CHANGE 1: Dynamically find the correct card containing restaurant data
            const restaurantData =
                json?.data?.cards
                    ?.find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                    ?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            // 🔥 CHANGE 2: Update both listOfRestaurants and filteredRestaurants with fetched data
            setListOfRestaurants(restaurantData);
            setFilteredRestaurants(restaurantData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
 const isOnline = useOnlineStatus();
    if (!isOnline) {
        return <h1>Looks like you are offline. Please check your internet connection.</h1>;
    }
    // Conditional Rendering: If listOfRestaurants is empty, show Shimmer component
    return listOfRestaurants.length === 0? <Shimmer /> :(
        <div className="body">
            <div className="filter-btn">
                <input type="text" className="search" onChange={(e)=>{
                    setSearchText(e.target.value);
                }} />
                <button className="searchClick" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((restaurant) =>
                        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                    setFilteredRestaurants(filteredList);
                    
                }}>Search</button>
                <button
                    className="topRated"
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
            <div className="res-container">
  {filteredRestaurants.map((restaurant) => (
    // ✅ Moved `key` here to the outermost element returned from map
    <Link 
      key={restaurant.info.id} 
      to={"city/hyderabad/" + restaurant.info.id}
    >
      {/* ⛔️ Removed `key` from here, it's no longer needed */}
      <RestaurantCard resData={restaurant} />
    </Link>
  ))}
</div>

        </div>
    );
};

export default Body;
