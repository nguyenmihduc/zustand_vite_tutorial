import "./App.css";
import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { PRODUCTS } from "./components/ProductList/products";
import { useCartStore } from "./store/cart-store";

const App = () => {
  const [, setCart] = useState([]);
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="App">
      <h3>Welcome to the Store</h3>
      <ProductList products={PRODUCTS} setCart={setCart} />
      <Cart setCart={setCart} cart={cart} />
    </div>
  );
};

export default App;
