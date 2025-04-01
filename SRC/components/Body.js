import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
    // State to store all restaurants fetched from the API
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    
    // State to store filtered restaurants (for filtering functionality)
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

    return (
        <div className="body">
            <div className="filter-btn">
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
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
