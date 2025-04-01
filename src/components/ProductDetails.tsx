// src/pages/ProductDetails.tsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/setCartCount";

// Combined array of products (for demo purposes)
const allSweets = [
    { id: 1, name: "Sangam Burfi", price: 312.5, image: "/assets dropdown Items/sangam-burfi-2.jpg", inStock: true },
    { id: 2, name: "Kesar Kaju Katli", price: 337.5, image: "/assets dropdown Items/kesar-kaju-katli-2.jpg", inStock: true },
    { id: 3, name: "Kaju Ball", price: 337.5, image: "/assets dropdown Items/kaju-ball-2.jpg", inStock: true },
    { id: 4, name: "Kaju Roll", price: 350.0, image: "/assets dropdown Items/kaju-king-2.jpg", inStock: false },
    { id: 5, name: "Badam Katli", price: 375.0, image: "/assets dropdown Items/badam-katli-2.jpg", inStock: true },
  { id: 6, name: "Badam Pista Roll", price: 425.0, image: "/assets dropdown Items/badam-pista-roll-2.jpg", inStock: true },
  { id: 7, name: "Badam Malai Burfi", price: 425.0, image: "/assets dropdown Items/badam-malai-burfi-2.jpg", inStock: true },
  { id: 8, name: "Special Mysore Pak", price: 275.0, image: "/assets dropdown Items/spl-mysore-pak-GH2.jpg", inStock: true },
  { id: 9, name: "Long Jamun", price: 300.0, image: "/assets dropdown Items/long-jamun-GH2.jpg", inStock: true },
  { id: 10, name: "Soan Papdi", price: 350.0, image: "/assets dropdown Items/soan-papdi-GS2.jpg", inStock: false },
  { id: 11, name: "Rasmalai", price: 280.0, image: "/assets dropdown Items/rasmalai-MS2.jpg", inStock: true },
  { id: 12, name: "Special Milk Peda", price: 260.0, image: "/assets dropdown Items/spl-cow-milk-peda-MS2.jpg", inStock: true },
  { id: 13, name: "ButterScotch Burfi", price: 320.0, image: "/assets dropdown Items/butterscotch-burfi-MS2.jpg", inStock: false },
  { id: 14, name: "Almond Khaleeji", price: 350.0, image: "/assets dropdown Items/almond-khaleeji-DS2.JPG", inStock: true },
  { id: 15, name: "Khajur Pak", price: 400.0, image: "/assets dropdown Items/khajur-pak-DS2.jpg", inStock: true },
  { id: 16, name: "Special Madras Mixture", price: 150.0, image: "/assets/savouries-dropdown-items/spl-madras-mixture-Sev.jpg", inStock: true },
  { id: 17, name: "Navdhanyam Mixture", price: 120.0, image: "/assets/savouries-dropdown-items/navdhanyam-mixture-sev.jpg", inStock: true },
  { id: 18, name: "Mota Mixture", price: 130.0, image: "public/assets/savouries-dropdown-items/mota-mixture-sev.jpg", inStock: false },
  { id: 19, name: "Dry Fruit Mixture", price: 140.0, image: "/assets/savouries-dropdown-items/dry-fruit-mixture-sev.jpg", inStock: true },
  { id: 20, name: "Khara Boondhi", price: 140.0, image: "/assets/savouries-dropdown-items/khara-boondhi-sev.jpg", inStock: true },
  { id: 21, name: "Palak Sev", price: 140.0, image: "/assets/savouries-dropdown-items/palak-sev-sev.jpg", inStock: true },
  { id: 22, name: "Banana Chips", price: 100.0, image: "/assets/savouries-dropdown-items/banana-chips-2.jpg", inStock: true },
  { id: 23, name: "Masala Potato Chips", price: 110.0, image: "/assets/savouries-dropdown-items/masala-potato-chips-2.jpg", inStock: true },
  { id: 24, name: "Ribbon Murukku", price: 130.0, image: "/assets/savouries-dropdown-items/ribbon-murukku-2.jpg", inStock: false },
  { id: 25, name: "Andhra Murukku", price: 90.0, image: "/assets/savouries-dropdown-items/andhra-murukku-2.jpg", inStock: true },
  { id: 26, name: "Butter Murukku", price: 120.0, image: "/assets/savouries-dropdown-items/butter-murukku-2.jpg", inStock: true },
  { id: 27, name: "Namkeen Paara", price: 130.0, image: "/assets/savouries-dropdown-items/namkeen-paara-2.jpg", inStock: true },
  { id: 28, name: "Dry Roasted Pepper Cashew", price: 250.0, image: "/assets/savouries-dropdown-items/dry-roasted-pepper-cashew-3.jpg", inStock: true },
  { id: 29, name: "Dry Roasted Sriracha Cashew", price: 120.0, image: "/assets/savouries-dropdown-items/dry-roasted-sriracha-cashew-3.jpg", inStock: true },
  { id: 30, name: "Bajra mix Salted", price: 300.0, image: "/assets/savouries-dropdown-items/bajra-mix-salted-3.jpg", inStock: false },
  { id: 31, name: "9 in 1 Mixture Pudina", price: 300.0, image: "/assets/savouries-dropdown-items/9-in-1-mixture-pudina-4.jpg", inStock: false },
  { id: 32, name: "Dry Fruit Box (250gm)", price: 800.0, image: "/assets/savouries-dropdown-items/dry-fruit-box-4.jpg", inStock: true },
  { id: 33, name: "Royal Dry Fruit Tin (250gm)", price: 600.0, image: "/assets/savouries-dropdown-items/royal-dry-fruit-tin-250g-4.jpg", inStock: true },
];

const ProductDetails: React.FC = () => {
  // Extract the 'id' from the URL
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  // Find the product that matches the id
  const product = allSweets.find((item) => item.id === productId);

  // Local state for selected weight and quantity
  const [selectedWeight, setSelectedWeight] = useState("250g");
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  // If product is not found, display an error message
  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <h2>Product not found.</h2>
      </div>
    );
  }

  // Function to add the product to the cart
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      weight: selectedWeight,  // e.g., "250g"
      quantity,
    });
    console.log("Added to cart:", product.name, selectedWeight, quantity);
  };

  const handleBuyNow = () => {
    console.log("Buy Now:", product.name, selectedWeight, quantity);
    // Navigate to checkout or perform the buy now action here.
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-4">₹ {product.price}</p>
          {/* <p className="text-gray-600 mb-4">{product.description}</p> */}

          {/* Weight Options */}
          <div className="mb-4">
            <label className="font-semibold mr-2">Weight:</label>
            <select
              value={selectedWeight}
              onChange={(e) => setSelectedWeight(e.target.value)}
              className="border p-1 rounded"
            >
              <option value="250g">250g</option>
              <option value="500g">500g</option>
              <option value="1kg">1Kg</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label className="font-semibold mr-2">Quantity:</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border p-1 rounded w-20"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Buy It Now
            </button>
          </div>

          {/* Out of Stock Message */}
          {!product.inStock && (
            <p className="text-red-500 mt-4">Out of stock</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
