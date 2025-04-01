const RestaurantCard = (props) => {
    const { resData } = props;
    const { 
        cloudinaryImageId, 
        name, 
        cuisines, 
        avgRating, 
        costForTwo, 
        sla 
    } = resData.info;  // Extract from `info` object

    return (
        <div className="res-card">
            <img 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320/${cloudinaryImageId}`} 
                alt={name} 
                className="res-logo"
            />

            <h3>{name || "Restaurant Name Unavailable"}</h3>
            <h4>{cuisines?.join(", ") || "Cuisines Unavailable"}</h4>
            <h5>⭐ {avgRating || "No Ratings"} Stars</h5>
            <h5>💰 {costForTwo || "Price Unavailable"}</h5>
            <h5>🚴 {sla?.deliveryTime ? `${sla.deliveryTime} minutes` : "ETA Unknown"}</h5>
        </div>
    );
};

export default RestaurantCard;
