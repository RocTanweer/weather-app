import { GlobalContext } from "../../store/context-manager";
import { useContext } from "react";
import Search from "./Search";
import OverviewContent from "./OverviewContent";

function Overview() {
  const { isLoading, isSearchActive } = useContext(GlobalContext);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="overview">
      {isSearchActive ? <Search /> : <OverviewContent />}
    </section>
  );
}

export default Overview;
