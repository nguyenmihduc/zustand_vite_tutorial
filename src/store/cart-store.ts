import { create } from "zustand";

type CartStore = {
  cart: Array<any>;
  addToCart: (product: any) => void;
  removeFromCart: (productId: any) => void;
  clearCart: () => void;
};
export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product: any) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId: any) => set((state) => ({ cart: [state.cart.filter((item) => item.id !== productId)] })),
  clearCart: () => set(() => ({ cart: [] })),
}));