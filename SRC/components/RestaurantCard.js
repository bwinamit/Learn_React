const RestaurantCard = (props) => {
    const { resData } = props;
    const { resImage, name, cuisines, avgRating, costForTwo, sla } = resData?.data;

    return (
        <div className="res-card">
            <img src={resImage} alt={name} className="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} Stars</h5>
            <h5>Rs {costForTwo / 100} for two</h5>
            <h5>{sla.deliveryTime} minutes</h5>
        </div>
    );
};
export default RestaurantCard;