import Icon from '@assets/Icon';
import { Severity, WarningType } from '@store/warnings/types';
import React from 'react';

type WarningSymbolProps = {
  type: WarningType;
  severity: Severity;
  size?: number;
};
const WarningSymbol: React.FC<WarningSymbolProps> = ({
  type,
  severity,
  size,
}) => {
  const colorMap: { [key in Severity]: string } = {
    Moderate: 'yellow',
    Severe: 'orange',
    Extreme: 'red',
  };

  const typeMap: { [key in WarningType]: string } = {
    'Strong wind warning': 'strong-wind-warning',
    'Strong wind and poor visibility warning': 'strong-wind-warning',
    'Heavy precipitation warning': 'heavy-precipitation-warning',
    'Thunderstorm warning': 'thunderstorm-warning',
    'Low snow avalanche danger': 'avalanche-danger-warning',
    'Moderate snow avalanche danger': 'avalanche-danger-warning',
    'Considerable snow avalanche danger': 'avalanche-danger-warning',
    'High snow avalanche danger': 'avalanche-danger-warning',
    'Very high snow avalanche danger': 'avalanche-danger-warning',
    'Hail warning': 'hail-warning',
    'Flash flood warning': 'flash-flood-warning',
    'Flood warning': 'flood-warning',
    'Heavy snowfall warning': 'heavy-snowfall-warning',
    'Heavy snowfall and strong wind warning': 'heavy-snowfall-and-strong-wind-warning',
    'High daytime temperature warning': 'high-daytime-temperature-warning',
    'High nighttime temperature warning': 'high-nighttime-temperature-warning',
    'Low temperature warning': 'low-temperature-warning',
    'Early frost warning': 'early-frost-warning',
    'Late frost warning': 'late-frost-warning',
    'Fog warning': 'fog-warning',
    'Mudflow warning': 'mudflow-warning',
    'Landslide advisory': 'landslide-advisory',
    'Landslide warning': 'landslide-warning',
    'Air quality warning': 'airquality-warning',
    'High UV radiation warning': 'uv-radiation-warning',
    'Very high UV radiation warning': 'uv-radiation-warning',
    'Extreme UV radiation warning': 'uv-radiation-warning',
    'Sea storm warning': 'sea-storm-warning',

    'გაფრთხილება ძლიერი ქარის შესახებ': 'strong-wind-warning',
    'გაფრთხილება ძლიერი ქარისა და ხილვადობის გაუარესების შესახებ': 'strong-wind-warning',
    'გაფრთხილება ძლიერი ნალექების შესახებ': 'heavy-precipitation-warning',
    'გაფრთხილება ძლიერი ნალექებისა და ელჭექის შესახებ': 'thunderstorm-warning',
    'ზვავსაშიშროების დაბალი დონე': 'avalanche-danger-warning',
    'ზვავსაშიშროების საშუალო დონე': 'avalanche-danger-warning',
    'ზვავსაშიშროების საშუალოზე მაღალი დონე': 'avalanche-danger-warning',
    'ზვავსაშიშროების მაღალი დონე': 'avalanche-danger-warning',
    'ზვავსაშიშროების ძალიან მაღალი დონე': 'avalanche-danger-warning',
    'გაფრთხილება სეტყვის შესახებ': 'hail-warning',
    'გაფრთხილება წყალმოვარდნის შესახებ': 'flash-flood-warning',
    'გაფრთხილება წყალდიდობის შესახებ': 'flood-warning',
    'გაფრთხილება ძლიერი თოვის შესახებ': 'heavy-snowfall-warning',
    'გაფრთხილება ძლიერი თოვის და ძლიერი ქარის შესახებ': 'heavy-snowfall-and-strong-wind-warning',
    'გაფრთხილება დღის მაღალი ტემპერატურის შესახებ': 'high-daytime-temperature-warning',
    'გაფრთხილება ღამის მაღალი ტემპერატურის შესახებ': 'high-nighttime-temperature-warning',
    'გაფრთხილება ჰაერის დაბალი ტემპერატურის შესახებ': 'low-temperature-warning',
    'გაფრთხილება ადრეული წაყინვის შესახებ': 'early-frost-warning',
    'გაფრთხილება გვიანი წაყინვის შესახებ': 'late-frost-warning',
    'გაფრთხილება ნისლის შესახებ': 'fog-warning',
    'გაფრთხილება ღვარცოფის შესახებ': 'mudflow-warning',
    'რეკომენდაცია მეწყრის საფრთხის შესახებ': 'landslide-advisory',
    'გაფრთხილება მეწყრის საფრთხის შესახებ': 'landslide-warning',
    'გაფრთხილება ჰაერის ხარისხის შესახებ': 'airquality-warning',
    'გაფრთხილება ულტრაიისფერი გამოსხივების მაღალი დონის შესახებ': 'uv-radiation-warning',
    'გაფრთხილება შტორმული ღელვის შესახებ': 'sea-storm-warning',
    'გაფრთხილება ზღვაზე შტორმის შესახებ': 'sea-storm-warning',
  };

  let name = 'warnings';
  const typeName = typeMap[type];

  if (typeName) {
    name += `-${typeMap[type]}`;
    if (!['uvNote', 'pedestrianSafety'].includes(type)) {
      name += `-${colorMap[severity]}`;
    }
  }

console.log('tyyppi',type, typeName, severity, name);

  return <Icon name={name} width={size ?? 24} height={size ?? 24} />;
};

export default WarningSymbol;
