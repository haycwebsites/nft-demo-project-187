import { useHayc } from '../hayc/config-context';

interface AvailabilityConfig {
  title: { en: string };
  subtitle: { en: string };
  description: { en: string };
  features: Array<{
    icon: string;
    title: { en: string };
    description: { en: string };
  }>;
  ctaButton: { en: string };
  ctaButtonLink: string;
}

const availabilityConfig: AvailabilityConfig = {
  title: { en: 'Apartment Availability' },
  subtitle: { en: 'Check Available Units' },
  description: { en: 'Discover our available luxury apartments with modern amenities and stunning city views. Each unit is designed with comfort and style in mind.' },
  features: [
    {
      icon: 'fas fa-home',
      title: { en: '1 Bedroom' },
      description: { en: 'Starting from $1,200/month' }
    },
    {
      icon: 'fas fa-building',
      title: { en: '2 Bedroom' },
      description: { en: 'Starting from $1,800/month' }
    },
    {
      icon: 'fas fa-city',
      title: { en: '3 Bedroom' },
      description: { en: 'Starting from $2,500/month' }
    }
  ],
  ctaButton: { en: 'View All Units' },
  ctaButtonLink: '/apartments'
};

export default function AvailabilitySection() {
  const { t, img, config, cp } = useHayc();
  const availabilityData = config.availabilityConfig || availabilityConfig;

  return (
    <section className="availability-section py-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center mb-60">
              <h2 {...cp('availabilityConfig.title')}>
                {t(availabilityData.title)}
              </h2>
              <h4 {...cp('availabilityConfig.subtitle')} className="subtitle mb-20">
                {t(availabilityData.subtitle)}
              </h4>
              <p {...cp('availabilityConfig.description')} className="description">
                {t(availabilityData.description)}
              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
          {availabilityData.features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-30">
              <div className="availability-item text-center">
                <div className="availability-icon mb-20">
                  <i className={feature.icon}></i>
                </div>
                <h4 {...cp(`availabilityConfig.features.${index}.title`)} className="availability-title mb-15">
                  {t(feature.title)}
                </h4>
                <p {...cp(`availabilityConfig.features.${index}.description`)} className="availability-desc">
                  {t(feature.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row">
          <div className="col-12 text-center mt-30">
            <a 
              {...cp('availabilityConfig.ctaButton')} 
              href={availabilityData.ctaButtonLink} 
              className="btn btn-primary"
            >
              {t(availabilityData.ctaButton)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}