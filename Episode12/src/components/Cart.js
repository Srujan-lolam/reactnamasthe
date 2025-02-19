import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-5 p-5 font-bold text-center">
      <h1 className="text-xl">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          className="m-2 p-2 text-center bg-gray-500 text-white rounded-lg"
          onClick={handleClearCart}
        >
          clearCart
        </button>
        {cartItems.length === 0 && (
          <>
            <h1>The cart is empty ..please add items to the cart</h1>
          </>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
