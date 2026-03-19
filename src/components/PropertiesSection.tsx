import { useHayc } from '../hayc/config-context';

export interface PropertiesConfig {
  title: { en: string };
  items: {
    icon: string;
    count: string;
    label: { en: string };
  }[];
}

export const propertiesConfig: PropertiesConfig = {
  title: { en: 'Property Features' },
  items: [
    {
      icon: 'fal fa-pencil-ruler',
      count: '2543',
      label: { en: 'Square Feet' }
    },
    {
      icon: 'fas fa-bath',
      count: '4',
      label: { en: 'Bathrooms' }
    },
    {
      icon: 'fas fa-bed',
      count: '6',
      label: { en: 'Bedrooms' }
    },
    {
      icon: 'fas fa-car',
      count: '4',
      label: { en: 'Car parking' }
    }
  ]
};

export default function PropertiesSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <div className="row">
      {config.propertiesConfig.items.map((item, index) => (
        <div key={index} className="col-lg-3 col-sm-6">
          <div className="single-counter text-center mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
            <i className={item.icon}></i>
            <div className="counter p-relative">
              <span className="count">{item.count}</span>
            </div>
            <p {...cp(`propertiesConfig.items.${index}.label`)}>
              {t(item.label)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}