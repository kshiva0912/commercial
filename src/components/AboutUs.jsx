export default function AboutUs() {
  return (
    <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-indigo-50 to-white flex flex-col lg:flex-row items-center gap-12">
      {/* Image side */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1601979031925-587daf1b41df?auto=format&fit=crop&w=800&q=80"
          alt="Interior design showcase"
          className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text side */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
        <h2 className="text-4xl font-extrabold tracking-tight text-indigo-900">
          About FlipKartLite
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
          At <span className="font-semibold text-indigo-600">FlipKartLite</span>, we blend style with substance. We bring you curated collections of décor,
          furniture, and more — crafted for comfort and designed for distinction.
        </p>

        <div className="bg-indigo-100 rounded-lg p-6 max-w-xl mx-auto lg:mx-0 shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-indigo-800">Our Mission</h3>
          <p className="text-indigo-700 leading-relaxed">
            To enrich every home with thoughtfully designed, high-quality products that inspire beauty and comfort, while providing exceptional customer experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
