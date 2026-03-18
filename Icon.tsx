import React from 'react';
import { StyleProp, TextStyle, ViewStyle, StyleSheet, Image } from 'react-native';

import IonIcon from 'react-native-vector-icons/Ionicons';
import { IconProps } from 'react-native-vector-icons/Icon';

import ArrowBack from '@assets/images/icons/arrow-back.svg';
import ArrowDown from '@assets/images/icons/arrow-down.svg';
import ArrowForward from '@assets/images/icons/arrow-forward.svg';
import ArrowLeft from '@assets/images/icons/arrow-left.svg';
import ArrowRight from '@assets/images/icons/arrow-right.svg';
import ArrowUp from '@assets/images/icons/arrow-up.svg';
import Clock from '@assets/images/icons/clock.svg';
import Close from '@assets/images/icons/close.svg';
import CrisisStripIcon from '@assets/images/icons/crisis-strip-icon.svg';
import DewPoint from '@assets/images/icons/dew-point.svg';
import FeelsLikeColder from '@assets/images/icons/feels-like-colder.svg';
import FeelsLikeWarmer from '@assets/images/icons/feels-like-warmer.svg';
import FeelsLike from '@assets/images/icons/feels-like.svg';
import Gust from '@assets/images/icons/gust.svg';
import InfoDeleteLocationDark from '@assets/images/icons/info-delete-location-dark.svg';
import InfoLocateDark from '@assets/images/icons/info-locate-dark.svg';
import InfoSaveLocationDark from '@assets/images/icons/info-save-location-dark.svg';
import InfoDeleteLocationLight from '@assets/images/icons/info-delete-location-light.svg';
import InfoLocateLight from '@assets/images/icons/info-locate-light.svg';
import InfoSaveLocationLight from '@assets/images/icons/info-save-location-light.svg';
import Info from '@assets/images/icons/info.svg';
import Layers from '@assets/images/icons/layers.svg';
import Locate from '@assets/images/icons/locate.svg';
import MaintenanceStripIcon from '@assets/images/icons/maintenance-strip-icon.svg';
import MapMarker from '@assets/images/icons/map-marker.svg';
import Map from '@assets/images/icons/map.svg';
import Menu from '@assets/images/icons/menu.svg';
import Mic from '@assets/images/icons/mic.svg';
import MidnightSun from '@assets/images/icons/midnight-sun.svg';
import Minus from '@assets/images/icons/minus.svg';
import OpenInNew from '@assets/images/icons/open-in-new.svg';
import Pause from '@assets/images/icons/pause.svg';
import Play from '@assets/images/icons/play.svg';
import Plus from '@assets/images/icons/plus.svg';
import PolarNight from '@assets/images/icons/polar-night.svg';
import Precipitation from '@assets/images/icons/precipitation.svg';
//import ProviderLogoEn from '@assets/images/icons/provider-logo-en.svg';
//import ProviderLogoFi from '@assets/images/icons/provider-logo-fi.svg';
//import ProviderLogoSv from '@assets/images/icons/provider-logo-sv.svg';
import RadioButtonOff from '@assets/images/icons/radio-button-off.svg';
import RadioButtonOn from '@assets/images/icons/radio-button-on.svg';
import RainDark from '@assets/images/icons/rain-dark.svg';
import RainLight from '@assets/images/icons/rain-light.svg';
import RainWhite from '@assets/images/icons/rain-white.svg';
import Search from '@assets/images/icons/search.svg';
import Settings from '@assets/images/icons/settings.svg';
import Snow from '@assets/images/icons/snow.svg';
import SocialYoutube from '@assets/images/icons/social-youtube.svg';
import SocialFacebook from '@assets/images/icons/social-facebook.svg';
import StarSelected from '@assets/images/icons/star-selected.svg';
import StarUnselected from '@assets/images/icons/star-unselected.svg';
import SunArrowDown from '@assets/images/icons/sun-arrow-down.svg';
import SunArrowUp from '@assets/images/icons/sun-arrow-up.svg';
import Sun from '@assets/images/icons/sun.svg';
import Sunrise from '@assets/images/icons/sunrise.svg';
import Sunset from '@assets/images/icons/sunset.svg';
import TemperatureDark from '@assets/images/icons/temperature-dark.svg';
import TemperatureLight from '@assets/images/icons/temperature-light.svg';
import TemperatureHighestDark from '@assets/images/icons/temperature-highest-dark.svg';
import TemperatureHighestLight from '@assets/images/icons/temperature-highest-light.svg';
import TemperatureLowestDark from '@assets/images/icons/temperature-lowest-dark.svg';
import TemperatureLowestLight from '@assets/images/icons/temperature-lowest-light.svg';
import Temperature from '@assets/images/icons/temperature.svg';
import Thunder from '@assets/images/icons/thunder.svg';
import Time from '@assets/images/icons/time.svg';
import Warnings from '@assets/images/icons/warnings.svg';
import WarningsOrangeLight from '@assets/images/icons/warnings-orange-light.svg';
import WarningsOrangeDark from '@assets/images/icons/warnings-orange-dark.svg';
import WarningsYellowLight from '@assets/images/icons/warnings-yellow-light.svg';
import WarningsYellowDark from '@assets/images/icons/warnings-yellow-dark.svg';
import WarningsRedLight from '@assets/images/icons/warnings-red-light.svg';
import WarningsRedDark from '@assets/images/icons/warnings-red-dark.svg';
import WeatherSymbol from '@assets/images/icons/weather-symbol.svg';
import Weather from '@assets/images/icons/weather.svg';
import WindArrow from '@assets/images/icons/wind-arrow.svg';
import WindDark from '@assets/images/icons/wind-dark.svg';
import WindLight from '@assets/images/icons/wind-light.svg';
import WindLightMap from '@assets/images/icons/wind-light-map.svg';
import WindNextHour from '@assets/images/icons/wind-next-hour.svg';
import Wind from '@assets/images/icons/wind.svg';

