import { useHayc } from '../hayc/config-context';

interface BreadcrumbSectionProps {
  title?: string;
  backgroundImage?: string;
}

export default function BreadcrumbSection({ 
  title = 'Services', 
  backgroundImage = 'img/testimonial/test-bg.jpg' 
}: BreadcrumbSectionProps) {
  const { t, img, config, cp } = useHayc();

  return (
    <section 
      className="breadcrumb-area d-flex align-items-center" 
      style={{ backgroundImage: `url(${img(backgroundImage)})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div className="breadcrumb-wrap text-center">
              <div className="breadcrumb-title mb-30">
                <h2 {...cp('breadcrumbConfig.title')}>
                  {t(config.breadcrumbConfig?.title) || title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}