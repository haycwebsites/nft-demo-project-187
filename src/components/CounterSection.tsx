import { useHayc } from '../hayc/config-context';

export default function CounterSection() {
  const { t, img, config, cp } = useHayc();

  if (!config.counterSectionConfig?.title) {
    return null;
  }

  return (
    <div 
      className="counter-area pt-120 pb-90" 
      style={{ 
        backgroundImage: `url(${img(config.counterSectionConfig.backgroundImage)})`, 
        backgroundSize: 'cover' 
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center mb-60">
              <h2 {...cp('counterSectionConfig.title')}>{t(config.counterSectionConfig.title)}</h2>
              <p {...cp('counterSectionConfig.subtitle')}>{t(config.counterSectionConfig.subtitle)}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {config.counterSectionConfig.counters.map((counter, index) => (
            <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="counter-wrapper text-center mb-30">
                <div className="counter-icon mb-25">
                  <img src={img(counter.icon)} alt="counter icon" />
                </div>
                <div className="counter-text">
                  <h3 {...cp(`counterSectionConfig.counters.${index}.number`)}>
                    <span className="counter">{counter.number}</span>+
                  </h3>
                  <p {...cp(`counterSectionConfig.counters.${index}.label`)}>{t(counter.label)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}