import { useState } from 'react';

export default function Sidebar({
  selectedCategory,
  onSelectCategory,
  selectedBrands,
  onSelectBrands,
  selectedSize,
  onSelectSize,
  priceRange,
  onSelectPriceRange,
  brands,
  sizes,
  showCategoryOptions,
  setShowCategoryOptions,
  showBrandOptions,
  setShowBrandOptions,
  showSizeOptions,
  setShowSizeOptions,
  showPriceOptions,
  setShowPriceOptions,
}) {
  const toggleSelection = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <button
          onClick={() => setShowCategoryOptions(!showCategoryOptions)}
          className="w-full text-left font-semibold text-gray-800 mb-2"
        >
          Select Category
        </button>
        {showCategoryOptions && (
          <ul className="space-y-1">
            {['All', 'Electronics', 'Fashion', 'Home', 'Books', 'Sports'].map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => onSelectCategory(cat)}
                  className={`w-full text-left px-3 py-1 text-sm rounded ${
                    selectedCategory === cat
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Brand Filter */}
      <div>
        <button
          onClick={() => setShowBrandOptions(!showBrandOptions)}
          className="w-full text-left font-semibold text-gray-800 mb-2"
        >
          Select Brand
        </button>
        {showBrandOptions && (
          <ul className="space-y-1 max-h-40 overflow-y-auto">
            {brands.map((brand) => (
              <li key={brand} className="flex items-center space-x-2 px-2">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleSelection(brand, selectedBrands, onSelectBrands)}
                />
                <span className="text-sm">{brand}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Size Filter */}
      <div>
        <button
          onClick={() => setShowSizeOptions(!showSizeOptions)}
          className="w-full text-left font-semibold text-gray-800 mb-2"
        >
          Select Size
        </button>
        {showSizeOptions && (
          <select
            value={selectedSize}
            onChange={(e) => onSelectSize(e.target.value)}
            className="w-full border rounded px-3 py-1 text-sm"
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Price Range Filter */}
      <div>
        <button
          onClick={() => setShowPriceOptions(!showPriceOptions)}
          className="w-full text-left font-semibold text-gray-800 mb-2"
        >
          Select Price Range
        </button>
        {showPriceOptions && (
          <div className="space-y-2 text-sm px-1">
            <div className="flex items-center justify-between">
              <label htmlFor="minPrice">Min:</label>
              <input
                id="minPrice"
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  onSelectPriceRange([+e.target.value, priceRange[1]])
                }
                className="border px-2 py-1 w-20 rounded"
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="maxPrice">Max:</label>
              <input
                id="maxPrice"
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  onSelectPriceRange([priceRange[0], +e.target.value || Infinity])
                }
                className="border px-2 py-1 w-20 rounded"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
