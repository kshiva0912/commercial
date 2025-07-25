import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminSidebar from '../components/AdminSidebar';

export default function StockManagement() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/stocks/')
      .then(res => {
        if (Array.isArray(res.data)) {
          setStocks(res.data);
        } else {
          console.error("Data is not an array:", res.data);
          setStocks([]);
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <main className="flex-1 p-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-0">
            Stock Management
          </h1>

          <Link
            to="/add-stock"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm md:text-base transition"
          >
            + Add Stock
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-gray-200 text-gray-700">
              <tr className="text-left text-sm md:text-base">
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Stock Name</th>
                <th className="py-2 px-4">Details</th>
                <th className="py-2 px-4">Address</th>
                <th className="py-2 px-4">Product ID</th>
                <th className="py-2 px-4">Capacity</th>
              </tr>
            </thead>
            <tbody>
              {stocks.length > 0 ? (
                stocks.map((stock, index) => (
                  <tr
                    key={stock.id}
                    className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} text-sm md:text-base`}
                  >
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{stock.stock_name}</td>
                    <td className="py-2 px-4">{stock.stock_details}</td>
                    <td className="py-2 px-4">{stock.stock_address}</td>
                    <td className="py-2 px-4">{stock.stock_product_id}</td>
                    <td className="py-2 px-4">{stock.stock_capacity}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No stock data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
