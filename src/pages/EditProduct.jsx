import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import axios from 'axios';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    category: '',
    name: '',
    brand: '',
    quantity: '',
    price: '',
    image: '',
    description: '',
  });

  useEffect(() => {
    // Fetch product data to prefill the form
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => {
        setForm(res.data);
      })
      .catch(err => {
        console.error('Failed to fetch product:', err);
        alert('Product not found or server error.');
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5000/api/products/${id}`, form)
      .then(() => {
        alert('Product updated successfully!');
        navigate('/admin/products');
      })
      .catch(err => {
        console.error(err);
        alert('Failed to update product.');
      });
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            name="brand"
            value={form.brand}
            onChange={handleChange}
            placeholder="Brand"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Product Description"
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={4}
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}
