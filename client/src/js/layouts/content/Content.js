import Button from "../../components/global/Button";
import { GlobalContext } from "../../store/context-manager";
import { useContext } from "react";
import images from "../../../assets/imgData";
import Moment from "react-moment";
import Icon from "../../components/global/Icon";

function Content() {
  const {
    isLoading,
    current,
    forecast,
    setIsCelcius,
    handleTempUnit,
    isCelcius,
  } = useContext(GlobalContext);

  const handleTempChange = (e) => {
    e.target.dataset.type === "degC" ? setIsCelcius(true) : setIsCelcius(false);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const { windSpeed, windDir, pressure, humidity, visibility } = current;
  const { data } = forecast;

  return (
    <section className="content">
      <div className="contentWrapper">
        <div className="content__top">
          <div className="switchTemp">
            <Button
              type="degC"
              children="°C"
              active={isCelcius}
              handleClick={handleTempChange}
            />
            <Button
              type="degF"
              children="°F"
              active={!isCelcius}
              handleClick={handleTempChange}
            />
          </div>
        </div>
        <section className="content__forecastWrapper">
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
        </section>
        <section className="content__highlights">
          <h3 className="content__highlights--heading">Today's Highlights</h3>
          <div className="content__highlights--dataContainer">
            <article className="content__highlights--data">
              <p className="type">Wind status</p>
              <p className="measure measure--top">
                <span className="number">{windSpeed}</span>
                <span className="unit">mph</span>
              </p>
              <span className="btn--marker directionIcon">
                <Icon
                  icon="direction"
                  size="19"
                  color="#e7e7eb"
                  style={{ transform: `rotate(${windDir}deg)` }}
                />
              </span>
            </article>
            <article className="content__highlights--data">
              <p className="type">Humidity</p>
              <p className="measure measure--top">
                <span className="number">{humidity}</span>
                <span className="unit">%</span>
              </p>
              <div className="range">
                <div className="range--scale">
                  <span>0</span>
                  <span>50</span>
                  <span>100</span>
                </div>
                <div className="range--indicator">
                  <div
                    className="highlighted"
                    style={{ width: `${humidity}%` }}
                  ></div>
                </div>
                <div className="range--unit">
                  <span>%</span>
                </div>
              </div>
            </article>
            <article className="content__highlights--data">
              <p className="type">Visibility</p>
              <p className="measure">
                <span className="number">{visibility}</span>
                <span className="unit">miles</span>
              </p>
            </article>
            <article className="content__highlights--data">
              <p className="type">Air Pressure</p>
              <p className="measure">
                <span className="number">{pressure}</span>
                <span className="unit">mb</span>
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Content;
