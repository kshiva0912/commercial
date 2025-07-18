import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

// 🔁 Replace these with your own banner image URLs
const banners = [
  '/banners/image1.jpeg', // ✅ Example: /public/banners/offer1.jpg
  '/banners/offer2.jpeg',
  '/banners/offer3.jpeg',
  '/banners/offer4.jpeg',
  '/banners/offer5.jpeg',
];

export default function OfferCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    created: (slider) => {
      setInterval(() => slider.next(), 4000); // auto-play every 4s
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider w-full rounded-lg overflow-hidden shadow mb-6">
      {banners.map((url, index) => (
        <div key={index} className="keen-slider__slide">
          <img
            src={url}
            alt={`Banner ${index + 1}`}
            className="w-full h-auto object-cover max-h-[250px]"
          />
        </div>
      ))}
    </div>
  );
}
