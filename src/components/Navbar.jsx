import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { FaUserCircle, FaHeart, FaBoxOpen } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-[#0f172a] text-white shadow sticky top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Logo & Company Name */}
        <div className="flex items-center space-x-2 z-10">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded" />
          <Link to="/" className="text-lg font-bold text-cyan-400">FlipKartLite</Link>
        </div>

        {/* Center - Search bar (desktop only) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[90%] sm:w-2/3 md:w-1/2 z-0">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded text-black shadow"
          />
        </div>

        {/* Right - Cart + Profile (desktop), Hamburger (mobile) */}
        <div className="flex items-center space-x-4 z-10">
          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/Home" className="hover:text-yellow-300">Home</Link>
            <Link to="/cart" className="relative hover:text-yellow-300">
              🛒 Cart
              <span className="absolute -top-2 -right-3 bg-yellow-300 text-black rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            </Link>
            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="text-xl hover:text-yellow-300"
              >
                <FaUserCircle />
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded shadow-lg z-50 py-4 px-4 space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <div>
                      <p className="text-sm text-gray-500">New Customer?</p>
                      <button
                        onClick={() => {
                          setProfileOpen(false);
                          navigate('/register');
                        }}
                        className="text-blue-600 font-medium hover:underline text-sm"
                      >
                        Register
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        setProfileOpen(false);
                        navigate('/login');
                      }}
                      className="bg-[#0f172a] text-white px-3 py-1 rounded hover:bg-cyan-600"
                    >
                      Sign In
                    </button>
                  </div>
                  <Link
                    to="/Wishlist"
                    className="flex items-center gap-2 hover:text-cyan-700"
                    onClick={() => setProfileOpen(false)}
                  >
                    <FaHeart /> Wishlist
                  </Link>
                  <Link
                    to="/orders"
                    className="flex items-center gap-2 hover:text-cyan-700"
                    onClick={() => setProfileOpen(false)}
                  >
                    <FaBoxOpen /> Orders
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] px-4 pb-4 space-y-4">
          {/* Search bar (mobile only) */}
          <div>
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 rounded text-black shadow"
            />
          </div>
          <Link to="/Home" className="block text-white hover:text-yellow-300">Home</Link>
          <Link to="/cart" className="block relative text-white hover:text-yellow-300">
            🛒 Cart
            <span className="absolute -top-2 -right-3 bg-yellow-300 text-black rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          </Link>

          {/* Profile and Submenu in mobile */}
          <div className="border-t border-gray-600 pt-4 space-y-2">
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate('/register');
              }}
              className="w-full text-left text-white hover:text-yellow-300"
            >
              <FaUserCircle className="inline mr-2" />
              Register / Sign In
            </button>
            <Link
              to="/wishlist"
              className="block text-white flex items-center gap-2 hover:text-yellow-300"
              onClick={() => setMenuOpen(false)}
            >
              <FaHeart /> Wishlist
            </Link>
            <Link
              to="/orders"
              className="block text-white flex items-center gap-2 hover:text-yellow-300"
              onClick={() => setMenuOpen(false)}
            >
              <FaBoxOpen /> Orders
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
