import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminSidebar from '../components/AdminSidebar';

export default function EditStock() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    stock_name: '',
    stock_details: '',
    stock_address: '',
    stock_product_id: '',
    stock_capacity: '',
    stock_is_live: 0,
    stock_create_by: 1,
    stock_create_date: new Date().toISOString().slice(0, 10),
    stock_is_active: 1,
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/stocks/${id}`);
        setForm(res.data);
      } catch (err) {
        console.error('Failed to fetch stock:', err);
      }
    };

    fetchStock();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? (checked ? 1 : 0) : value;
    setForm({ ...form, [name]: val });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    if (image) data.append('image', image);

    try {
      await axios.put(`http://localhost:8000/api/stocks/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/stock-management');
    } catch (err) {
      console.error('Edit stock failed:', err);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-xl mx-auto bg-white rounded shadow p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Edit Stock</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="font-semibold">Stock Name:</span>
              <input
                name="stock_name"
                value={form.stock_name}
                className="w-full border p-2 rounded mt-1"
                onChange={handleChange}
                required
              />
            </label>
            <label className="block">
              <span className="font-semibold">Details:</span>
              <input
                name="stock_details"
                value={form.stock_details}
                className="w-full border p-2 rounded mt-1"
                onChange={handleChange}
                required
              />
            </label>
            <label className="block">
              <span className="font-semibold">Address:</span>
              <input
                name="stock_address"
                value={form.stock_address}
                className="w-full border p-2 rounded mt-1"
                onChange={handleChange}
                required
              />
            </label>
            <label className="block">
              <span className="font-semibold">Product ID:</span>
              <input
                name="stock_product_id"
                type="number"
                value={form.stock_product_id}
                className="w-full border p-2 rounded mt-1"
                onChange={handleChange}
                required
              />
            </label>
            <label className="block">
              <span className="font-semibold">Capacity:</span>
              <input
                name="stock_capacity"
                type="number"
                value={form.stock_capacity}
                className="w-full border p-2 rounded mt-1"
                onChange={handleChange}
                required
              />
            </label>
            <label className="block flex items-center space-x-2">
              <span className="font-semibold">Is Live:</span>
              <input
                name="stock_is_live"
                type="checkbox"
                checked={form.stock_is_live === 1}
                onChange={handleChange}
              />
            </label>

            <input name="stock_is_active" type="hidden" value="1" />

            <label className="block">
              <span className="font-semibold">Replace Image:</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-1"
              />
            </label>

            <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition">
              Update
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
