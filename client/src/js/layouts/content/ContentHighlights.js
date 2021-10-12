import { GlobalContext } from "../../store/context-manager";
import { useContext } from "react";
import Icon from "../../components/global/Icon";

function ContentHighlights() {
  const { current } = useContext(GlobalContext);

  const { windSpeed, windDir, pressure, humidity, visibility } = current;

  return (
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
  );
}

export default ContentHighlights;
