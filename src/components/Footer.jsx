import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">
        <div>
          <h4 className="text-lg font-semibold mb-2">FlipKartLite</h4>
          <p>Beautiful living, delivered to your doorstep.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline">Shop</Link></li>
            <li><Link to="/AboutUs" className="hover:underline">About</Link></li>
            <li><Link to="/ContactUs" className="hover:underline">Contact</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
          <p>Email: support@flipkartlite.com</p>
          <p>Phone: +91-9876543210</p>
          <p>Location: Bhubaneswar, India</p>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs mt-6">
        &copy; {new Date().getFullYear()} FlipKartLite. All rights reserved.
      </p>
    </footer>
  );
}
