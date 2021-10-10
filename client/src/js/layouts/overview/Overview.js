import Button from "../../components/global/Button";
import Icon from "../../components/global/Icon";
import { GlobalContext } from "../../store/context-manager";
import { useContext } from "react";
import images from "../../../assets/imgData";
import Moment from "react-moment";

function Overview() {
  const {
    isLoading,
    current,
    handleTempUnit,
    isCelcius,
    handleButtonClick,
    isSearchActive,
    handleSearchFormSubmit,
  } = useContext(GlobalContext);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const { date, desc, icon, location, temperature } = current;

  const closeIconSvg = (
    <svg
      width="22"
      height="22"
      viewBox="0 0 385 385"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: "none" }}
    >
      <path
        d="M380.6 323.1L249.4 191.4L380.9 61.4C386.3 56 386.3 47.2 380.9 41.8L343.5 4.20001C340.9 1.60001 337.4 0.200012 333.7 0.200012C330 0.200012 326.5 1.70001 323.9 4.20001L193 133.8L61.9 4.30002C59.3 1.70002 55.8 0.300018 52.1 0.300018C48.4 0.300018 44.9 1.80002 42.3 4.30002L5.00001 41.9C-0.399988 47.3 -0.399988 56.1 5.00001 61.5L136.5 191.5L5.40001 323.1C2.80001 325.7 1.30002 329.2 1.30002 332.9C1.30002 336.6 2.70001 340.1 5.40001 342.7L42.8 380.3C45.5 383 49 384.4 52.6 384.4C56.1 384.4 59.7 383.1 62.4 380.3L193 249.1L323.7 380.2C326.4 382.9 329.9 384.3 333.5 384.3C337 384.3 340.6 383 343.3 380.2L380.7 342.6C383.3 340 384.8 336.5 384.8 332.8C384.7 329.2 383.2 325.7 380.6 323.1Z"
        fill="#E7E7EB"
      />
    </svg>
  );

  const overviewContent = (
    <section className="overview">
      <div className="overview__top">
        <Button type={"search"} handleClick={handleButtonClick}>
          Search for places
        </Button>
        <Button type={"marker"} handleClick={handleButtonClick}>
          <Icon icon="marker" size={22} className="btn--markerIcon" />
        </Button>
      </div>
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
    </section>
  );

  const searchActive = (
    <section className="overview">
      <div className="overview__search">
        <div className="overview__search--close">
          <Button type="close" handleClick={handleButtonClick}>
            {closeIconSvg}
          </Button>
        </div>

        <form
          className="overview__search--form"
          onSubmit={handleSearchFormSubmit}
        >
          <input
            type="text"
            name="search"
            placeholder="search location"
            autoComplete="off"
          />
          <button type="submit" className="btn btn--search">
            search
          </button>
        </form>
      </div>
    </section>
  );

  return <>{isSearchActive ? searchActive : overviewContent} </>;
}

export default Overview;
