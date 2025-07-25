// src/pages/Wishlist.jsx
import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import { useNavigate } from 'react-router-dom';

export default function Wishlist() {
  const { wishlistItems, toggleWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    navigate('/buynow', { state: { product } });
  };

  return (
    <div className="min-h-screen pt-20 bg-[#FAF9F6] px-4 md:px-12">
      <h2 className="text-3xl font-bold mb-6">My Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlistItems.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded shadow-md flex flex-col justify-between"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-cover rounded mb-3"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600 mb-2">{product.brand}</p>
              <p className="text-primary font-bold mb-4">₹{product.price}</p>

              <div className="flex justify-between gap-2">
                <button
                  onClick={() => toggleWishlist(product)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
                >
                  Remove
                </button>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
