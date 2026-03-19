import { useHayc } from '../hayc/config-context';

export default function FeaturesSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <>
      <section className="cta-area cta-bg pt-50 pb-50">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <div className="section-title cta-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s">
                <p {...cp('featuresConfig.ctaSection.subtitle')}>{t(config.featuresConfig.ctaSection.subtitle)}</p>
                <h2 {...cp('featuresConfig.ctaSection.title')}>{t(config.featuresConfig.ctaSection.title)}</h2>
                <h3 {...cp('featuresConfig.ctaSection.phoneNumber')}>{t(config.featuresConfig.ctaSection.phoneNumber)}</h3>
                <div className="cta-btn s-cta-btn wow fadeInRight animated mt-30" data-animation="fadeInDown animated" data-delay=".2s">
                  <a href="#" className="btn" {...cp('featuresConfig.ctaSection.buttonText')}>{t(config.featuresConfig.ctaSection.buttonText)}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-area services-bg services-two pt-120 pb-90">
        <div className="container">
          <div className="row">
            {config.featuresConfig.features.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={`s-single-services ${index === 1 ? 'active' : ''} wow fadeInUp animated`} data-animation="fadeInDown animated" data-delay=".2s">
                  <div className="second-services-content">
                    <h5 {...cp(`featuresConfig.features.${index}.title`)}>{t(feature.title)}</h5>
                  </div>
                  <div className="services-icon">
                    <i className={feature.icon}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}