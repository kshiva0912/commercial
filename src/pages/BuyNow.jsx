import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import allProducts from '../data/Products';

export default function BuyNow() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const found = allProducts.find(p => p.id === parseInt(id));
    if (found) {
      setProduct(found);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handlePurchase = () => {
    navigate('/invoice', { state: { product, quantity } });
  };

  if (!product) return <div className="text-center py-20 text-xl text-gray-600">Loading product...</div>;

  const totalPrice = product.price * quantity;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-gradient-to-br from-[#f8f9fa] to-[#e6e6e6] rounded-2xl shadow-xl mt-12">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
            <p className="text-xl text-green-600 font-semibold mb-4">₹{product.price.toLocaleString()}</p>
            <p className="text-gray-600 mb-6 text-sm">This is a high-quality product, crafted with precision to meet your needs.</p>

            <label className="block mb-1 font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-24 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
            />

            <div className="text-lg font-medium text-gray-800 mb-4">
              Total Price: <span className="text-blue-700 font-semibold">₹{totalPrice.toLocaleString()}</span>
            </div>
          </div>

          <button
            onClick={handlePurchase}
            className="mt-4 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition duration-300"
          >
            🛒 Confirm Purchase
          </button>
        </div>
      </div>
    </div>
  );
}
