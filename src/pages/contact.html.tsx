import { useHayc } from '../hayc/config-context';
import BreadcrumbSection from '../components/BreadcrumbSection';
import ContactSection from '../components/ContactSection';
import BrandSection from '../components/BrandSection';

export default function ContactPage() {
  const { t, config } = useHayc();

  return (
    <div className="min-h-screen">
      <BreadcrumbSection />
      <ContactSection />
      <BrandSection />
    </div>
  );
}