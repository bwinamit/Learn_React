import { useEffect, useState } from "react";
const useRestaurantMenu =(resId)=>{
    const [resInfo, setResInfo] = useState(null);
    
    useEffect(() => {
        const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3992392&lng=78.3327187&restaurantId="+resId
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
        };
        fetchMenu();
    }, []);
    
    return resInfo;
}
export default useRestaurantMenu;