import { useHayc } from '../hayc/config-context';

interface AvailabilityTableConfig {
  title: { en: string };
  subtitle: { en: string };
  tableHeaders: {
    apartment: { en: string };
    rooms: { en: string };
    size: { en: string };
    price: { en: string };
    availability: { en: string };
  };
  tableData: {
    apartment: string;
    rooms: string;
    size: string;
    price: string;
    availability: string;
    available: boolean;
  }[];
}

export const availabilityTableConfig: AvailabilityTableConfig = {
  title: { en: 'Apartment Availability' },
  subtitle: { en: 'Check current apartment availability and pricing' },
  tableHeaders: {
    apartment: { en: 'Apartment' },
    rooms: { en: 'Rooms' },
    size: { en: 'Size' },
    price: { en: 'Price' },
    availability: { en: 'Availability' }
  },
  tableData: [
    {
      apartment: 'A-101',
      rooms: '2 BR',
      size: '850 sq ft',
      price: '$2,500/month',
      availability: 'Available',
      available: true
    },
    {
      apartment: 'A-102',
      rooms: '1 BR',
      size: '650 sq ft',
      price: '$1,800/month',
      availability: 'Occupied',
      available: false
    },
    {
      apartment: 'A-103',
      rooms: '3 BR',
      size: '1200 sq ft',
      price: '$3,200/month',
      availability: 'Available',
      available: true
    },
    {
      apartment: 'A-201',
      rooms: '2 BR',
      size: '900 sq ft',
      price: '$2,700/month',
      availability: 'Available Soon',
      available: true
    }
  ]
};

export default function NeighborhoodsSection() {
  const { t, config, cp } = useHayc();

  return (
    <div className="availability-table">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center mb-50">
              <h2 {...cp('availabilityTableConfig.title')}>
                {t(config.availabilityTableConfig.title)}
              </h2>
              <p {...cp('availabilityTableConfig.subtitle')}>
                {t(config.availabilityTableConfig.subtitle)}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table availability-table-content">
                <thead>
                  <tr>
                    <th {...cp('availabilityTableConfig.tableHeaders.apartment')}>
                      {t(config.availabilityTableConfig.tableHeaders.apartment)}
                    </th>
                    <th {...cp('availabilityTableConfig.tableHeaders.rooms')}>
                      {t(config.availabilityTableConfig.tableHeaders.rooms)}
                    </th>
                    <th {...cp('availabilityTableConfig.tableHeaders.size')}>
                      {t(config.availabilityTableConfig.tableHeaders.size)}
                    </th>
                    <th {...cp('availabilityTableConfig.tableHeaders.price')}>
                      {t(config.availabilityTableConfig.tableHeaders.price)}
                    </th>
                    <th {...cp('availabilityTableConfig.tableHeaders.availability')}>
                      {t(config.availabilityTableConfig.tableHeaders.availability)}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {config.availabilityTableConfig.tableData.map((row, index) => (
                    <tr key={index}>
                      <td {...cp(`availabilityTableConfig.tableData.${index}.apartment`)}>
                        {row.apartment}
                      </td>
                      <td {...cp(`availabilityTableConfig.tableData.${index}.rooms`)}>
                        {row.rooms}
                      </td>
                      <td {...cp(`availabilityTableConfig.tableData.${index}.size`)}>
                        {row.size}
                      </td>
                      <td {...cp(`availabilityTableConfig.tableData.${index}.price`)}>
                        {row.price}
                      </td>
                      <td {...cp(`availabilityTableConfig.tableData.${index}.availability`)}>
                        <span className={`status ${row.available ? 'available' : 'occupied'}`}>
                          {row.availability}
                        </span>
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
  );
}