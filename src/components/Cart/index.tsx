import { useCartStore } from "../../store/cart-store";

const Cart = ({ cart, setCart }: any) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  return (
    <div>
      <h2>Cart</h2>
      {cart.map((product: any, index: any) => (
        <div key={index}>
          <span>{product.name}</span>
          <button onClick={() => removeFromCart(product)}>Remove</button>
        </div>
      ))}
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
};

export default Cart;
