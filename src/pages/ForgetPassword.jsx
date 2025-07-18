import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-navy mb-6">Reset Your Password</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your registered email"
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />
          <button className="w-full bg-navy text-white py-2 rounded hover:bg-blue-900 transition">
            Send Reset Link
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Remember your password?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}
