import { useHayc } from '../hayc/config-context';

export default function ContactSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <>
      <section className="apartments pt-120 pb-90" style={{ background: '#f5f5f5' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                <span {...cp('contactSection.subtitle')}>{t(config.contactSection.subtitle)}</span>
                <h2 {...cp('contactSection.title')}>{t(config.contactSection.title)}</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <p {...cp('contactSection.description1')}>{t(config.contactSection.description1)}</p> 
                      <p {...cp('contactSection.description2')}>{t(config.contactSection.description2)}</p>      
                      <ul>
                        <li {...cp('contactSection.floorNo')}>
                          {t(config.contactSection.floorNoLabel)} <span className="after">{t(config.contactSection.floorNo)}</span>
                        </li>
                        <li {...cp('contactSection.rooms')}>
                          {t(config.contactSection.roomsLabel)} <span className="after">{t(config.contactSection.rooms)}</span>
                        </li>
                        <li {...cp('contactSection.totalArea')}>
                          {t(config.contactSection.totalAreaLabel)} <span className="after">{t(config.contactSection.totalArea)}</span>
                        </li>
                        <li {...cp('contactSection.parking')}>
                          {t(config.contactSection.parkingLabel)} <span className="after">{t(config.contactSection.parking)}</span>
                        </li>
                        <li {...cp('contactSection.price')}>
                          {t(config.contactSection.priceLabel)} <span className="after">{t(config.contactSection.price)}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="apartments-img">
                        <img src={img(config.contactSection.floorChartImage)} alt="floor-chart"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <p {...cp('contactSection.aboutDescription1')}>{t(config.contactSection.aboutDescription1)}</p> 
                      <p {...cp('contactSection.aboutDescription2')}>{t(config.contactSection.aboutDescription2)}</p>      
                      <ul>
                        <li {...cp('contactSection.aboutFloorNo')}>
                          {t(config.contactSection.floorNoLabel)} <span className="after">{t(config.contactSection.aboutFloorNo)}</span>
                        </li>
                        <li {...cp('contactSection.aboutRooms')}>
                          {t(config.contactSection.roomsLabel)} <span className="after">{t(config.contactSection.aboutRooms)}</span>
                        </li>
                        <li {...cp('contactSection.aboutTotalArea')}>
                          {t(config.contactSection.totalAreaLabel)} <span className="after">{t(config.contactSection.aboutTotalArea)}</span>
                        </li>
                        <li {...cp('contactSection.aboutParking')}>
                          {t(config.contactSection.parkingLabel)} <span className="after">{t(config.contactSection.aboutParking)}</span>
                        </li>
                        <li {...cp('contactSection.aboutPrice')}>
                          {t(config.contactSection.priceLabel)} <span className="after">{t(config.contactSection.aboutPrice)}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="apartments-img">
                        <img src={img(config.contactSection.floorChartImage)} alt="floor-chart"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="apartments pt-120 pb-90" style={{ background: '#f5f5f5' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                <span {...cp('contactSection.availabilitySubtitle')}>{t(config.contactSection.availabilitySubtitle)}</span>
                <h2 {...cp('contactSection.availabilityTitle')}>{t(config.contactSection.availabilityTitle)}</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="availability-section">
                <div className="availability-table">
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th scope="col" {...cp('contactSection.residenceHeader')}>{t(config.contactSection.residenceHeader)}</th>
                        <th scope="col" {...cp('contactSection.bedBathHeader')}>{t(config.contactSection.bedBathHeader)}</th>
                        <th scope="col" {...cp('contactSection.sqftHeader')}>{t(config.contactSection.sqftHeader)}</th>
                        <th scope="col" {...cp('contactSection.salePriceHeader')}>{t(config.contactSection.salePriceHeader)}</th>
                        <th scope="col" {...cp('contactSection.rentPriceHeader')}>{t(config.contactSection.rentPriceHeader)}</th>
                        <th scope="col" {...cp('contactSection.floorPlanHeader')}>{t(config.contactSection.floorPlanHeader)}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {config.contactSection.properties.map((property, index) => (
                        <tr key={index}>
                          <td className="name" {...cp(`contactSection.properties.${index}.name`)}>{t(property.name)}</td>
                          <td {...cp(`contactSection.properties.${index}.bedBath`)}>{t(property.bedBath)}</td>
                          <td {...cp(`contactSection.properties.${index}.sqft`)}>{t(property.sqft)}</td>
                          <td className="price" {...cp(`contactSection.properties.${index}.salePrice`)}>{t(property.salePrice)}</td>
                          <td className="price" {...cp(`contactSection.properties.${index}.rentPrice`)}>{t(property.rentPrice)}</td>
                          <td>
                            <a className="btn popup-image" href={img(config.contactSection.floorChartImage)} data-elementor-open-lightbox="yes" {...cp(`contactSection.properties.${index}.viewButton`)}>
                              {t(property.viewButton)}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-area services-bg services-two pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                <span {...cp('contactSection.neighborhoodsSubtitle')}>{t(config.contactSection.neighborhoodsSubtitle)}</span>
                <h2 {...cp('contactSection.neighborhoodsTitle')}>{t(config.contactSection.neighborhoodsTitle)}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Add to config.ts:
export interface ContactSectionConfig {
  subtitle: LocaleString;
  title: LocaleString;
  description1: LocaleString;
  description2: LocaleString;
  floorNoLabel: LocaleString;
  floorNo: LocaleString;
  roomsLabel: LocaleString;
  rooms: LocaleString;
  totalAreaLabel: LocaleString;
  totalArea: LocaleString;
  parkingLabel: LocaleString;
  parking: LocaleString;
  priceLabel: LocaleString;
  price: LocaleString;
  floorChartImage: string;
  aboutDescription1: LocaleString;
  aboutDescription2: LocaleString;
  aboutFloorNo: LocaleString;
  aboutRooms: LocaleString;
  aboutTotalArea: LocaleString;
  aboutParking: LocaleString;
  aboutPrice: LocaleString;
  availabilitySubtitle: LocaleString;
  availabilityTitle: LocaleString;
  residenceHeader: LocaleString;
  bedBathHeader: LocaleString;
  sqftHeader: LocaleString;
  salePriceHeader: LocaleString;
  rentPriceHeader: LocaleString;
  floorPlanHeader: LocaleString;
  properties: Array<{
    name: LocaleString;
    bedBath: LocaleString;
    sqft: LocaleString;
    salePrice: LocaleString;
    rentPrice: LocaleString;
    viewButton: LocaleString;
  }>;
  neighborhoodsSubtitle: LocaleString;
  neighborhoodsTitle: LocaleString;
}

export const contactSection: ContactSectionConfig = {
  subtitle: { en: 'Our Plans' },
  title: { en: 'Select Availability' },
  description1: { en: 'There are many variations of passages of psum available, but the majority have alteration in some form, by injected humour, or randomised words which don\'t look even believable.' },
  description2: { en: 'If you are going to use a passage of lorem ipsum is simply free text, you need to be sure there isn\'t anything embarrassing hidden.' },
  floorNoLabel: { en: 'FLOOR NO' },
  floorNo: { en: '25' },
  roomsLabel: { en: 'ROOMS' },
  rooms: { en: '18' },
  totalAreaLabel: { en: 'TOTAL AREA / SQFT' },
  totalArea: { en: '2800' },
  parkingLabel: { en: 'PARKING' },
  parking: { en: '1' },
  priceLabel: { en: 'PRICE' },
  price: { en: '112999$/Month' },
  floorChartImage: '/img/floor-chart.jpg',
  aboutDescription1: { en: 'There are many variations of passages of psum available, but the majority have alteration in some form, by injected humour, or randomised words which don\'t look even believable.' },
  aboutDescription2: { en: 'If you are going to use a passage of lorem ipsum is simply free text, you need to be sure there isn\'t anything embarrassing hidden.' },
  aboutFloorNo: { en: '16' },
  aboutRooms: { en: '5' },
  aboutTotalArea: { en: '1800' },
  aboutParking: { en: '1' },
  aboutPrice: { en: '3000$/Month' },
  availabilitySubtitle: { en: 'Our Plans' },
  availabilityTitle: { en: 'Select Availability' },
  residenceHeader: { en: 'residence' },
  bedBathHeader: { en: 'bed/bath' },
  sqftHeader: { en: 'SQ.FT' },
  salePriceHeader: { en: 'sale price' },
  rentPriceHeader: { en: 'rent price' },
  floorPlanHeader: { en: 'floor plan' },
  properties: [
    {
      name: { en: 'RESIDENT TOWER' },
      bedBath: { en: '3/1' },
      sqft: { en: '700' },
      salePrice: { en: '$66800' },
      rentPrice: { en: '$700/m' },
      viewButton: { en: 'view now' }
    },
    {
      name: { en: 'UNIQ VILLA' },
      bedBath: { en: '4/2' },
      sqft: { en: '1200' },
      salePrice: { en: '$56800' },
      rentPrice: { en: '-' },
      viewButton: { en: 'view now' }
    },
    {
      name: { en: 'LOCAL TOWER' },
      bedBath: { en: '4/1' },
      sqft: { en: '120' },
      salePrice: { en: '$9000' },
      rentPrice: { en: '-' },
      viewButton: { en: 'view now' }
    },
    {
      name: { en: 'RED CITY' },
      bedBath: { en: '6/2' },
      sqft: { en: '8500' },
      salePrice: { en: '$909800' },
      rentPrice: { en: '-' },
      viewButton: { en: 'view now' }
    },
    {
      name: { en: 'ZCUBE TOWER' },
      bedBath: { en: '5/2' },
      sqft: { en: '1800' },
      salePrice: { en: '-' },
      rentPrice: { en: '$2000/M' },
      viewButton: { en: 'view now' }
    },
    {
      name: { en: 'ALANI MENTION' },
      bedBath: { en: '6/2' },
      sqft: { en: '2400' },
      salePrice: { en: '$20000' },
      rentPrice: { en: '$2000/w' },
      viewButton: { en: 'view now' }
    },
    {
      name: { en: 'JACKSTOCK TOWER' },
      bedBath: { en: '3/1' },
      sqft: { en: '1200' },
      salePrice: { en: '-' },
      rentPrice: { en: '$400/m' },
      viewButton: { en: 'view now' }
    }
  ],
  neighborhoodsSubtitle: { en: 'villa neihborhoods' },
  neighborhoodsTitle: { en: 'Neighborhoods' }
};