import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch();
    const handleClick = (item) => {
        dispatch(addItem(item));
        console.log(item);
    };
    return (
      <div>
        {items.map((item) => {
          const info = item.card.info;
          const imageUrl = info.imageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${info.imageId}`
            : 'https://via.placeholder.com/64';
  
          return (
            <div
              key={info.id}
              className="flex justify-between items-start border-b py-6"
            >
              {/* Left: Text content */}
              <div className="w-3/4 pr-4">
                <h3 className="text-base font-semibold text-gray-800">
                  {info.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                <span className="text-base font-semibold text-gray-800 mt-2 block">
                  ₹
                  {info.price
                    ? info.price / 100
                    : info.defaultPrice / 100}
                </span>
              </div>
  
              {/* Right: Image and Add button */}
              <div className="w-1/4 flex flex-col items-center">
                <img
                  src={imageUrl}
                  alt={info.name}
                  className="w-24 h-24 object-cover rounded-md mb-2"
                />
                <button onClick={()=>handleClick(item)} className="border border-gray-300 px-4 py-1 text-green-600 text-sm font-medium rounded hover:shadow-sm">
                  Add +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default ItemList;
  