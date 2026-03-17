import { ImageSourcePropType } from 'react-native';

export const backgroundsPhone: WeatherBackground = {};

export const backgroundsTablet: WeatherBackground = {};

export const sunBackground:ImageSourcePropType = require('./sun.jpg');
export const sunBackgroundDark:ImageSourcePropType = require('./sun-dark.jpg');

export const moonPhaseImages = {};

type TextColors = {
  day?: 'white' | 'black';
  night?: 'white' | 'black';
}

export type WeatherBackground = {
  [key: string]: {
    day: ImageSourcePropType;
    night: ImageSourcePropType;
    textColors?: TextColors;
  };
};

export const weatherBackgroundKeyParser = (key: string) => {
  let parsedKey = key;
  if (key.length === 3) {
    parsedKey = key.slice(1, 3);
    if (parsedKey[0] === '0') {
      parsedKey = parsedKey.slice(1, 2);
    }
  }
  return parsedKey;
};

export const weatherBackgroundGetter = (key: string, tablet = false) => {
  const symbolSet = tablet ? backgroundsTablet : backgroundsPhone;

  if (key === 'aurora') {
    return symbolSet.aurora.night;
  }

  const parsedKey = weatherBackgroundKeyParser(key);

  // TODO: fix
  const toReturn =
    key !== parsedKey ? symbolSet[parsedKey]?.night : symbolSet[parsedKey]?.day;
  if (toReturn) {
    return toReturn;
  }
  return undefined;
};

export const getOverrideTextColor = (key: string, tablet = false, night = false) : undefined | 'white' | 'black' => {
  const symbolSet = tablet ? backgroundsTablet : backgroundsPhone;
  const parsedKey = weatherBackgroundKeyParser(key);

  if (night && symbolSet[parsedKey]?.textColors?.night) {
    return symbolSet[parsedKey]?.textColors?.night;
  }
  if (!night && symbolSet[parsedKey]?.textColors?.day) {
    return symbolSet[parsedKey]?.textColors?.day;
  }

  return undefined;
};
