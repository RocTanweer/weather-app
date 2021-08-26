import CurrentWeatherDateLocation from "../../components/currentWeather/CurrentWeatherDateLocation";
import CurrentWeatherDesc from "../../components/currentWeather/CurrentWeatherDesc";
import CurrentWeatherTemperature from "../../components/currentWeather/CurrentWeatherTemperature";

function OverviewBottom() {
  return (
    <div className="overview__bottom">
      <CurrentWeatherTemperature />
      <CurrentWeatherDesc />
      <CurrentWeatherDateLocation />
    </div>
  );
}

export default OverviewBottom;
