import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import axios from 'axios';

export default function AddStock() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    stock_name: '',
    stock_details: '',
    stock_address: '',
    stock_product_id: '',
    stock_capacity: '',
    stock_is_live: 1,
    stock_create_by: 1,
    stock_is_active: 1,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (let key in form) {
        data.append(key, form[key]);
      }
      await axios.post('http://localhost:8000/api/stocks', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/stock-management');
    } catch (error) {
      console.error('Error adding stock:', error);
    }
  };

  return (
    <div className="min-h-screen flex">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6">Add New Stock</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded shadow">
          <input type="text" name="stock_name" value={form.stock_name} onChange={handleChange} placeholder="Stock Name" required className="border p-2 rounded" />
          <input type="text" name="stock_details" value={form.stock_details} onChange={handleChange} placeholder="Stock Details" required className="border p-2 rounded" />
          <input type="text" name="stock_address" value={form.stock_address} onChange={handleChange} placeholder="Stock Address" required className="border p-2 rounded" />
          <input type="number" name="stock_product_id" value={form.stock_product_id} onChange={handleChange} placeholder="Product ID" required className="border p-2 rounded" />
          <input type="number" name="stock_capacity" value={form.stock_capacity} onChange={handleChange} placeholder="Stock Capacity" required className="border p-2 rounded" />
          <select name="stock_is_live" value={form.stock_is_live} onChange={handleChange} required className="border p-2 rounded">
            <option value={1}>Live</option>
            <option value={0}>Not Live</option>
          </select>
          <select name="stock_is_active" value={form.stock_is_active} onChange={handleChange} required className="border p-2 rounded">
            <option value={1}>Active</option>
            <option value={0}>Inactive</option>
          </select>
          <input type="file" name="image" onChange={handleChange} accept="image/*" required className="border p-2 rounded" />
          <button type="submit" className="col-span-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Stock</button>
        </form>
      </main>
    </div>
  );
}
