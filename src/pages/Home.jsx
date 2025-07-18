import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import OfferCarousel from '../components/OfferCarousel';
import Footer from '../components/Footer';
import BrandsCarousel from '../components/BrandsCarousel';

const allProducts = [
  // Electronics
  { id: 1, title: 'Smartphone', price: 9999, category: 'Electronics', brand: 'Samsung', image: 'https://via.placeholder.com/300x200?text=Phone' },
  { id: 2, title: 'Bluetooth Speaker', price: 1999, category: 'Electronics', brand: 'boAt', image: 'https://via.placeholder.com/300x200?text=Speaker' },
  { id: 3, title: 'Laptop', price: 45999, category: 'Electronics', brand: 'Dell', image: 'https://via.placeholder.com/300x200?text=Laptop' },
  { id: 4, title: 'Smartwatch', price: 2999, category: 'Electronics', brand: 'Noise', image: 'https://via.placeholder.com/300x200?text=Watch' },
  { id: 5, title: 'Earbuds', price: 1599, category: 'Electronics', brand: 'Realme', image: 'https://via.placeholder.com/300x200?text=Earbuds' },
  { id: 6, title: 'LED Monitor', price: 7499, category: 'Electronics', brand: 'Samsung', image: 'https://via.placeholder.com/300x200?text=Monitor' },
  { id: 7, title: 'Keyboard', price: 899, category: 'Electronics', brand: 'Dell', image: 'https://via.placeholder.com/300x200?text=Keyboard' },
  { id: 8, title: 'Mouse', price: 499, category: 'Electronics', brand: 'Logitech', image: 'https://via.placeholder.com/300x200?text=Mouse' },
  { id: 9, title: 'Tablet', price: 14999, category: 'Electronics', brand: 'Samsung', image: 'https://via.placeholder.com/300x200?text=Tablet' },
  { id: 10, title: 'Charger', price: 799, category: 'Electronics', brand: 'Realme', image: 'https://via.placeholder.com/300x200?text=Charger' },

  // Fashion
  { id: 11, title: 'T-Shirt', price: 499, category: 'Fashion', brand: 'Nike', image: 'https://via.placeholder.com/300x200?text=T-Shirt' },
  { id: 12, title: 'Jeans', price: 999, category: 'Fashion', brand: 'Levis', image: 'https://via.placeholder.com/300x200?text=Jeans' },
  { id: 13, title: 'Jacket', price: 1999, category: 'Fashion', brand: 'Puma', image: 'https://via.placeholder.com/300x200?text=Jacket' },
  { id: 14, title: 'Sneakers', price: 1499, category: 'Fashion', brand: 'Adidas', image: 'https://via.placeholder.com/300x200?text=Sneakers' },
  { id: 15, title: 'Sunglasses', price: 699, category: 'Fashion', brand: 'RayBan', image: 'https://via.placeholder.com/300x200?text=Sunglasses' },
  { id: 16, title: 'Handbag', price: 1299, category: 'Fashion', brand: 'Baggit', image: 'https://via.placeholder.com/300x200?text=Handbag' },
  { id: 17, title: 'Watch', price: 1099, category: 'Fashion', brand: 'Titan', image: 'https://via.placeholder.com/300x200?text=Watch' },
  { id: 18, title: 'Belt', price: 399, category: 'Fashion', brand: 'Levis', image: 'https://via.placeholder.com/300x200?text=Belt' },
  { id: 19, title: 'Hat', price: 299, category: 'Fashion', brand: 'Nike', image: 'https://via.placeholder.com/300x200?text=Hat' },
  { id: 20, title: 'Scarf', price: 349, category: 'Fashion', brand: 'Adidas', image: 'https://via.placeholder.com/300x200?text=Scarf' },

  // Home
  { id: 21, title: 'Microwave', price: 3999, category: 'Home', brand: 'LG', image: 'https://via.placeholder.com/300x200?text=Microwave' },
  { id: 22, title: 'Cushion Set', price: 1299, category: 'Home', brand: 'Home Centre', image: 'https://via.placeholder.com/300x200?text=Cushion' },
  { id: 23, title: 'Curtains', price: 799, category: 'Home', brand: 'Spaces', image: 'https://via.placeholder.com/300x200?text=Curtains' },
  { id: 24, title: 'Wall Clock', price: 499, category: 'Home', brand: 'Ajanta', image: 'https://via.placeholder.com/300x200?text=Clock' },
  { id: 25, title: 'Cookware Set', price: 2999, category: 'Home', brand: 'Prestige', image: 'https://via.placeholder.com/300x200?text=Cookware' },
  { id: 26, title: 'Bedsheet', price: 899, category: 'Home', brand: 'Bombay Dyeing', image: 'https://via.placeholder.com/300x200?text=Bedsheet' },
  { id: 27, title: 'Table Lamp', price: 999, category: 'Home', brand: 'Philips', image: 'https://via.placeholder.com/300x200?text=Lamp' },
  { id: 28, title: 'Vacuum Cleaner', price: 4999, category: 'Home', brand: 'LG', image: 'https://via.placeholder.com/300x200?text=Vacuum' },
  { id: 29, title: 'Chair', price: 1499, category: 'Home', brand: 'Nilkamal', image: 'https://via.placeholder.com/300x200?text=Chair' },
  { id: 30, title: 'Storage Rack', price: 1199, category: 'Home', brand: 'Godrej', image: 'https://via.placeholder.com/300x200?text=Rack' },

  // Books
  { id: 31, title: 'Harry Potter', price: 299, category: 'Books', brand: 'Penguin', image: 'https://via.placeholder.com/300x200?text=Harry+Potter' },
  { id: 32, title: 'Atomic Habits', price: 349, category: 'Books', brand: 'Penguin', image: 'https://via.placeholder.com/300x200?text=Atomic+Habits' },
  { id: 33, title: 'Rich Dad Poor Dad', price: 399, category: 'Books', brand: 'Manjul', image: 'https://via.placeholder.com/300x200?text=Rich+Dad' },
  { id: 34, title: 'Think & Grow Rich', price: 199, category: 'Books', brand: 'Manjul', image: 'https://via.placeholder.com/300x200?text=Think+Rich' },
  { id: 35, title: 'The Alchemist', price: 299, category: 'Books', brand: 'HarperOne', image: 'https://via.placeholder.com/300x200?text=Alchemist' },
  { id: 36, title: 'IKIGAI', price: 249, category: 'Books', brand: 'Penguin', image: 'https://via.placeholder.com/300x200?text=IKIGAI' },
  { id: 37, title: 'Wings of Fire', price: 279, category: 'Books', brand: 'Penguin', image: 'https://via.placeholder.com/300x200?text=Wings+of+Fire' },
  { id: 38, title: 'Do Epic Shit', price: 199, category: 'Books', brand: 'Penguin', image: 'https://via.placeholder.com/300x200?text=Do+Epic+Shit' },
  { id: 39, title: 'The Monk Who Sold His Ferrari', price: 249, category: 'Books', brand: 'Jaico', image: 'https://via.placeholder.com/300x200?text=Monk' },
  { id: 40, title: 'Zero to One', price: 329, category: 'Books', brand: 'Penguin', image: 'https://via.placeholder.com/300x200?text=Zero+to+One' },

  // Sports
  { id: 41, title: 'Football', price: 999, category: 'Sports', brand: 'Nivia', image: 'https://via.placeholder.com/300x200?text=Football' },
  { id: 42, title: 'Cricket Bat', price: 1499, category: 'Sports', brand: 'SS', image: 'https://via.placeholder.com/300x200?text=Bat' },
  { id: 43, title: 'Badminton Set', price: 599, category: 'Sports', brand: 'Yonex', image: 'https://via.placeholder.com/300x200?text=Badminton' },
  { id: 44, title: 'Yoga Mat', price: 399, category: 'Sports', brand: 'HRX', image: 'https://via.placeholder.com/300x200?text=Yoga+Mat' },
  { id: 45, title: 'Dumbbells', price: 899, category: 'Sports', brand: 'Kobo', image: 'https://via.placeholder.com/300x200?text=Dumbbells' },
  { id: 46, title: 'Skipping Rope', price: 199, category: 'Sports', brand: 'Nivia', image: 'https://via.placeholder.com/300x200?text=Rope' },
  { id: 47, title: 'Tennis Ball Pack', price: 349, category: 'Sports', brand: 'Cosco', image: 'https://via.placeholder.com/300x200?text=Tennis+Balls' },
  { id: 48, title: 'Fitness Band', price: 999, category: 'Sports', brand: 'Noise', image: 'https://via.placeholder.com/300x200?text=Band' },
  { id: 49, title: 'Kettlebell', price: 1099, category: 'Sports', brand: 'Kobo', image: 'https://via.placeholder.com/300x200?text=Kettlebell' },
  { id: 50, title: 'Water Bottle', price: 249, category: 'Sports', brand: 'Nivia', image: 'https://via.placeholder.com/300x200?text=Bottle' },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSize, setSelectedSize] = useState('All');
  const [priceRange, setPriceRange] = useState([0, Infinity]);

  const [showCategoryOptions, setShowCategoryOptions] = useState(true);
  const [showBrandOptions, setShowBrandOptions] = useState(true);
  const [showSizeOptions, setShowSizeOptions] = useState(true);
  const [showPriceOptions, setShowPriceOptions] = useState(true);

  const uniqueBrands = Array.from(new Set(allProducts.map(p => p.brand)));
  const uniqueSizes = ['All', 'S', 'M', 'L', 'XL'];

  const filteredProducts = allProducts.filter((p) => {
    const categoryMatch = selectedCategory === 'All' || p.category === selectedCategory;
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
    const sizeMatch = selectedSize === 'All' || (p.size && p.size === selectedSize);
    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
    return categoryMatch && brandMatch && sizeMatch && priceMatch;
  });

  const HEADER_HEIGHT = 170;

  return (
    <main className="w-full min-h-screen bg-gray-100 flex flex-col">
      {/* Offer Banner */}
      <div className="w-full px-4 mt-2">
        <OfferCarousel />
      </div>

      {/* Main Content: Sidebar + Product Grid */}
      <div
        id="products"
        className="flex w-full max-w-[1440px] mx-auto mt-6 px-4 md:px-8 gap-6 flex-1 min-h-0"
        style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
      >
        {/* Sidebar: with filters */}
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

        {/* Product Grid */}
        <section className="flex-1 h-full overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 sticky top-0 bg-gray-100 z-10 py-2">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </main>
  );
}