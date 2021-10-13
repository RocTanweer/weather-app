import Button from "../../components/global/Button";
import { GlobalContext } from "../../store/context-manager";
import { useContext, useEffect, useState } from "react";
import ContentForecast from "./ContentForecast";
import Loading from "../../components/global/Loading";
import ContentHighlights from "./ContentHighlights";

function Content() {
  const { isLoading, isCelcius, handleButtonClick } = useContext(GlobalContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeEventFunc = (e) => {
      setWindowWidth(e.target.innerWidth);
    };
    window.addEventListener("resize", resizeEventFunc);
    return () => {
      window.removeEventListener("resize", resizeEventFunc);
    };
  }, []);

  return (
    <section className="content">
      <div className="contentWrapper">
        {windowWidth > 375 && (
          <div className="content__top">
            <div className="switchTemp">
              <Button
                isLoading={isLoading}
                type="degC"
                active={isCelcius}
                handleClick={handleButtonClick}
              >
                °C
              </Button>
              <Button
                isLoading={isLoading}
                type="degF"
                active={!isCelcius}
                handleClick={handleButtonClick}
              >
                °F
              </Button>
            </div>
          </div>
        )}
        <section className="content__forecastWrapper">
          {isLoading ? <Loading size={"sm"} /> : <ContentForecast />}
        </section>
        <section className="content__highlights">
          <h3 className="content__highlights--heading">Today's Highlights</h3>
          {isLoading ? <Loading size={"md"} /> : <ContentHighlights />}
        </section>
      </div>
    </section>
  );
}

export default Content;
