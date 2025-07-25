import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [wishlisted, setWishlisted] = useState(false);
  const navigate = useNavigate();

  const handleWishlistToggle = (e) => {
    e.stopPropagation(); // Prevent click propagation
    setWishlisted(!wishlisted);
  };

  const handleBuyNow = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking Buy Now
    navigate(`/buy-now/${product.id}`);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden flex flex-col relative transition-all hover:shadow-lg"
    >
      {/* Wishlist Icon */}
      <button
        className="absolute top-2 right-2 z-10 text-red-600 text-xl"
        onClick={handleWishlistToggle}
      >
        {wishlisted ? <FaHeart /> : <FaRegHeart />}
      </button>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-cover"
      />

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
          <p className="text-primary font-bold text-base mb-3">₹{product.price}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-2 mt-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-2 rounded-md transition"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded-md transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
