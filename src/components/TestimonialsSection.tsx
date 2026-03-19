import { useHayc } from '../hayc/config-context';

export default function TestimonialsSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <div>
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col" {...cp('testimonialsConfig.tableHeaders.residence')}>
              {t(config.testimonialsConfig.tableHeaders.residence)}
            </th>
            <th scope="col" {...cp('testimonialsConfig.tableHeaders.bedBath')}>
              {t(config.testimonialsConfig.tableHeaders.bedBath)}
            </th>
            <th scope="col" {...cp('testimonialsConfig.tableHeaders.sqft')}>
              {t(config.testimonialsConfig.tableHeaders.sqft)}
            </th>
            <th scope="col" {...cp('testimonialsConfig.tableHeaders.salePrice')}>
              {t(config.testimonialsConfig.tableHeaders.salePrice)}
            </th>
            <th scope="col" {...cp('testimonialsConfig.tableHeaders.rentPrice')}>
              {t(config.testimonialsConfig.tableHeaders.rentPrice)}
            </th>
            <th scope="col" {...cp('testimonialsConfig.tableHeaders.floorPlan')}>
              {t(config.testimonialsConfig.tableHeaders.floorPlan)}
            </th>
          </tr>
        </thead>
        <tbody>
          {config.testimonialsConfig.residences.map((residence, index) => (
            <tr key={index}>
              <td className="name" {...cp(`testimonialsConfig.residences.${index}.name`)}>
                {t(residence.name)}
              </td>
              <td {...cp(`testimonialsConfig.residences.${index}.bedBath`)}>
                {t(residence.bedBath)}
              </td>
              <td {...cp(`testimonialsConfig.residences.${index}.sqft`)}>
                {residence.sqft}
              </td>
              <td className="price" {...cp(`testimonialsConfig.residences.${index}.salePrice`)}>
                {t(residence.salePrice)}
              </td>
              <td className="price" {...cp(`testimonialsConfig.residences.${index}.rentPrice`)}>
                {t(residence.rentPrice)}
              </td>
              <td>
                <a 
                  className="btn popup-image" 
                  href={img(residence.floorPlanImage)} 
                  data-elementor-open-lightbox="yes"
                  {...cp(`testimonialsConfig.residences.${index}.viewButtonText`)}
                >
                  {t(residence.viewButtonText)}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <section id="services" className="services-area services-bg services-two pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                <span {...cp('testimonialsConfig.neighborhoodsSubtitle')}>
                  {t(config.testimonialsConfig.neighborhoodsSubtitle)}
                </span>
                <h2 {...cp('testimonialsConfig.neighborhoodsTitle')}>
                  {t(config.testimonialsConfig.neighborhoodsTitle)}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {config.testimonialsConfig.neighborhoods.map((neighborhood, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={`s-single-services ${neighborhood.isActive ? 'active' : ''} wow fadeInUp animated`} data-animation="fadeInDown animated" data-delay=".2s">
                  <div className="second-services-content">
                    <h5 {...cp(`testimonialsConfig.neighborhoods.${index}.title`)}>
                      {t(neighborhood.title)}
                    </h5>
                    <p {...cp(`testimonialsConfig.neighborhoods.${index}.description`)}>
                      {t(neighborhood.description)}
                    </p>
                  </div>
                  <div className="services-icon">
                    <i className="far fa-star-half"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}