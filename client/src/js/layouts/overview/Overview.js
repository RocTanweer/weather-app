import Button from "../../components/global/Button";
import Icon from "../../components/global/Icon";

function Overview() {
  return (
    <section className="overview">
      <div className="overview__top">
        <Button type={"search"}>Search for places</Button>
        <Button type={"marker"}>
          <Icon icon="marker" size={22} />
        </Button>
      </div>
    </section>
  );
}

export default Overview;
