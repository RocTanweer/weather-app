import Button from "../../components/global/Button";
import { GlobalContext } from "../../store/context-manager";
import { useContext } from "react";
import ContentForecast from "./ContentForecast";
import Loading from "../../components/global/Loading";
import ContentHighlights from "./ContentHighlights";

function Content() {
  const { isLoading, isCelcius, handleButtonClick } = useContext(GlobalContext);

  return (
    <section className="content">
      <div className="contentWrapper">
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
