import Button from "../../components/global/Button";
import Icon from "../../components/global/Icon";
import { GlobalContext } from "../../store/context-manager";
import { useContext } from "react";
import images from "../../../assets/imgData";
import Moment from "react-moment";

function Overview() {
  const { isLoading, current } = useContext(GlobalContext);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const { date, desc, icon, location, temperature } = current;

  return (
    <section className="overview">
      <div className="overview__top">
        <Button type={"search"}>Search for places</Button>
        <Button type={"marker"}>
          <Icon icon="marker" size={22} />
        </Button>
      </div>
      <div className="overview__middle">
        <img src={images[icon]} alt="today's weather image" />
      </div>
      <div className="overview__bottom">
        <div className="overview--tempContainer">
          <p className="overview--temp">
            <span className="digit">{Math.ceil(temperature)}</span>
            <span className="unit" style={{ fontFamily: "Raleway" }}>
              °C
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
    </section>
  );
}

export default Overview;
