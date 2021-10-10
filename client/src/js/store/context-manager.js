import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isCelcius, setIsCelcius] = useState(true);
  const [locationName, setLocationName] = useState(undefined);
  const { setIsLoading, isLoading, data } = useFetch(locationName);

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
    }
  };

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    setLocationName(e.target.search.value);
    setIsSearchActive(false);
  };

  const context = {
    setIsLoading,
    isLoading,
    current: data?.currentLocationData,
    forecast: data?.currentLocationForecastData,
    setIsCelcius,
    isCelcius,
    handleTempUnit,
    handleButtonClick,
    isSearchActive,
    handleSearchFormSubmit,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
}
