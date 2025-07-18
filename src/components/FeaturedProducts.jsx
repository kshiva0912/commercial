export default function FeaturedProducts() {
  return (
    <section className="py-16 px-6 md:px-20 text-center bg-white">
      <h2 className="text-3xl font-bold mb-10">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="border rounded-lg overflow-hidden hover:shadow-md transition">
            <div className="bg-gray-200 h-60" />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold mb-1">Handcrafted Vase</h3>
              <p className="text-sm text-gray-500 mb-2">₹1499</p>
              <button className="text-sm text-gray-700 border px-3 py-1 rounded hover:bg-gray-100 transition">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
