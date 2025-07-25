import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import allProducts from '../data/Products';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [readMore, setReadMore] = useState(false);

  const product = allProducts.find(p => p.id.toString() === id);
  if (!product) return <div className="p-6 text-center text-red-500 text-xl">Product not found.</div>;

  const descriptionLimit = 200;

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left: Image */}
        <div className="flex flex-col items-center justify-start">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-contain rounded-lg border"
          />
          <div className="w-full flex gap-4 mt-6">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white text-lg py-3 rounded-lg transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => window.location.href = `/buy-now/${product.id}`}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-lg transition"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Right: Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>

          {/* Description with Read More */}
          <p className="text-gray-700 text-lg">
            {readMore || product.description.length <= descriptionLimit
              ? product.description
              : `${product.description.slice(0, descriptionLimit)}...`}
            {product.description.length > descriptionLimit && (
              <button
                onClick={() => setReadMore(!readMore)}
                className="text-blue-600 ml-2 underline"
              >
                {readMore ? 'Show Less' : 'Read More'}
              </button>
            )}
          </p>

          <div className="space-y-2 text-md text-gray-600">
            <p><span className="font-semibold">Brand:</span> {product.brand}</p>
            <p><span className="font-semibold">Category:</span> {product.category}</p>
            <p><span className="font-semibold">Available Colors:</span> {product.colors?.join(', ') || 'N/A'}</p>
            <p><span className="font-semibold">Discount:</span> {product.discount || 0}% off</p>
            <p><span className="font-semibold">Price:</span> <span className="text-2xl font-bold text-green-700">₹{product.price}</span></p>
            <p><span className="font-semibold">Return Policy:</span> 7 Days Return Applicable</p>
            <p><span className="font-semibold">Warranty:</span> 1 Year Brand Warranty</p>
            <p><span className="font-semibold">Delivery:</span> Free delivery in 3-5 working days</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Specifications</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>High-quality materials used</li>
              <li>Durable and long-lasting</li>
              <li>Eco-friendly packaging</li>
              <li>24x7 customer support available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
