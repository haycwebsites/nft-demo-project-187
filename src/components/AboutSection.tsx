import { useHayc } from '../hayc/config-context';

export default function AboutSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <section id="about" className="about-area about-p pt-120 pb-120 p-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="s-about-img p-relative">
              <img src={img(config.aboutConfig.image)} alt="img" />
              <div className="about-text second-about">
                <span {...cp('aboutConfig.experienceText')}>{t(config.aboutConfig.experienceText)}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content s-about-content pl-30">
              <div className="about-title second-atitle">
                <span {...cp('aboutConfig.sectionLabel')}>{t(config.aboutConfig.sectionLabel)}</span>
                <h2 {...cp('aboutConfig.title')}>{t(config.aboutConfig.title)}</h2>
                <p><span></span><span {...cp('aboutConfig.subtitle')}>{t(config.aboutConfig.subtitle)}</span></p>
              </div>
              <p {...cp('aboutConfig.description')}>{t(config.aboutConfig.description)}</p>
              <a href="#" className="btn" {...cp('aboutConfig.buttonText')}>{t(config.aboutConfig.buttonText)}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}