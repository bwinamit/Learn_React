import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <h2 className="text-xl text-center text-gray-600">
          Your cart is empty. Add some delicious items!
        </h2>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {cartItems.length} item(s) in your cart
            </h2>
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
            >
              Clear Cart
            </button>
          </div>

          <div className="text-gray-800">
            <ItemList items={cartItems} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
