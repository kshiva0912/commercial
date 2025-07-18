import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import OfferCarousel from '../components/OfferCarousel';

export default function HomePage() {
  return (
    <div className="text-gray-800">
      <HeroSection />
      <Categories />
      <OfferCarousel />
      <FeaturedProducts />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
