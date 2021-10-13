import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isCelcius, setIsCelcius] = useState(true);
  const [locationName, setLocationName] = useState(undefined);
  const { isLoading, data } = useFetch(locationName);
  const [searchedLocations, setSearchedLocations] = useState([]);

  const handleTempUnit = (temp) => {
    return Math.ceil(temp * 1.8 + 32);
  };

  const handleButtonClick = (e) => {
    switch (e.target.dataset.type) {
      case "degC":
        setIsCelcius(true);
        break;
      case "degF":
        setIsCelcius(false);
        break;
      case "marker":
        setLocationName(undefined);
        break;
      case "search":
        setIsSearchActive(true);
        break;
      case "close":
        setIsSearchActive(false);
      case "historyLocation":
        setLocationName(e.target.innerText);
        setIsSearchActive(false);
    }
  };

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    const userInput = e.target.search.value;
    if (!userInput) return;
    setLocationName(userInput);
    setIsSearchActive(false);
    setSearchedLocations((prevState) => {
      if (prevState.length > 4) {
        return [userInput, ...prevState.slice(0, 4)];
      }
      return [userInput, ...prevState];
    });
  };

  const context = {
    isLoading,
    current: data?.currentLocationData,
    forecast: data?.currentLocationForecastData,
    isCelcius,
    handleTempUnit,
    handleButtonClick,
    isSearchActive,
    handleSearchFormSubmit,
    searchedLocations,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
}
