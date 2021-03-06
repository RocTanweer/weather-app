import Icon from "../../components/global/Icon";
import { GlobalContext } from "../../store/context-manager";
import { useContext } from "react";
import images from "../../../assets/imgData";
import Moment from "react-moment";

function OverviewDown() {
  const { current, handleTempUnit, isCelcius } = useContext(GlobalContext);
  const { date, desc, icon, location, temperature } = current;

  return (
    <>
      <div className="overview__middle">
        <img src={images[icon]} alt="today's weather image" />
      </div>
      <div className="overview__bottom">
        <div className="overview--tempContainer">
          <p className="overview--temp">
            <span className="digit">
              {isCelcius ? Math.ceil(temperature) : handleTempUnit(temperature)}
            </span>
            <span className="unit" style={{ fontFamily: "Raleway" }}>
              {isCelcius ? "°C" : "°F"}
            </span>
          </p>
        </div>
        <p className="overview--desc">{desc}</p>
        <div className="overview--datelocationcontainer">
          <div className="overview--datecontainer">
            <span>Today</span>
            <span>.</span>
            <Moment
              format="ddd, D MMM"
              date={new Date(date * 1000)}
              withTitle
            />
          </div>
          <div className="overview--locationcontainer">
            <Icon icon="location" className="locationIcon" />
            <span className="locationName">{location}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default OverviewDown;
