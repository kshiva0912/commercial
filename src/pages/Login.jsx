import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row-reverse bg-gray-100">
      {/* Image container with margin, padding, and square aspect ratio */}
      <div className="flex justify-center w-full md:w-2/5 p-4 m-4">
        <div className="w-full max-w-xs aspect-square rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            src="/banners/image1.jpeg"
            alt="Login illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="flex items-center justify-center w-full md:w-3/5 p-6 md:p-12 bg-white shadow-lg m-4 rounded-lg">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-6">
            Login to Your Account
          </h2>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0f172a] bg-gray-50"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0f172a] bg-gray-50"
              required
            />
            <div className="text-right text-sm">
              <Link to="/ForgetPassword" className="text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0f172a] text-white py-2 rounded hover:bg-blue-900 transition"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-center">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
