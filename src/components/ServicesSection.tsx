import React from 'react';
import { useHayc } from '../hayc/config-context';

interface ServiceItem {
  icon: string;
  title: { en: string };
  description: { en: string };
  readMoreText: { en: string };
  href: string;
}

interface ServicesConfig {
  services: ServiceItem[];
}

declare module '../config' {
  interface LocaleString {
    en: string;
  }
}

// Add to config.ts:
export const servicesConfig: ServicesConfig = {
  services: [
    {
      icon: "fad fa-megaphone",
      title: { en: "Dedicated Production & Planning Teams" },
      description: { en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore." },
      readMoreText: { en: "Read More" },
      href: "#"
    },
    {
      icon: "far fa-building",
      title: { en: "We're Here To Make You Successful" },
      description: { en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore." },
      readMoreText: { en: "Read More" },
      href: "#"
    },
    {
      icon: "fad fa-home",
      title: { en: "Premium, Fresh Cuisine Made Onsite" },
      description: { en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore." },
      readMoreText: { en: "Read More" },
      href: "#"
    },
    {
      icon: "fas fa-search-location",
      title: { en: "Flexible, Contemporary & Included Spaces" },
      description: { en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore." },
      readMoreText: { en: "Read More" },
      href: "#"
    },
    {
      icon: "far fa-car-garage",
      title: { en: "Human-Centered Design Friendly Spaces" },
      description: { en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore." },
      readMoreText: { en: "Read More" },
      href: "#"
    },
    {
      icon: "fas fa-comments-alt",
      title: { en: "Broker Cutting-Edge And Technology" },
      description: { en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore." },
      readMoreText: { en: "Read More" },
      href: "#"
    }
  ]
};

export default function ServicesSection() {
  const { t, config, cp } = useHayc();

  return (
    <section id="services" className="services-area services-bg services-two pt-120 pb-90">
      <div className="container">
        <div className="row">
          {config.servicesConfig.services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-30">
              <div className="s-single-services wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                <div className="services-ico2">
                  <i className={service.icon}></i>
                </div>
                <div className="second-services-content2">
                  <h5 {...cp(`servicesConfig.services.${index}.title`)}>
                    {t(service.title)}
                  </h5>
                  <p {...cp(`servicesConfig.services.${index}.description`)}>
                    {t(service.description)}
                  </p>
                  <a 
                    href={service.href}
                    {...cp(`servicesConfig.services.${index}.readMoreText`)}
                  >
                    {t(service.readMoreText)}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}