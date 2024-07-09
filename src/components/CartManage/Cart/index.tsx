import {
  useCartSelectors,
  // , useCartStore
} from "../../../store/cart-store";

const Cart = () => {
  // const { cart, removeFromCart, clearCart } = useCartStore((state) => ({
  //   cart: state.cart,
  //   removeFromCart: state.removeFromCart,
  //   clearCart: state.clearCart,
  // }));
  const cart = useCartSelectors.use.cart();
  const removeFromCart = useCartSelectors.use.removeFromCart();
  const clearCart = useCartSelectors.use.clearCart();

  return (
    <div>
      s<h2>Cart</h2>
      {cart.map((product: any, index: any) => (
        <div key={index}>
          <span>{product.name}</span>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
      ))}
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
};

export default Cart;
