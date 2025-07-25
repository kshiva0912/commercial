import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Left: Register Form */}
      <div className="md:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-navy mb-6">Create an Account</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
            <button className="w-full bg-navy text-white py-2 rounded hover:bg-blue-900 transition">
              Register
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 hidden md:block">
        <img
          src="/banners/image1.jpeg"
          alt="Register Visual"
          className="w-full h-full object-cover rounded-r-lg"
        />
      </div>
    </div>
  );
}
