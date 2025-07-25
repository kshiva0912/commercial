import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import OfferCarousel from '../components/OfferCarousel';
import Footer from '../components/Footer';
import BrandsCarousel from '../components/BrandsCarousel';
import { useNavigate } from 'react-router-dom';
import allProducts from '../data/Products'; // ✅ Updated import

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSize, setSelectedSize] = useState('All');
  const [priceRange, setPriceRange] = useState([0, Infinity]);

  const [showCategoryOptions, setShowCategoryOptions] = useState(true);
  const [showBrandOptions, setShowBrandOptions] = useState(true);
  const [showSizeOptions, setShowSizeOptions] = useState(true);
  const [showPriceOptions, setShowPriceOptions] = useState(true);

  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  const uniqueBrands = Array.from(new Set(allProducts.map(p => p.brand)));
  const uniqueSizes = ['All', 'S', 'M', 'L', 'XL'];

  const filteredProducts = allProducts.filter((p) => {
    const categoryMatch = selectedCategory === 'All' || p.category === selectedCategory;
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
    const sizeMatch = selectedSize === 'All' || (p.size && p.size === selectedSize);
    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
    return categoryMatch && brandMatch && sizeMatch && priceMatch;
  }).slice(0, 5);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const goToBuyNow = (product) => {
    navigate('/buy-now', { state: { product } });
  };

  const HEADER_HEIGHT = 170;

  return (
    <main className="w-full min-h-screen bg-gray-100 flex flex-col">
      <div className="w-full px-4 mt-2">
        <OfferCarousel />
      </div>

      <div className="block md:hidden w-full px-4 mt-4">
        <Sidebar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedBrands={selectedBrands}
          onSelectBrands={setSelectedBrands}
          selectedSize={selectedSize}
          onSelectSize={setSelectedSize}
          priceRange={priceRange}
          onSelectPriceRange={setPriceRange}
          brands={uniqueBrands}
          sizes={uniqueSizes}
          showCategoryOptions={showCategoryOptions}
          setShowCategoryOptions={setShowCategoryOptions}
          showBrandOptions={showBrandOptions}
          setShowBrandOptions={setShowBrandOptions}
          showSizeOptions={showSizeOptions}
          setShowSizeOptions={setShowSizeOptions}
          showPriceOptions={showPriceOptions}
          setShowPriceOptions={setShowPriceOptions}
        />
      </div>

      <div
        id="products"
        className="flex w-full max-w-[1440px] mx-auto mt-6 px-4 md:px-8 gap-6 flex-1 min-h-0"
        style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
      >
        <aside className="w-60 flex-shrink-0 bg-white border rounded p-4 shadow-sm h-full hidden md:block overflow-y-auto">
          <Sidebar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedBrands={selectedBrands}
            onSelectBrands={setSelectedBrands}
            selectedSize={selectedSize}
            onSelectSize={setSelectedSize}
            priceRange={priceRange}
            onSelectPriceRange={setPriceRange}
            brands={uniqueBrands}
            sizes={uniqueSizes}
            showCategoryOptions={showCategoryOptions}
            setShowCategoryOptions={setShowCategoryOptions}
            showBrandOptions={showBrandOptions}
            setShowBrandOptions={setShowBrandOptions}
            showSizeOptions={showSizeOptions}
            setShowSizeOptions={setShowSizeOptions}
            showPriceOptions={showPriceOptions}
            setShowPriceOptions={setShowPriceOptions}
          />
        </aside>

        <section className="flex-1 h-full overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 sticky top-0 bg-gray-100 z-10 py-2">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={() => toggleWishlist(product.id)}
                onBuyNow={() => goToBuyNow(product)}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </main>
  );
}
