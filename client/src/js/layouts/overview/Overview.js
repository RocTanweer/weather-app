import Button from "../../components/global/Button";
import Icon from "../../components/global/Icon";
import image from "../../../assets/img/11d-thunderstorm.png";

function Overview() {
  return (
    <section className="overview">
      <div className="overview__top">
        <Button type={"search"}>Search for places</Button>
        <Button type={"marker"}>
          <Icon icon="marker" size={22} />
        </Button>
      </div>
      <div className="overview__middle">
        <img src={image} />
      </div>
      <div className="overview__bottom">
        <div className="overview--tempContainer">
          <p className="overview--temp">
            <span className="digit">15</span>
            <span className="unit" style={{ fontFamily: "Raleway" }}>
              &#8451;
            </span>
          </p>
        </div>
        <p className="overview--desc">Shower</p>
        <div className="overview--datelocationcontainer">
          <div className="overview--datecontainer">
            <span>Today</span>
            <span>.</span>
            <span>Fri, 5 Jun</span>
          </div>
          <div className="overview--locationcontainer">
            <Icon icon="location" className="locationIcon" />
            <span className="locationName">Helsinki</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
