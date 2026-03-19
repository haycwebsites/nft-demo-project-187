import { useHayc } from '../hayc/config-context';

interface ApartmentPlansConfig {
  sectionTitle: { en: string };
  sectionSubtitle: { en: string };
  gallery: {
    image: string;
    exploreText: { en: string };
    title: { en: string };
    detailsLink: string;
  }[];
  propertySection: {
    subtitle: { en: string };
    title: { en: string };
    description: { en: string };
    features: {
      icon: string;
      text: { en: string };
    }[];
    price: { en: string };
    priceAmount: { en: string };
    contactButton: { en: string };
    propertyImage: string;
  };
  servicesSection: {
    subtitle: { en: string };
    title: { en: string };
    services: {
      icon: string;
      title: { en: string };
      description: { en: string };
      readMoreText: { en: string };
    }[];
  };
}

// This would be added to src/config.ts
const apartmentPlansConfig: ApartmentPlansConfig = {
  sectionTitle: { en: 'Interior Views' },
  sectionSubtitle: { en: 'Best Work' },
  gallery: [
    {
      image: '/img/gallery/gallery.jpg',
      exploreText: { en: 'Explore Now' },
      title: { en: 'One Room Apartment' },
      detailsLink: 'apartments-details'
    },
    {
      image: '/img/gallery/gallery02.jpg',
      exploreText: { en: 'Explore Now' },
      title: { en: 'Luxury Apartment' },
      detailsLink: 'apartments-details'
    },
    {
      image: '/img/gallery/gallery03.jpg',
      exploreText: { en: 'Explore Now' },
      title: { en: 'Deluxe Apartment' },
      detailsLink: 'apartments-details'
    },
    {
      image: '/img/gallery/gallery.jpg',
      exploreText: { en: 'Explore Now' },
      title: { en: 'One Room Apartment' },
      detailsLink: 'apartments-details'
    },
    {
      image: '/img/gallery/gallery02.jpg',
      exploreText: { en: 'Explore Now' },
      title: { en: 'Luxury Apartment' },
      detailsLink: 'apartments-details'
    },
    {
      image: '/img/gallery/gallery03.jpg',
      exploreText: { en: 'Explore Now' },
      title: { en: 'Deluxe Apartment' },
      detailsLink: 'apartments-details'
    }
  ],
  propertySection: {
    subtitle: { en: 'Best Place' },
    title: { en: 'For Sell Properties' },
    description: { en: 'Pellentesque habitant morbi tristique senectus et netus et fames acturpis egestas. Vestibulum tortor quam, feugiat vitae, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. mivitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien.' },
    features: [
      {
        icon: 'fas fa-bed',
        text: { en: '3 Bedrooms.' }
      },
      {
        icon: 'fal fa-pencil-ruler',
        text: { en: 'Square Feet' }
      },
      {
        icon: 'fas fa-bath',
        text: { en: 'Bedrooms' }
      },
      {
        icon: 'fas fa-car',
        text: { en: 'Car parking' }
      }
    ],
    price: { en: 'Price:' },
    priceAmount: { en: '$1,786.80' },
    contactButton: { en: 'Contact Us' },
    propertyImage: '/img/features/about_img03.png'
  },
  servicesSection: {
    subtitle: { en: 'our services' },
    title: { en: 'What We Do' },
    services: [
      {
        icon: 'fad fa-megaphone',
        title: { en: 'Dedicated Production & Planning Teams' },
        description: { en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore.' },
        readMoreText: { en: 'Read More' }
      },
      {
        icon: 'far fa-building',
        title: { en: 'We\'re Here To Make You Successful' },
        description: { en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore.' },
        readMoreText: { en: 'Read More' }
      },
      {
        icon: 'fad fa-home',
        title: { en: 'Premium, Fresh Cuisine Made Onsite' },
        description: { en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore.' },
        readMoreText: { en: 'Read More' }
      },
      {
        icon: 'fas fa-search-location',
        title: { en: 'Dedicated Production & Planning Teams' },
        description: { en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore.' },
        readMoreText: { en: 'Read More' }
      }
    ]
  }
};

export default function ApartmentPlansSection() {
  const { t, img, config, cp } = useHayc();
  
  // Using mock config for demonstration - in real implementation this would come from config.siteConfig.apartmentPlansConfig
  const sectionConfig = apartmentPlansConfig;

  return (
    <>
      {/* Interior Views Gallery Section */}
      <section className="services-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center pl-40 pr-40 mb-80">
                <span {...cp('apartmentPlansConfig.sectionSubtitle')}>{t(sectionConfig.sectionSubtitle)}</span>
                <h2 {...cp('apartmentPlansConfig.sectionTitle')}>{t(sectionConfig.sectionTitle)}</h2>
              </div>
            </div>
          </div>
          <div className="row services-active">
            {sectionConfig.gallery.map((item, index) => (
              <div key={index} className="col-xl-4">
                <div className="single-services mb-30">
                  <div className="services-thumb">
                    <a className="gallery-link popup-image" href={img(item.image)}>
                      <img src={img(item.image)} alt="img" />
                    </a>
                  </div>
                  <div className="services-content">
                    <small {...cp(`apartmentPlansConfig.gallery.${index}.exploreText`)}>{t(item.exploreText)}</small>
                    <h4>
                      <a href={item.detailsLink} {...cp(`apartmentPlansConfig.gallery.${index}.title`)}>
                        {t(item.title)}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="choose-area pt-120 pb-120 p-relative" style={{background: '#f5f5f5'}}>
        <div className="chosse-img wow fadeInRight animated" data-animation="fadeInRight animated" data-delay=".2s"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="s-about-img p-relative">
                <img src={img(sectionConfig.propertySection.propertyImage)} alt="img" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="choose-wrap">
                <div className="section-title w-title left-align mb-35 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                  <span {...cp('apartmentPlansConfig.propertySection.subtitle')}>{t(sectionConfig.propertySection.subtitle)}</span>
                  <h2 {...cp('apartmentPlansConfig.propertySection.title')}>{t(sectionConfig.propertySection.title)}</h2>
                </div>
                <div className="choose-content wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                  <p {...cp('apartmentPlansConfig.propertySection.description')}>{t(sectionConfig.propertySection.description)}</p>
                  
                  <div className="choose-list mt-20 mb-20">
                    <ul>
                      {sectionConfig.propertySection.features.map((feature, index) => (
                        <li key={index}>
                          <i className={feature.icon}></i>
                          <span {...cp(`apartmentPlansConfig.propertySection.features.${index}.text`)}>{t(feature.text)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h3 {...cp('apartmentPlansConfig.propertySection.price')}>{t(sectionConfig.propertySection.price)}</h3>
                  <h2 {...cp('apartmentPlansConfig.propertySection.priceAmount')}>{t(sectionConfig.propertySection.priceAmount)}</h2>
                  <div className="choose-btn mt-30">
                    <a href="#" className="btn" {...cp('apartmentPlansConfig.propertySection.contactButton')}>{t(sectionConfig.propertySection.contactButton)}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-area services-bg services-two pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                <span {...cp('apartmentPlansConfig.servicesSection.subtitle')}>{t(sectionConfig.servicesSection.subtitle)}</span>
                <h2 {...cp('apartmentPlansConfig.servicesSection.title')}>{t(sectionConfig.servicesSection.title)}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {sectionConfig.servicesSection.services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-30">
                <div className="s-single-services wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                  <div className="services-ico2">
                    <i className={service.icon}></i>
                  </div>
                  <div className="second-services-content2">
                    <h5 {...cp(`apartmentPlansConfig.servicesSection.services.${index}.title`)}>{t(service.title)}</h5>
                    <p {...cp(`apartmentPlansConfig.servicesSection.services.${index}.description`)}>{t(service.description)}</p>
                    <a href="#" {...cp(`apartmentPlansConfig.servicesSection.services.${index}.readMoreText`)}>{t(service.readMoreText)}</a>
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