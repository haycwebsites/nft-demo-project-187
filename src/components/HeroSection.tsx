import React from 'react';
import { useHayc } from '../hayc/config-context';

const HeroSection = () => {
  const { t, img, config, cp } = useHayc();

  return (
    <main>
      <section id="home" className="slider-area fix p-relative">
        <div className="slider-active">
          <div className="single-slider slider-bg d-flex align-items-center" style={{backgroundImage: `url(${img(config.heroConfig.slide1Background)})`}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="slider-content s-slider-content text-left">
                    <h2 {...cp('heroConfig.slide1Title')} data-animation="fadeInUp" data-delay=".4s">{t(config.heroConfig.slide1Title)}</h2>
                    <ul data-animation="fadeInUp" data-delay=".6s">
                      <li>
                        <i className="fas fa-bed"></i>
                        <span {...cp('heroConfig.bedrooms')}>{t(config.heroConfig.bedrooms)}</span>
                      </li>
                      <li>
                        <i className="fal fa-pencil-ruler"></i>
                        <span {...cp('heroConfig.squareFeet')}>{t(config.heroConfig.squareFeet)}</span>
                      </li>
                      <li>
                        <i className="fas fa-bath"></i>
                        <span {...cp('heroConfig.bathrooms')}>{t(config.heroConfig.bathrooms)}</span>
                      </li>
                      <li>
                        <i className="fas fa-car"></i>
                        <span {...cp('heroConfig.parking')}>{t(config.heroConfig.parking)}</span>
                      </li>
                    </ul>
                    <div className="slider-btn mt-55">
                      <a href={config.heroConfig.quoteButtonLink} className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s" {...cp('heroConfig.quoteButton')}>{t(config.heroConfig.quoteButton)}</a>
                      <a href={config.heroConfig.videoLink} className="video-i popup-video" data-animation="fadeInUp" data-delay=".8s" style={{animationDelay: '0.8s'}} tabIndex={0}><i className="fas fa-play"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="slider-price">
                    <h3 {...cp('heroConfig.priceLabel')}>{t(config.heroConfig.priceLabel)}</h3>
                    <h2 {...cp('heroConfig.slide1Price')}>{t(config.heroConfig.slide1Price)}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider slider-bg d-flex align-items-center" style={{backgroundImage: `url(${img(config.heroConfig.slide2Background)})`}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="slider-content s-slider-content text-left">
                    <h2 {...cp('heroConfig.slide2Title')} data-animation="fadeInUp" data-delay=".4s">{t(config.heroConfig.slide2Title)}</h2>
                    <ul data-animation="fadeInUp" data-delay=".6s">
                      <li>
                        <i className="fas fa-bed"></i>
                        <span {...cp('heroConfig.bedrooms')}>{t(config.heroConfig.bedrooms)}</span>
                      </li>
                      <li>
                        <i className="fal fa-pencil-ruler"></i>
                        <span {...cp('heroConfig.squareFeet')}>{t(config.heroConfig.squareFeet)}</span>
                      </li>
                      <li>
                        <i className="fas fa-bath"></i>
                        <span {...cp('heroConfig.bathrooms')}>{t(config.heroConfig.bathrooms)}</span>
                      </li>
                      <li>
                        <i className="fas fa-car"></i>
                        <span {...cp('heroConfig.parking')}>{t(config.heroConfig.parking)}</span>
                      </li>
                    </ul>
                    <div className="slider-btn mt-55">
                      <a href={config.heroConfig.quoteButtonLink} className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s" {...cp('heroConfig.quoteButton')}>{t(config.heroConfig.quoteButton)}</a>
                      <a href={config.heroConfig.videoLink} className="video-i popup-video" data-animation="fadeInUp" data-delay=".8s" style={{animationDelay: '0.8s'}} tabIndex={0}><i className="fas fa-play"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="slider-price">
                    <h3 {...cp('heroConfig.priceLabel')}>{t(config.heroConfig.priceLabel)}</h3>
                    <h2 {...cp('heroConfig.slide2Price')}>{t(config.heroConfig.slide2Price)}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;