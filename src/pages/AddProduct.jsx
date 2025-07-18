import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const [form, setForm] = useState({
    product_name: '',
    product_spasifie_id: '',
    catogary_of_produt: '',
    barand_name: '',
    sale_price: '',
    buy_price: '',
    des_of_product: '',
    stock_id: '',
    buy_date: '',
    careate_date: '',
    is_active: true,
    update_date: '',
    upadte_by: '',
    is_live: true,
    quentity_product: '',
    original_amount_of_product: '',
    discount_of_product: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/products', form);
      navigate('/admin/products');
    } catch (error) {
      console.error('Product creation failed:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: 'product_name', label: 'Product Name' },
          { name: 'product_spasifie_id', label: 'Product Specific ID' },
          { name: 'catogary_of_produt', label: 'Category' },
          { name: 'barand_name', label: 'Brand Name' },
          { name: 'sale_price', label: 'Sale Price', type: 'number' },
          { name: 'buy_price', label: 'Buy Price', type: 'number' },
          { name: 'stock_id', label: 'Stock ID' },
          { name: 'quentity_product', label: 'Quantity', type: 'number' },
          { name: 'original_amount_of_product', label: 'Original Amount', type: 'number' },
          { name: 'discount_of_product', label: 'Discount (%)', type: 'number' },
          { name: 'buy_date', label: 'Buy Date', type: 'date' },
          { name: 'careate_date', label: 'Create Date', type: 'date' },
          { name: 'update_date', label: 'Update Date', type: 'date' },
          { name: 'upadte_by', label: 'Updated By' },
        ].map(({ name, label, type = 'text' }) => (
          <div key={name}>
            <label className="block text-sm font-semibold mb-1 text-gray-700">{label}</label>
            <input
              type={type}
              name={name}
              value={form[name]}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}

        {/* Description field full width */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1 text-gray-700">Product Description</label>
          <textarea
            name="des_of_product"
            value={form.des_of_product}
            onChange={handleChange}
            rows="3"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Boolean switches */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="is_active"
            checked={form.is_active}
            onChange={handleChange}
            className="h-5 w-5"
          />
          <label className="text-gray-700 font-semibold">Is Active</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="is_live"
            checked={form.is_live}
            onChange={handleChange}
            className="h-5 w-5"
          />
          <label className="text-gray-700 font-semibold">Is Live</label>
        </div>

        <div className="md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-lg shadow"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}
