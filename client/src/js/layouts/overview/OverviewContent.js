import Button from "../../components/global/Button";
import Icon from "../../components/global/Icon";
import { GlobalContext } from "../../store/context-manager";
import { useContext } from "react";
import Loading from "../../components/global/Loading";
import OverviewDown from "./OverviewDown";

function OverviewContent() {
  const { handleButtonClick, isLoading } = useContext(GlobalContext);
  return (
    <>
      <div className="overview__top">
        <Button
          isLoading={isLoading}
          type={"search"}
          handleClick={handleButtonClick}
        >
          Search for places
        </Button>
        <Button
          isLoading={isLoading}
          type={"marker"}
          handleClick={handleButtonClick}
        >
          <Icon icon="marker" size={22} className="btn--markerIcon" />
        </Button>
      </div>
      <div className="overview__down">
        {isLoading ? <Loading size={"lg"} /> : <OverviewDown />}
      </div>
    </>
  );
}

export default OverviewContent;
