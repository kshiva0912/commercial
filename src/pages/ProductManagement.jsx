import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import AdminSidebar from '../components/AdminSidebar';
import axios from 'axios';

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/products/');
      if (Array.isArray(res.data)) {
        setProducts(res.data);
      } else {
        console.error('Expected array but got:', res.data);
        setProducts([]);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/products/${id}/`);
      fetchProducts(); // Refresh after delete
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-4 md:p-10 w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Product Management</h2>

        <div className="flex justify-center mb-6">
          <Link
            to="/admin/products/add"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded"
          >
            Add Product
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Brand</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-8 text-gray-500">
                    No products available.
                  </td>
                </tr>
              ) : (
                products.map((product, index) => (
                  <tr
                    key={product.id}
                    className={`border-t ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{product.category}</td>
                    <td className="px-4 py-2">{product.name}</td>
                    <td className="px-4 py-2">{product.brand}</td>
                    <td className="px-4 py-2">{product.quantity}</td>
                    <td className="px-4 py-2">₹{product.price}</td>
                    <td className="px-4 py-2 flex gap-3">
                      <button
                        onClick={() => navigate(`/admin/edit-product/${product.id}`)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
