import Icon from "../global/Icon";

function CurrentWeatherDateLocation() {
  return (
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
  );
}

export default CurrentWeatherDateLocation;
