import { useHayc } from '../hayc/config-context';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CounterSection from '../components/CounterSection';
import InteriorViewsSection from '../components/InteriorViewsSection';
import PropertiesSection from '../components/PropertiesSection';
import ServicesSection from '../components/ServicesSection';
import ApartmentPlansSection from '../components/ApartmentPlansSection';
import AvailabilitySection from '../components/AvailabilitySection';
import NeighborhoodsSection from '../components/NeighborhoodsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import BrandSection from '../components/BrandSection';

export default function HomePage() {
  const { config } = useHayc();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CounterSection />
      <InteriorViewsSection />
      <PropertiesSection />
      <ServicesSection />
      <ApartmentPlansSection />
      <AvailabilitySection />
      <NeighborhoodsSection />
      <TestimonialsSection />
      <ContactSection />
      <BrandSection />
    </div>
  );
}