// Legend
import Flash1 from '@assets/images/legend/flash_red.svg';
import Flash2 from '@assets/images/legend/flash_yellow1.svg';
import Flash3 from '@assets/images/legend/flash_yellow2.svg';
import Flash1Dark from '@assets/images/legend/flash_red.svg';
import Flash2Dark from '@assets/images/legend/flash_yellow1.svg';
import Flash3Dark from '@assets/images/legend/flash_yellow2.svg';
import WindArrow0 from '@assets/images/legend/arrow0.svg';
import WindArrow1 from '@assets/images/legend/arrow1.svg';
import WindArrow2 from '@assets/images/legend/arrow2.svg';
import WindArrow3 from '@assets/images/legend/arrow3.svg';
import WindArrow4 from '@assets/images/legend/arrow4.svg';
import WindArrow5 from '@assets/images/legend/arrow5.svg';
import WindArrow6 from '@assets/images/legend/arrow6.svg';

// FeelsLike Icons
import FeelsLikeBasic from '@assets/images/feelslike/basic.svg';
import FeelsLikeEaster from '@assets/images/feelslike/easter.svg';
import FeelsLikeHalloween from '@assets/images/feelslike/halloween.svg';
import FeelsLikeHot from '@assets/images/feelslike/hot.svg';
import FeelsLikeItsenaisyyspaiva from '@assets/images/feelslike/itsenaisyyspaiva.svg';
import FeelsLikeJuhannus from '@assets/images/feelslike/juhannus.svg';
import FeelsLikeNaistenpaiva from '@assets/images/feelslike/naistenpaiva.svg';
import FeelsLikeNewYear from '@assets/images/feelslike/newyear.svg';
import FeelsLikeRaining from '@assets/images/feelslike/raining.svg';
import FeelsLikeValentine from '@assets/images/feelslike/valentine.svg';
import FeelsLikeVappu from '@assets/images/feelslike/vappu.svg';
import FeelsLikeWindy from '@assets/images/feelslike/windy.svg';
import FeelsLikeWinter from '@assets/images/feelslike/winter.svg';
import FeelsLikeXmas from '@assets/images/feelslike/xmas.svg';

// FMI warning icons

import HotWeatherWarning from '@assets/images/icons/warnings/warnings_hot_weather.svg';
import FloodWarning from '@assets/images/icons/warnings/warnings_flood.svg';
import GrassFireWeatherWarning from '@assets/images/icons/warnings/warnings_grass_fire_weather.svg';
import PedestrianSafetyWarning from '@assets/images/icons/warnings/warnings_pedestrian_safety.svg';
import ColdWeatherWarning from '@assets/images/icons/warnings/warnings_cold_weather.svg';
import RainWarning from '@assets/images/icons/warnings/warnings_rain.svg';
import IcingWarning from '@assets/images/icons/warnings/warnings_icing.svg';
import ThunderstormWarning from '@assets/images/icons/warnings/warnings_thunder_storm.svg';
import SeaWaterHeightHighWarning from '@assets/images/icons/warnings/warnings_sea_water_height_high.svg';
import SeaWaterHeightShallowWarning from '@assets/images/icons/warnings/warnings_sea_water_height_shallow.svg';
import SeaWaveHeightWarning from '@assets/images/icons/warnings/warnings_sea_wave_height.svg';
import SeaWindWarning from '@assets/images/icons/warnings/warnings_sea_wind.svg';
import TrafficWeatherWarning from '@assets/images/icons/warnings/warnings_traffic_weather.svg';
import UVNoteWarning from '@assets/images/icons/warnings/warnings_uv_note.svg';
import WindWarning from '@assets/images/icons/warnings/warnings_wind.svg';

