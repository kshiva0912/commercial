import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Product fetch response is not an array:', data);
        }
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  const handleEdit = (product) => {
    navigate('/admin/products/edit', { state: product });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure to delete this product?')) {
      fetch(`/api/products/${id}`, { method: 'DELETE' })
        .then((res) => res.json())
        .then(() => {
          setProducts(products.filter((p) => p.id !== id));
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-brown-700 mb-6">Product Management</h1>

        <div className="flex justify-center mb-6">
          <Link
            to="/admin/products/add"
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-lg font-semibold shadow"
          >
            + Add Product
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-brown-200 text-brown-900">
              <tr>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Brand</th>
                <th className="p-3 text-center">Quantity</th>
                <th className="p-3 text-center">Price</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{product.category}</td>
                  <td className="p-3">{product.name}</td>
                  <td className="p-3">{product.brand}</td>
                  <td className="p-3 text-center">{product.quantity}</td>
                  <td className="p-3 text-center">₹{product.price}</td>
                  <td className="p-3 text-center flex justify-center gap-4">
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-yellow-500 hover:text-yellow-600 text-xl"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-500 hover:text-red-600 text-xl"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500 font-semibold">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Back to Dashboard Button */}
      <div className="mt-6 text-center">
        <Link
          to="/admin"
          className="inline-block bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 text-sm"
        >
          ← Back to Admin Dashboard
        </Link>
      </div>
    </div>
  );
}
