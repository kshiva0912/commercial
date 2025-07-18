import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-brown-800">E-Shop</Link>
      <Link to="/cart" className="text-brown-700 font-semibold">
        Cart ({cart.length})
      </Link>
    </header>
  );
}
