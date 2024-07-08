import { useCartStore } from "../../store/cart-store";

const ProductList = ({ products, setCart }: any) => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div>
      {products?.map((product: any, index: any) => {
        return (
          <div key={index}>
            <h3>{product.name}</h3>
            <h3>{product.description}</h3>
            <button onClick={() => addToCart(product)}>Add to card</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
