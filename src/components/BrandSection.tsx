import { useHayc } from '../hayc/config-context';

export function BrandSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <div className="brand-area pt-60 pb-60" style={{ backgroundColor: config.brandConfig.backgroundColor }}>
      <div className="container">
        <div className="row brand-active">
          {config.brandConfig.brands.map((brand, index) => (
            <div key={index} className="col-xl-2">
              <div className="single-brand">
                <img 
                  src={img(brand.image)} 
                  alt={t(brand.alt)}
                  {...cp(`brandConfig.brands.${index}.alt`)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}