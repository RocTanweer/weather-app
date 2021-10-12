import { GlobalContext } from "../../store/context-manager";
import { useContext } from "react";
import Search from "./Search";
import OverviewContent from "./OverviewContent";

function Overview() {
  const { isSearchActive } = useContext(GlobalContext);

  return (
    <section className="overview">
      {isSearchActive ? <Search /> : <OverviewContent />}
    </section>
  );
}

export default Overview;
