import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Product from '../components/Product';

interface Product {
  id: string;
  title: string;
  image_url: string;
  singlePrice: number;
  quantity: number;
  productPrice: number;
  productShipping: string;
}

interface CartContext {
  cart: Product[];
  addToCart(item: Product): void;
  removeCart(): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const STORAGE_KEY_CART = '@TonMarketplace:cart';

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProductsCart(): Promise<void> {
      const response = await AsyncStorage.getItem(STORAGE_KEY_CART);

      if (response) {
        setCart([...JSON.parse(response)]);
      }
    }

    loadProductsCart();
  }, []);

  const increment = useCallback(
    async id => {
      const Products = cart.map(product => {
        if(product.id === id) {
          product.quantity += 1;
        }

        return product;
      });

      setCart(Products);

      await AsyncStorage.setItem(STORAGE_KEY_CART, JSON.stringify(cart));
    },
    [cart],
  );

  const decrement = useCallback(
    async id => {
      const Products = cart.map(product => {
        if(product.id === id) {
          product.quantity -= 1;
        }

        return product;
      }).filter(product => product.quantity > 0);

      setCart(Products)

      await AsyncStorage.setItem(STORAGE_KEY_CART, JSON.stringify(cart));
    },
    [cart],
  );

  const addToCart = useCallback(
    async (product: Product) => {
      const cartIndex = cart.find(c => c.id === product.id);

      if (cartIndex) {
        increment(product.id);

        return;
      }

      setCart([...cart, { ...product, quantity: 1 }]);
      await AsyncStorage.setItem(
        STORAGE_KEY_CART,
        JSON.stringify([...cart, { ...product, quantity: 1 }]),
      );
    },
    [cart, increment],
  );

  const removeCart = useCallback(async () => {
      await AsyncStorage.removeItem('@TonMarketplace:cart');
      setCart([]);
    },[]
  );

  const value = React.useMemo(
    () => ({ addToCart, removeCart, increment, decrement, cart }),
    [cart, addToCart, removeCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
