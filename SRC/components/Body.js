import RestaurantCard from "./RestaurantCard";
import { resObjList } from "../utils/mockData";
import { useState } from "react";
const Body=()=>{
   const [ListofResturants,setListofResturants]=useState(resObjList); 
    return(
       <div className="body">
         {/* <div className="search">Search</div> */}
         <div className="filter-btn">
            <button className="topRated" onClick={()=>{
                const filteredList=ListofResturants.filter((resObj)=>
                resObj.data.avgRating>4
                );
                setListofResturants(filteredList);
            }}>Top Rated Resturants</button>
         </div>
         <div className="res-container">
            {ListofResturants.map((Resturant)=>{
                return <RestaurantCard key={Resturant.data.id} resData={Resturant}/>
            })}
         </div>
       </div>
        )
}
export default Body;