import { useHayc } from '../hayc/config-context';

export function CtaSection() {
  const { t, img, config, cp } = useHayc();

  if (!config.ctaConfig?.title?.en) return null;

  return (
    <section 
      className="cta-area cta-bg pt-120 pb-120" 
      style={{ backgroundImage: `url(${img(config.ctaConfig.backgroundImage)})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="cta-content text-center">
              <h2 {...cp('ctaConfig.title')} className="cta-title">
                {t(config.ctaConfig.title)}
              </h2>
              <p {...cp('ctaConfig.subtitle')} className="cta-subtitle">
                {t(config.ctaConfig.subtitle)}
              </p>
              <div className="cta-btn mt-40">
                <a 
                  {...cp('ctaConfig.buttonText')}
                  href={config.ctaConfig.buttonLink} 
                  className="btn theme-btn"
                >
                  {t(config.ctaConfig.buttonText)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}