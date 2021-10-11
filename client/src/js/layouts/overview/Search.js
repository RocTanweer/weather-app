import { useContext } from "react";
import { GlobalContext } from "../../store/context-manager";
import Button from "../../components/global/Button";
import { closeIconSvg, rightArrowSvg } from "./overData";

function Search() {
  const { handleButtonClick, handleSearchFormSubmit, searchedLocations } =
    useContext(GlobalContext);
  return (
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
        <button type="submit" className="btn btn--submit">
          search
        </button>
      </form>

      <ul className="overview__search--history">
        {searchedLocations.map((location, key) => (
          <li key={key}>
            {location}
            {rightArrowSvg}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
