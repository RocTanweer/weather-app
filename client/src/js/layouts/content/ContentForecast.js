import { GlobalContext } from "../../store/context-manager";
import { useContext } from "react";
import images from "../../../assets/imgData";
import Moment from "react-moment";

function ContentForecase() {
  const { forecast, handleTempUnit, isCelcius } = useContext(GlobalContext);

  const { data } = forecast;

  return (
    <>
      {data.map((forecast) => {
        const { id, date, minTemp, maxTemp, icon } = forecast;
        return (
          <article key={id} className="content__forecast">
            <p className="content__forecast--day">
              <Moment
                format="ddd, D MMM"
                date={new Date(date * 1000)}
                withTitle
              />
            </p>
            <div className="content__forecast--img">
              <img src={images[icon]} alt="forecast-image" />
            </div>
            <p className="content__forecast--temp">
              <span className="max">
                {isCelcius
                  ? `${Math.ceil(maxTemp)}°C`
                  : `${handleTempUnit(maxTemp)}°F`}
              </span>
              <span className="min">
                {isCelcius
                  ? `${Math.ceil(minTemp)}°C`
                  : `${handleTempUnit(minTemp)}°F`}
              </span>
            </p>
          </article>
        );
      })}
    </>
  );
}

export default ContentForecase;
