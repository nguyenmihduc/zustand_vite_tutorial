import ProductList from "./ProductList";
import { PRODUCTS } from "./products";
import Cart from "./Cart";

const CartManage = () => {
  return (
    <div className="App">
      <h3>Welcome to the Store</h3>
      <ProductList products={PRODUCTS} />
      <Cart />
    </div>
  );
};

export default CartManage;
