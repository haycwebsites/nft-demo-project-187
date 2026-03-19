import { useHayc } from '../hayc/config-context';
import BreadcrumbSection from '../components/BreadcrumbSection';
import ServicesSection from '../components/ServicesSection';
import CtaSection from '../components/CtaSection';
import FeaturesSection from '../components/FeaturesSection';

export default function ServicesPage() {
  const { t, img, config, cp } = useHayc();

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSection />
      <ServicesSection />
      <FeaturesSection />
      <CtaSection />
    </div>
  );
}