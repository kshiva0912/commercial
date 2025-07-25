import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    product_name: '',
    product_spasifie_id: '',
    category_of_product: '',
    brand_name: '',
    sale_price: '',
    buy_price: '',
    des_of_product: '',
    stock_id: '',
    buy_date: '',
    is_active: 1,
    update_by: '',
    is_live: 1,
    quantity_product: '',
    original_amount_of_product: '',
    discount_of_product: '',
    product_about_id: '',
    product_img: null
  });
  
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Later: integrate API here
    console.log(form);
    alert('Product data submitted');
    navigate('/admin/product-management');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <AdminSidebar />
      <div className="flex-1 p-4 md:p-8 bg-gray-50 w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Product</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="product_name" onChange={handleChange} value={form.product_name} placeholder="Product Name" className="input" required />
          <input name="product_spasifie_id" onChange={handleChange} value={form.product_spasifie_id} placeholder="Specific ID (optional)" className="input" />
          <input name="category_of_product" onChange={handleChange} value={form.category_of_product} placeholder="Product Category" className="input" required />
          <input name="brand_name" onChange={handleChange} value={form.brand_name} placeholder="Brand Name" className="input" required />
          <input name="sale_price" onChange={handleChange} value={form.sale_price} placeholder="Sale Price" type="number" className="input" required />
          <input name="buy_price" onChange={handleChange} value={form.buy_price} placeholder="Buy Price" type="number" className="input" required />
          <input name="des_of_product" onChange={handleChange} value={form.des_of_product} placeholder="Product Description" className="input" />
          <input name="stock_id" onChange={handleChange} value={form.stock_id} placeholder="Stock ID (optional)" type="number" className="input" />
          <input name="buy_date" onChange={handleChange} value={form.buy_date} type="date" className="input" />
          <select name="is_active" onChange={handleChange} value={form.is_active} className="input">
            <option value={1}>Active</option>
            <option value={0}>Inactive</option>
          </select>
          <input name="update_by" onChange={handleChange} value={form.update_by} placeholder="Updated By (optional)" className="input" />
          <select name="is_live" onChange={handleChange} value={form.is_live} className="input">
            <option value={1}>Live</option>
            <option value={0}>Hidden</option>
          </select>
          <input name="quantity_product" onChange={handleChange} value={form.quantity_product} placeholder="Quantity" type="number" className="input" required />
          <input name="original_amount_of_product" onChange={handleChange} value={form.original_amount_of_product} placeholder="Original Price" type="number" className="input" required />
          <input name="discount_of_product" onChange={handleChange} value={form.discount_of_product} placeholder="Discount (optional)" type="number" className="input" />
          <input name="product_about_id" onChange={handleChange} value={form.product_about_id} placeholder="About ID (optional)" type="number" className="input" />
          <input name="product_img" onChange={handleChange} type="file" className="input" accept=".jpg,.jpeg,.png,.webp" />
          <button type="submit" className="col-span-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Add Product</button>
        </form>
      </div>
    </div>
  );
}
