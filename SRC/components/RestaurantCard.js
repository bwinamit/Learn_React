const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
    } = resData.info;
  
    return (
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320/${cloudinaryImageId}`}
          alt={name}
          className="w-full h-48 object-cover"
        />
  
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{name || "Restaurant Name Unavailable"}</h3>
          <h4 className="text-sm text-gray-500 mb-2 truncate">
            {cuisines?.join(", ") || "Cuisines Unavailable"}
          </h4>
  
          <div className="text-sm text-gray-700 space-y-1">
            <p>⭐ {avgRating || "No Ratings"} Stars</p>
            <p>💰 {costForTwo || "Price Unavailable"}</p>
            <p>🚴 {sla?.deliveryTime ? `${sla.deliveryTime} minutes` : "ETA Unknown"}</p>
          </div>
        </div>
      </div>
    );
  };
  const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div className="relative">
          <label className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded shadow-md z-10">
            PROMOTED
          </label>
          <RestaurantCard {...props} />
        </div>
      );
    };
  };
  
  
  export default RestaurantCard;
  export { withPromotedLabel };
  