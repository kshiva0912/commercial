// src/components/BrandsCarousel.jsx
import React from 'react';

const brands = [
 { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
          { name: 'boAt', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/BoAt_Logo.svg' },
          { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
          { name: 'Noise', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Noise_brand_logo.png' },
          { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
          { name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
          { name: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/LG_logo_%282015%29.svg' },
          { name: 'Penguin', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Penguin_Books_logo.svg' },
          { name: 'Nivia', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Nivia_logo.png' },
          { name: 'Puma', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_logo.svg' },
          { name: 'Roadster', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Roadster_logo.png' },
          { name: 'Highlander', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Highlander_logo.png' },
          { name: 'RayBan', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Ray-Ban_logo.svg' },
];

export default function BrandsCarousel({ onBrandSelect }) {
  return (
    <div className="mt-6 mb-8 px-4">
      <h2 className="text-xl font-semibold mb-3">Shop by Brand</h2>
      <div className="flex gap-6 overflow-x-auto py-2 scrollbar-hide">
        {brands.map((brand) => (
          <button
            key={brand.name}
            onClick={() => onBrandSelect(brand.name)}
            className="flex flex-col items-center hover:scale-105 transition"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-16 w-24 object-contain rounded bg-white p-2 shadow"
            />
            <span className="text-sm mt-2">{brand.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
