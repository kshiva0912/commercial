import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519710164239-da1879044c04?auto=format&fit=crop&w=1600&q=80')",
          // You can choose a different inspiring image
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          Transform Your Space. Elevate Your Lifestyle.
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto drop-shadow-md">
          Discover premium decor, stylish furniture, and unique pieces — meticulously curated for elegant living.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/shop">
            <button className="px-10 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg text-lg font-semibold">
              Explore Collection
            </button>
          </Link>
          <Link to="/contact"> {/* Assuming '/contact' is your contact/quote page */}
            <button className="px-10 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-indigo-600 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg text-lg font-semibold">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
