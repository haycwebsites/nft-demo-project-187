import { useHayc } from '../hayc/config-context';
import BreadcrumbSection from '../components/BreadcrumbSection';
import BlogDetailsSection from '../components/BlogDetailsSection';
import SidebarSection from '../components/SidebarSection';

export default function BlogDetails() {
  const { config } = useHayc();

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSection />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogDetailsSection />
          </div>
          <div className="lg:col-span-1">
            <SidebarSection />
          </div>
        </div>
      </div>
    </div>
  );
}