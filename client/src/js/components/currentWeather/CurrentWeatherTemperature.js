function CurrentWeatherTemperature() {
  return (
    <div className="overview--tempContainer">
      <p className="overview--temp">
        <span className="digit">15</span>
        <span className="unit" style={{ fontFamily: "Raleway" }}>
          &#8451;
        </span>
      </p>
    </div>
  );
}

export default CurrentWeatherTemperature;
