import { useHayc } from '../hayc/config-context';
import BreadcrumbSection from '../components/BreadcrumbSection';
import BlogListingSection from '../components/BlogListingSection';
import BlogSidebarSection from '../components/BlogSidebarSection';

export default function BlogPage() {
  const { t, img, config, cp } = useHayc();

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSection />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogListingSection />
          </div>
          <div className="lg:col-span-1">
            <BlogSidebarSection />
          </div>
        </div>
      </div>
    </div>
  );
}