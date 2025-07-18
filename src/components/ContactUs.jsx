export default function ContactUs() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-indigo-50 to-white text-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4">Let’s Talk</h2>
        <p className="text-lg text-gray-600">Have a question? We’d love to hear from you.</p>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-16 max-w-5xl mx-auto">
        {/* Form */}
        <form className="md:flex-1 bg-white rounded-lg shadow-lg p-8 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
          />
          <button className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition font-semibold w-full">
            Send Message
          </button>
        </form>

        {/* Contact Information + Map */}
        <div className="md:flex-1 mt-12 md:mt-0 space-y-10">
          {/* Contact Info */}
          <div className="bg-indigo-600 text-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="flex items-start mb-4">
              <svg
                className="w-6 h-6 mr-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2"
                ></path>
              </svg>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>contact@yourcompany.com</p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <svg
                className="w-6 h-6 mr-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="w-6 h-6 mr-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13 21.314a1 1 0 01-1.414 0l-4.657-4.657a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>1234 Main St, Somewhere, USA</p>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            {/* Replace the iframe src below with your real map embed URL */}
            <iframe
              className="w-full h-64 md:h-80"
              src="https://maps.google.com/maps?q=1234%20Main%20St,%20Somewhere,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
