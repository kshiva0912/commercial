// src/components/StockTable.jsx
import { Link } from 'react-router-dom';

export default function StockTable({ stocks }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-left text-sm">
            <th className="p-3 whitespace-nowrap">Name</th>
            <th className="p-3 whitespace-nowrap">Details</th>
            <th className="p-3 whitespace-nowrap">Address</th>
            <th className="p-3 whitespace-nowrap">Capacity</th>
            <th className="p-3 whitespace-nowrap">Active</th>
            <th className="p-3 whitespace-nowrap">Live</th>
            <th className="p-3 whitespace-nowrap">Created By</th>
            <th className="p-3 whitespace-nowrap">Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id} className="border-t text-sm">
              <td className="p-3">{stock.stock_name}</td>
              <td className="p-3">{stock.stock_details}</td>
              <td className="p-3">{stock.stock_address}</td>
              <td className="p-3">{stock.stock_capacity}</td>
              <td className="p-3">{stock.stock_is_active ? 'Yes' : 'No'}</td>
              <td className="p-3">{stock.stock_is_live ? 'Yes' : 'No'}</td>
              <td className="p-3">{stock.stock_create_by}</td>
              <td className="p-3 flex gap-2 flex-wrap">
                <Link to={`/edit-stock/${stock.id}`} className="text-blue-500 hover:underline">
                  Edit
                </Link>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
