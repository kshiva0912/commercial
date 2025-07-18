export default function Categories() {
  return (
    <section className="py-16 px-6 md:px-20 text-center bg-[#fafafa]">
      <h2 className="text-3xl font-bold mb-10">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {['Furniture', 'Lighting', 'Textiles', 'Accessories'].map((cat, idx) => (
          <div key={idx} className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition">
            <div className="bg-gray-200 h-32 rounded mb-4" />
            <h3 className="text-lg font-semibold">{cat}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
