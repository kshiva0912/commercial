import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-navy text-white shadow sticky top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo Centered on Mobile */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-cyan absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none z-10"
          >
            FlipKartLite
          </Link>
        </div>

        {/* Search bar - Desktop only */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1/2">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded text-black"
          />
        </div>

        {/* Hamburger menu - mobile */}
        <div className="md:hidden z-10">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Right links - Desktop only */}
        <div className="hidden md:flex items-center space-x-6 z-10">
          <Link to="/Home" className="hover:text-lemon">Home</Link>
          <Link to="/cart" className="relative hover:text-lemon">
            🛒 Cart
            <span className="absolute -top-2 -right-3 bg-lemon text-charcoal rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          </Link>
          <Link to="/register" className="hover:text-lemon text-xl">
            <FaUserCircle />
          </Link>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-navy px-4 pb-4 space-y-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded text-black"
          />
          <Link to="/Home" className="block text-white">Home</Link>
          <Link to="/cart" className="block relative text-white">
            🛒 Cart
            <span className="absolute -top-2 -right-3 bg-lemon text-charcoal rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          </Link>
          <Link to="/register" className="w-full text-left text-white flex items-center gap-2">
            <FaUserCircle /> Profile
          </Link>
        </div>
      )}
    </header>
  );
}
