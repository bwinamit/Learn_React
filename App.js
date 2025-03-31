import React from "react";
import ReactDOM from "react-dom/client"; 

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXm-Lz1wqab2UY4q-vR2b1nEBH3NHEPpIsA&s" alt="" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
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



const resObjList = [
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "1",
            name: "Meghana Foods",
            city: "Bangalore",
            area: "BTM 2nd Stage",
            cloudinaryImageId: "v8xgqzj3b5kq6g9s5w7f",
            cuisines: ["Biryani", "North Indian", "Italian", "Chinese"],
            avgRating: 4.5,
            totalRatingsString: "1000+ ratings",
            sla: { deliveryTime: 30 },
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",
            resImage:"https://b.zmtcdn.com/data/pictures/chains/3/90863/9648c4bc721c38d0983383f71083e66b.jpg?fit=around|960:500&crop=960:500;*,*"
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "2",
            name: "Empire Restaurant",
            city: "Bangalore",
            area: "Indiranagar",
            cloudinaryImageId: "abc123xyz",
            cuisines: ["Mughlai", "Arabian", "Grill"],
            avgRating: 4.2,
            totalRatingsString: "500+ ratings",
            sla: { deliveryTime: 25 },
            costForTwo: 50000,
            costForTwoString: "₹500 FOR TWO",
            resImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnunxXCEXWAkHL8ovSgUio4pit4neU0uXprg&s"
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "3",
            name: "Truffles",
            city: "Bangalore",
            area: "Koramangala",
            cloudinaryImageId: "xyz789abc",
            cuisines: ["Burgers", "American", "Continental"],
            avgRating: 4.8,
            totalRatingsString: "2000+ ratings",
            sla: { deliveryTime: 20 },
            costForTwo: 60000,
            costForTwoString: "₹600 FOR TWO",
            resImage: "https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg="
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "4",
            name: "Rajdhani Thali",
            city: "Bangalore",
            area: "Whitefield",
            cloudinaryImageId: "def456uvw",
            cuisines: ["Gujarati", "Rajasthani", "Thali"],
            avgRating: 4.3,
            totalRatingsString: "700+ ratings",
            sla: { deliveryTime: 35 },
            costForTwo: 45000,
            costForTwoString: "₹450 FOR TWO",
            resImage: "https://b.zmtcdn.com/data/reviews_photos/e70/6238f7b0c96c1238af8ee51e453ade70_1578217250.jpg"
        }
    }
];




const Body=()=>{
    return(
       <div className="body">
         <div className="search">Search</div>
         <div className="res-container">
            {resObjList.map((Resturant)=>{
                return <RestaurantCard key={Resturant.data.id} resData={Resturant}/>
            })}
         </div>
       </div>
        )
}
const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


