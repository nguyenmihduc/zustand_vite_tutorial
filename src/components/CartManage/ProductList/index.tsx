import { useCartStore } from "../../../store/cart-store";

const ProductList = ({ products }: any) => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div>
      {products?.map((product: any, index: any) => {
        return (
          <div key={index}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to card</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
