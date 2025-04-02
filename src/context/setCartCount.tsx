// import React, { createContext, useContext, useState, ReactNode } from "react";

// export interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   weight: string;
//   quantity: number;
// }

// interface CartContextType {
//   cartItems: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (item: CartItem) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.id === item.id);
//       if (existing) {
//         // Increase quantity if already in cart
//         return prev.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
//         );
//       }
//       // Otherwise, add a new item
//       return [...prev, item];
//     });
//   };

//   const removeFromCart = (id: number) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };



import React, { createContext, useContext, useState, ReactNode } from "react";

// Product Interface
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  weight: string;
  quantity: number;
}
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   weight: string;
//   quantity: number;
// }

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};


// CartItem Interface (Extending Product)
export interface CartItem extends Product {}

// Cart Context Type Definition
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

// Creating Cart Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom Hook to Use Cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Cart Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add to Cart Function
  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        // Increase quantity if already in cart
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      // Add new item
      return [...prev, item];
    });
  };

  // Remove from Cart Function
  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear Cart Function
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// App Component Props Interface
interface AppProps {
  products: Product[];
}

// App Component to Display Products
const App: React.FC<AppProps> = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ₹{product.price}</p>
          <p>Weight: {product.weight}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default App;
