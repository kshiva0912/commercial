import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    total: 0,
    low: 0,
    out: 0,
    zero: 0,
    most: null,
  });
  const [recentInvoices, setRecentInvoices] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const [
          totalRes,
          lowRes,
          outRes,
          zeroRes,
          mostRes,
          invoicesRes,
          topRes,
        ] = await Promise.all([
          axios.get('/api/products/count'),
          axios.get('/api/products/low-stock'),
          axios.get('/api/products/out-of-stock'),
          axios.get('/api/products/zero-stock'),
          axios.get('/api/products/most-stocked'),
          axios.get('/api/invoices/recent'),
          axios.get('/api/products/top-purchased'),
        ]);

        setStats({
          total: totalRes.data.count,
          low: lowRes.data.count,
          out: outRes.data.count,
          zero: zeroRes.data.count,
          most: mostRes.data,
        });

        setRecentInvoices(
          Array.isArray(invoicesRes.data)
            ? invoicesRes.data
            : invoicesRes.data.invoices || []
        );

        setTopProducts(
          Array.isArray(topRes.data)
            ? topRes.data
            : topRes.data.products || []
        );
      } catch (error) {
        console.error('Dashboard fetch error:', error);
      }
    }

    fetchDashboardData();
  }, []);

  const cardData = [
    { label: 'Total Products', value: stats.total, color: 'bg-blue-500' },
    { label: 'Low Stock Products', value: stats.low, color: 'bg-yellow-400' },
    { label: 'Out of Stock Products', value: stats.out, color: 'bg-red-500' },
    { label: 'Zero Stock Products', value: stats.zero, color: 'bg-gray-500' },
    {
      label: 'Most Stock Product',
      value: stats.most ? `${stats.most.name} (${stats.most.quantity} units)` : '-',
      color: 'bg-green-500',
    },
  ];

  return (
    <div className="flex min-h-screen bg-blue-50 text-gray-800">
      {/* Sidebar for desktop */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <Sidebar navigate={navigate} />
      </aside>

      {/* Mobile sidebar toggle button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-blue-600 text-2xl focus:outline-none"
        >
          <FiMenu />
        </button>
      </div>

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-30" onClick={() => setSidebarOpen(false)}>
          <aside
            className="w-64 bg-white shadow-lg absolute top-0 left-0 h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar navigate={navigate} />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 space-y-6">
        {/* Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-4 text-white shadow-md ${card.color}`}
            >
              <div className="text-sm">{card.label}</div>
              <div className="text-2xl font-bold mt-1">{card.value ?? '-'}</div>
            </div>
          ))}
        </section>

        {/* Tables */}
        <section className="grid md:grid-cols-2 gap-6">
          {/* Recent Invoices */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <h2 className="text-lg font-semibold text-blue-700 mb-4">Recent 10 Purchase Invoices</h2>
            <table className="w-full text-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="text-left p-2">ID</th>
                  <th className="text-left p-2">Supplier</th>
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentInvoices.length > 0 ? (
                  recentInvoices.map((inv) => (
                    <tr key={inv.id} className="border-b hover:bg-blue-50">
                      <td className="p-2">{inv.id}</td>
                      <td className="p-2">{inv.supplier}</td>
                      <td className="p-2">{inv.date}</td>
                      <td className="p-2">{inv.amount}</td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="4" className="text-center p-4">No invoices found</td></tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <h2 className="text-lg font-semibold text-blue-700 mb-4">Top 5 Purchase Products</h2>
            <table className="w-full text-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="text-left p-2">Product Name</th>
                  <th className="text-left p-2">Qty</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.length > 0 ? (
                  topProducts.map((p, i) => (
                    <tr key={i} className="border-b hover:bg-blue-50">
                      <td className="p-2">{p.name}</td>
                      <td className="p-2">{p.qty}</td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="2" className="text-center p-4">No top products found</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

function Sidebar({ navigate }) {
  return (
    <div>
      <div className="p-6 border-b text-blue-700 font-bold text-xl">Admin Panel</div>
      <ul className="p-4 space-y-4">
        <li className="hover:text-blue-600 cursor-pointer">My Profile</li>
        <li
          onClick={() => navigate('/admin/products')}
          className="hover:text-blue-600 cursor-pointer"
        >
          Product Management
        </li>
        <li className="hover:text-blue-600 cursor-pointer">Employee Management</li>
      </ul>
    </div>
  );
}
