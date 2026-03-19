import { useHayc } from '../hayc/config-context';

export default function InteriorViewsSection() {
  const { t, img, config, cp } = useHayc();

  return (
    <section className="interior-views-section py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 {...cp('interiorViewsConfig.title')} className="text-3xl font-bold mb-4">
            {t(config.interiorViewsConfig.title)}
          </h2>
          <p {...cp('interiorViewsConfig.description')} className="text-gray-600 max-w-2xl mx-auto">
            {t(config.interiorViewsConfig.description)}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.interiorViewsConfig.items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={img(item.image)} 
                alt={t(item.title)}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 {...cp(`interiorViewsConfig.items.${index}.title`)} className="text-xl font-semibold mb-2">
                  {t(item.title)}
                </h3>
                <p {...cp(`interiorViewsConfig.items.${index}.description`)} className="text-gray-600">
                  {t(item.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}