// PNG icons

const ProviderLogoLight = require('@assets/images/provider-logo-light.png');
const ProviderLogoDark = require('@assets/images/provider-logo-dark.png');

import { SvgProps } from 'react-native-svg';

type CustomIconProps = IconProps & {
  name: string;
  width?: number;
  height?: number;
  size?: number;
  style?: StyleProp<ViewStyle & TextStyle>;
};

const Icon: React.FC<CustomIconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'arrow-back':
      return <ArrowBack {...(props as SvgProps)} />;
    case 'arrow-down':
      return <ArrowDown {...(props as SvgProps)} />;
    case 'arrow-forward':
      return <ArrowForward {...(props as SvgProps)} />;
    case 'arrow-left':
      return <ArrowLeft {...(props as SvgProps)} />;
    case 'arrow-right':
      return <ArrowRight {...(props as SvgProps)} />;
    case 'arrow-up':
      return <ArrowUp {...(props as SvgProps)} />;
    case 'clock':
      return <Clock {...(props as SvgProps)} />;
    case 'close':
      return <Close {...(props as SvgProps)} />;
    case 'crisis-strip-icon':
      return <CrisisStripIcon {...(props as SvgProps)} />;
    case 'dew-point':
      return <DewPoint {...(props as SvgProps)} />;
    case 'feels-like-colder':
      return <FeelsLikeColder {...(props as SvgProps)} />;
    case 'feels-like-warmer':
      return <FeelsLikeWarmer {...(props as SvgProps)} />;
    case 'feels-like':
      return <FeelsLike {...(props as SvgProps)} />;
    case 'gust':
      return <Gust {...(props as SvgProps)} />;
    case 'info-delete-location-dark':
      return <InfoDeleteLocationDark {...(props as SvgProps)} />;
    case 'info-locate-dark':
      return <InfoLocateDark {...(props as SvgProps)} />;
    case 'info-save-location-dark':
      return <InfoSaveLocationDark {...(props as SvgProps)} />;
    case 'info-delete-location-light':
      return <InfoDeleteLocationLight {...(props as SvgProps)} />;
    case 'info-locate-light':
      return <InfoLocateLight {...(props as SvgProps)} />;
    case 'info-save-location-light':
      return <InfoSaveLocationLight {...(props as SvgProps)} />;
    case 'info':
      return <Info {...(props as SvgProps)} />;
    case 'layers':
      return <Layers {...(props as SvgProps)} />;
    case 'locate':
      return <Locate {...(props as SvgProps)} />;
    case 'maintenance-strip-icon':
      return <MaintenanceStripIcon {...(props as SvgProps)} />;
    case 'map-marker':
      return <MapMarker {...(props as SvgProps)} />;
    case 'map':
      return <Map {...(props as SvgProps)} />;
    case 'menu':
      return <Menu {...(props as SvgProps)} />;
    case 'mic':
      return <Mic {...(props as SvgProps)} />;
    case 'midnight-sun':
      return <MidnightSun {...(props as SvgProps)} />;
    case 'minus':
      return <Minus {...(props as SvgProps)} />;
    case 'open-in-new':
      return <OpenInNew {...(props as SvgProps)} />;
    case 'pause':
      return <Pause {...(props as SvgProps)} />;
    case 'play':
      return <Play {...(props as SvgProps)} />;
    case 'plus':
      return <Plus {...(props as SvgProps)} />;
    case 'polar-night':
      return <PolarNight {...(props as SvgProps)} />;
    case 'precipitation':
      return <Precipitation {...(props as SvgProps)} />;
    case 'provider-logo-light':
      return <Image source={ProviderLogoLight} resizeMode="contain" style={styles.providerLogo} />
    case 'provider-logo-dark':
      return <Image source={ProviderLogoDark} resizeMode="contain" style={styles.providerLogo} />
    case 'radio-button-off':
      return <RadioButtonOff {...(props as SvgProps)} />;
    case 'radio-button-on':
      return <RadioButtonOn {...(props as SvgProps)} />;
    case 'rain-dark':
      return <RainDark {...(props as SvgProps)} />;
    case 'rain-light':
      return <RainLight {...(props as SvgProps)} />;
    case 'rain-white':
      return <RainWhite {...(props as SvgProps)} />;
    case 'search':
      return <Search {...(props as SvgProps)} />;
    case 'settings':
      return <Settings {...(props as SvgProps)} />;
    case 'snow':
      return <Snow {...(props as SvgProps)} />;
    case 'social-youtube-dark':
      return <SocialYoutube {...(props as SvgProps)} />;
    case 'social-facebook-dark':
      return <SocialFacebook {...(props as SvgProps)} />;
    case 'social-youtube-light':
      return <SocialYoutube {...(props as SvgProps)} />;
    case 'social-facebook-light':
      return <SocialFacebook {...(props as SvgProps)} />;
    case 'star-selected':
      return <StarSelected {...(props as SvgProps)} />;
    case 'star-unselected':
      return <StarUnselected {...(props as SvgProps)} />;
    case 'sun-arrow-down':
      return <SunArrowDown {...(props as SvgProps)} />;
    case 'sun-arrow-up':
      return <SunArrowUp {...(props as SvgProps)} />;
    case 'sun':
      return <Sun {...(props as SvgProps)} />;
    case 'sunrise':
      return <Sunrise {...(props as SvgProps)} />;
    case 'sunset':
      return <Sunset {...(props as SvgProps)} />;
    case 'temperature-dark':
      return <TemperatureDark {...(props as SvgProps)} />;
    case 'temperature-light':
      return <TemperatureLight {...(props as SvgProps)} />;
    case 'temperature-highest-dark':
      return <TemperatureHighestDark {...(props as SvgProps)} />;
    case 'temperature-highest-light':
      return <TemperatureHighestLight {...(props as SvgProps)} />;
    case 'temperature-lowest-dark':
      return <TemperatureLowestDark {...(props as SvgProps)} />;
    case 'temperature-lowest-light':
      return <TemperatureLowestLight {...(props as SvgProps)} />;
    case 'temperature':
      return <Temperature {...(props as SvgProps)} />;
    case 'thunder':
      return <Thunder {...(props as SvgProps)} />;
    case 'time':
      return <Time {...(props as SvgProps)} />;
    case 'warnings':
      return <Warnings {...(props as SvgProps)} />;
    case 'warnings-orange-light':
      return <WarningsOrangeLight {...(props as SvgProps)} />;
    case 'warnings-orange-dark':
      return <WarningsOrangeDark {...(props as SvgProps)} />;
    case 'warnings-yellow-light':
      return <WarningsYellowLight {...(props as SvgProps)} />;
    case 'warnings-yellow-dark':
      return <WarningsYellowDark {...(props as SvgProps)} />;
    case 'warnings-red-light':
      return <WarningsRedLight {...(props as SvgProps)} />;
    case 'warnings-red-dark':
      return <WarningsRedDark {...(props as SvgProps)} />;
    case 'weather-symbol':
      return <WeatherSymbol {...(props as SvgProps)} />;
    case 'weather':
      return <Weather {...(props as SvgProps)} />;
    case 'wind-arrow':
      return <WindArrow {...(props as SvgProps)} />;
    case 'wind-dark':
      return <WindDark {...(props as SvgProps)} />;
    case 'wind-light':
      return <WindLight {...(props as SvgProps)} />;
    case 'wind-light-map':
      return <WindLightMap {...(props as SvgProps)} />;
    case 'wind-next-hour':
      return <WindNextHour {...(props as SvgProps)} />;
    case 'wind':
      return <Wind {...(props as SvgProps)} />;
    case 'feels-like-basic':
      return <FeelsLikeBasic {...(props as SvgProps)} />;
    case 'feels-like-easter':
      return <FeelsLikeEaster {...(props as SvgProps)} />;
    case 'feels-like-halloween':
      return <FeelsLikeHalloween {...(props as SvgProps)} />;
    case 'feels-like-hot':
      return <FeelsLikeHot {...(props as SvgProps)} />;
    case 'feels-like-itsenaisyyspaiva':
      return <FeelsLikeItsenaisyyspaiva {...(props as SvgProps)} />;
    case 'feels-like-juhannus':
      return <FeelsLikeJuhannus {...(props as SvgProps)} />;
    case 'feels-like-naistenpaiva':
      return <FeelsLikeNaistenpaiva {...(props as SvgProps)} />;
    case 'feels-like-newyear':
      return <FeelsLikeNewYear {...(props as SvgProps)} />;
    case 'feels-like-raining':
      return <FeelsLikeRaining {...(props as SvgProps)} />;
    case 'feels-like-valentine':
      return <FeelsLikeValentine {...(props as SvgProps)} />;
    case 'feels-like-vappu':
      return <FeelsLikeVappu {...(props as SvgProps)} />;
    case 'feels-like-windy':
      return <FeelsLikeWindy {...(props as SvgProps)} />;
    case 'feels-like-winter':
      return <FeelsLikeWinter {...(props as SvgProps)} />;
    case 'feels-like-xmas':
      return <FeelsLikeXmas {...(props as SvgProps)} />;
    case 'flash1':
      return <Flash1 {...(props as SvgProps)} />;
    case 'flash2':
      return <Flash2 {...(props as SvgProps)} />;
    case 'flash3':
      return <Flash3 {...(props as SvgProps)} />;
    case 'flash1-dark':
      return <Flash1Dark {...(props as SvgProps)} />;
    case 'flash2-dark':
      return <Flash2Dark {...(props as SvgProps)} />;
    case 'flash3-dark':
      return <Flash3Dark {...(props as SvgProps)} />;
    case 'wind-arrow-0':
      return <WindArrow0 {...(props as SvgProps)} />;
    case 'wind-arrow-1':
      return <WindArrow1 {...(props as SvgProps)} />;
    case 'wind-arrow-2':
      return <WindArrow2 {...(props as SvgProps)} />;
    case 'wind-arrow-3':
      return <WindArrow3 {...(props as SvgProps)} />;
    case 'wind-arrow-4':
      return <WindArrow4 {...(props as SvgProps)} />;
    case 'wind-arrow-5':
      return <WindArrow5 {...(props as SvgProps)} />;
    case 'wind-arrow-6':
      return <WindArrow6 {...(props as SvgProps)} />;

     /*
      'thunderstorm',
      'wind',
      'rain',
      'trafficWeather',
      'pedestrianSafety',
      'forestFireWeather',
      'hotWeather',
      'coldWeather',
      'uvNote',
      'flooding',
      */

    case 'fmi-warnings-coldWeather':
      return <ColdWeatherWarning {...(props as SvgProps)} />;
    case 'fmi-warnings-flooding':
      return <FloodWarning {...(props as SvgProps)} />;
    case 'fmi-warnings-forestFireWeather':
      return <GrassFireWeatherWarning {...(props as SvgProps)} />;
    case 'fmi-warnings-hotWeather':
      return <HotWeatherWarning {...(props as SvgProps)} />;
    case 'fmi-warnings-icing':
      return <IcingWarning {...(props as SvgProps)} />;
    case 'fmi-warnings-seaIcing':
      return <IcingWarning {...(props as SvgProps)} />;
    case 'fmi-warnings-pedestrianSafety':
      return <PedestrianSafetyWarning {...(props as SvgProps)} />;
    case 'fmi-warnings-rain':
      return <RainWarning {...(props as SvgProps)} />;
    case 'fmi-warnings-seaWaterHeightHighWater':
      return <SeaWaterHeightHighWarning {...(props as SvgProps)} />;
    case 'fmi-warnings-seaWaterHeightShallowWater':
      return <SeaWaterHeightShallowWarning {...(props as SvgProps)} />;
    case 'fmi-warnings-seaWaveHeight':
      return <SeaWaveHeightWarning {...(props as SvgProps)} />;
    case 'fmi-warnings-seaWind':
      return <SeaWindWarning {...(props as SvgProps)} />;
    case 'fmi-warnings-seaThunderStorm':
      return <ThunderstormWarning {...(props as SvgProps)} />;
    case 'fmi-warnings-thunderstorm':
      return <ThunderstormWarning {...(props as SvgProps)} />;
    case 'fmi-warnings-trafficWeather':
      return <TrafficWeatherWarning {...(props as SvgProps)} />;
    case 'fmi-warnings-uvNote':
      return <UVNoteWarning {...(props as SvgProps)} />;
    case 'fmi-warnings-wind':
      return <WindWarning {...(props as SvgProps)} />;
    default:
      return <IonIcon name={name} {...props} />;
  }
};

const styles = StyleSheet.create({
  providerLogo: {
    width: 120,
    height: 35,
  },
});

export default Icon;
