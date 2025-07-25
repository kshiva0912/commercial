import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Dashboard', path: '/admin' },
    { label: 'Stock Management', path: '/admin/stocks' },
    { label: 'Add Stock', path: '/add-stock' },
    { label: 'Product Management', path: '/admin/products' },
    { label: 'Add Product', path: '/admin/products/add' },
  ];

  const navLinkClass = (path) =>
    `block px-4 py-2 rounded hover:bg-blue-100 transition text-sm md:text-base ${
      location.pathname === path
        ? 'bg-blue-200 font-semibold text-blue-900'
        : 'text-gray-700'
    }`;

  return (
    <>
      {/* Hamburger icon for mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleSidebar} className="text-3xl text-gray-800">
          {isOpen ? <AiOutlineClose /> : <FiMenu />}
        </button>
      </div>

      {/* Overlay on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:block`}
      >
        <div className="p-6 border-b text-xl font-bold text-blue-600">Admin Panel</div>
        <nav className="flex flex-col gap-2 p-4">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={navLinkClass(path)}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/logout"
            className="block px-4 py-2 text-red-600 hover:bg-red-100 rounded transition mt-6"
            onClick={() => setIsOpen(false)}
          >
            Logout
          </Link>
        </nav>
      </div>
    </>
  );
}
