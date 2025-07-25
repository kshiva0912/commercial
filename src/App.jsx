import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgetPassword';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import ProductManagement from './pages/ProductManagement';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import StockManagement from './pages/StockManagement';
import AddStock from './pages/AddStock';
import EditStock from './pages/EditStock';
import BuyNow from './pages/BuyNow';
import Wishlist from './pages/WishList';
import Invoice from './pages/Invoice';
import ProductDetails from './components/ProductDetails';
import AdminLogin from './components/AdminLogin';

export default function App() {
  return (
    <div className="bg-offwhite min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ForgetPassword" element={<ForgotPassword />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<ProductManagement />} />
        <Route path="/admin/products/add" element={<AddProduct />} />
        <Route path="/admin/products/edit/:id" element={<EditProduct />} />
        <Route path="/admin/stocks" element={<StockManagement />} />
        <Route path="/add-stock" element={<AddStock />} />
        <Route path="/edit-stock/:id" element={<EditStock />} />
        <Route path="/buy-now/:id" element={<BuyNow />} />
        <Route path="/wishlist" element={<Wishlist/>}  />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path='/adminlogin' element={<AdminLogin/>} />

      </Routes>
    </div>
  );
}
