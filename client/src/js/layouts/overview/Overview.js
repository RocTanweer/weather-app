import OverviewBottom from "./OverviewBottom";
import OverviewMiddle from "./OverviewMiddle";
import OverviewTop from "./OverviewTop";

function Overview() {
  return (
    <section className="overview">
      <OverviewTop />
      <OverviewMiddle />
      <OverviewBottom />
    </section>
  );
}

export default Overview;
