import { useHayc } from '../hayc/config-context';
import BreadcrumbSection from '../components/BreadcrumbSection';
import AboutSection from '../components/AboutSection';
import CtaSection from '../components/CtaSection';
import CounterSection from '../components/CounterSection';

export default function AboutPage() {
  const { t, config } = useHayc();

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSection />
      <AboutSection />
      <CounterSection />
      <CtaSection />
    </div>
  );
}