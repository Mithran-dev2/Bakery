import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Define the shape of the cart context
interface CartContextType {
  cartCount: number;
  setCartCount: (count: number) => void;
}

// Create context with default values
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartCount, setCartCount] = useState<number>(0);

  // Load cart count from localStorage on mount
  useEffect(() => {
    const storedCount = localStorage.getItem("cartCount");
    if (storedCount) {
      setCartCount(parseInt(storedCount, 10));
    }
  }, []);

  // Save cart count to localStorage on update
  useEffect(() => {
    localStorage.setItem("cartCount", cartCount.toString());
  }, [cartCount]);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using cart count in other components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
