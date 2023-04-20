import { Cart } from '@/lib/models/Cart';
import { createContext, useState } from 'react';

type CartContextType = {
  cart: Cart[];
  addItem?: (item: Cart, quantity: number) => void;
  removeItem?: (id: number) => void;
  clearCart?: () => void;
};

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
});

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([]);

  console.log(cart);

  const isInCart = (id: number) => {
    return cart.some((item) => item.id === id);
  };

  const addItem = (item: Cart, quantity: number) => {
    if (!isInCart(item.id)) {
      setCart([...cart, { ...item, quantity }]);
    } else {
      console.log('Item already in cart');
    }
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
